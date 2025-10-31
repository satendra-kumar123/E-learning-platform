import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'
import validator from "validator"

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = await user.accessTokenGenerate()
        const refreshToken = await user.refreshTokenGenerate()
        user.refreshToken = refreshToken
        // console.log("accessToken", accessToken)
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    } catch (error) {
        console.log(error)
    }
}

const userRegister = asyncHandler(async (req, res)=> {
    const {name, email, phoneNo, password, role, description } = req.body
    if([name, email, phoneNo, password, role].some((field) => {
        field.trim() === ""
    })){
        return res.status(400).json({msg: "every field are required"})
    }

    if(!validator.isEmail(email)){
        return res.status(200).json({msg: "enter valid email"})
    }

    if(password.length <8) return res.status(400).json({msg: "enter strong password"})

    const existedUser = await User.findOne({
        $or: [{name},{email}]
    })

    if(existedUser) return res.status(400).json({msg: "user already existed"});

    const user = await User.create({
        name: name.toLowerCase(), 
        email, 
        password,
        role,
        description,
        phoneNo
    })

    let {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    // console.log(accessToken)

    const options = {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
    }

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser) return res.status(400).json({msg: "something went wrong while registering the user"})

    res
    .status(201)
    .cookie("accessToken", accessToken, options,)
    .cookie("refreshToken", refreshToken, options)
    .json({createdUser, msg: "user registered successfully."})
})

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(!user) return res.status(400).json({msg: "user not existed."})
    const passwordCorrect = await user.isPasswordCorrect(password)
    if(!passwordCorrect) return res.status(400).json({msg: "password not correct"})
    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
    }

    res
    .status(201)
    .cookie("accessToken", accessToken, options,)
    .cookie("refreshToken", refreshToken, options)
    .json({loggedInUser, msg:" user logged in seccessfull. "})
})

const logout = asyncHandler(async (req, res) => {
    // console.log("user ", req.user)
    await User.findByIdAndUpdate(req.user?._id,{
        $unset: {
            refreshToken: 1 // this remove the field from document
        }
    },
{
    new: true
})

const options = {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
    }

    return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json({msg: "user logged out"})

})

const refreshAccessToken = asyncHandler(async (req, res) => {
    console.log(req.cookies)
    const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken
    if(!incomingRefreshToken) return res.status(400).json({msg: "unauthorized request"});

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id)
        if(!user) return res.status(401).json({msg: "Invalid refresh token"});
        if(incomingRefreshToken !== user?.refreshToken) return res.status(401).json({msg: "Refresh token is expired or used"});
        const options = {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
        }
        const {accessToken, newRefreshToken} = generateAccessAndRefreshToken(user._id)

        res.status(200).cookie("accessToken", accessToken, options).cookie("refreshToken", newRefreshToken, options).json({accessToken, msg: "Access token refreshed"})
    } catch (error) {
        return res.status(401).json({msg: error?.message || "invalid refresh token."})
    }
})

const updatePassword = asyncHandler(async (req, res) => {
     const {oldPassword, newPassword} = req.body
    //  console.log(oldPassword)
    if(oldPassword === newPassword) return res.status(400).json({msg: "same password cannot be changed"});

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        return res.status(400).json({ msg: "Invalid old password"})
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    res.status(200).json({msg: "Password changed successfully"})

})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json({user: req.user, msg: "user fetched successfully"})
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {name, description} = req.body
    // console.log(req.body)
    if(name === "") return res.json({msg: "cannot update empty string"})

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                name,
                description
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json({user, msg: "Account details updated successfully"})
});

const updateUserAvatar = asyncHandler(async(req, res) => {
    const avatarLocalPath = req.file?.path

    if (!avatarLocalPath) {
        res.json({msg:"Avatar file is missing"})
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {
        res.status(400).json({msg: "Error while uploading on avatar"})
        
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar: avatar.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        {user, msg:"Avatar image updated successfully"}
    )
})

export { 
    userRegister, 
    login, 
    logout, 
    refreshAccessToken, 
    updatePassword, 
    getCurrentUser, 
    updateAccountDetails, 
    updateUserAvatar ,
}