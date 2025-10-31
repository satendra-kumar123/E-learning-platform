import { Router } from "express";
import { 
    userRegister, 
    login, 
    logout, 
    refreshAccessToken, 
    updatePassword, 
    getCurrentUser, 
    updateAccountDetails, 
    updateUserAvatar, 
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRoutes = Router()

userRoutes.route("/register").post(userRegister)
userRoutes.route("/login").post(login)
userRoutes.route("/logout").post(verifyJWT, logout)
userRoutes.route("/update-password").post(verifyJWT,updatePassword)
userRoutes.route("/refresh-token").post(verifyJWT,refreshAccessToken)
userRoutes.route("/profile").get(verifyJWT,getCurrentUser)
userRoutes.route("/update-profile").post(verifyJWT,updateAccountDetails)
userRoutes.route("/update-profile-picture").post(verifyJWT, upload.single("avatar"),updateUserAvatar)


export {userRoutes}