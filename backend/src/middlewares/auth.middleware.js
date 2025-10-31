import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'

const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        // console.log("access token",token)
    
        if(!token || token === "undefined") return res.status(400).json({msg: "unauthorized request"})
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        // console.log(decodedToken)
    
        const user = await User.findById(decodedToken._id).select("-password -refreshToken")
        // console.log(user)
    
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
})

export { verifyJWT }