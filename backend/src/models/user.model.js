import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 4,
        maxLength: 16
    },
    description: {
        type: String,
        default: "",
        maxLength: [200, "description is not more than 200 letters"]
    },
    phoneNo: {
        type: String,
        required: true,
        // max: [10, "mobile no. cannot be bigger than 10 digits"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: [12, "password can not be bigger than 12 characters"]
    },
    role: {
        type: String,
        required: true,
        enum: ["Student", "Educator"]
    },
    avatar: {
        type: String,
        default: ""
    },
    enrolledCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    },
    refreshToken: {
        type: String,
        default: ""
    },
},{timestamps:true})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.accessTokenGenerate = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.refreshTokenGenerate = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)