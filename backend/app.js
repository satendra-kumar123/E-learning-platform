import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(express.json({limit: "16kb"}))
app.use(express.text())
app.use(express.static("public"))
app.use(cookieParser())
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))


// routes import 
import { userRoutes } from "./src/routes/user.route.js"
import { smsRoutes } from "./src/routes/sms.route.js"

// routes declaration
app.use("/api/v1/user", userRoutes)
app.use("/api/v2", smsRoutes)

export {app}