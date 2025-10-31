import { Router } from "express";
import { smsMessage } from "../controllers/sms.controller.js";
const smsRoutes = Router()

smsRoutes.route("/sms").get(smsMessage)


export {smsRoutes}