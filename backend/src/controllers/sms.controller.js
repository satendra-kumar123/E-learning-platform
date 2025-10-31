import { asyncHandler } from "../utils/asyncHandler.js";
import { client } from "../utils/sendSms.js";

const smsMessage = asyncHandler(async (req, res) => {
    const message = await client.messages.create({
        body: "ok your otp is 4545",
        from: process.env.TWILIO_PHONE,
        to: "+919675755876"
    })

    if(!message) return res.status(400).send("msg not sent")
    console.log(message)
    res.send("ok")
})


export {smsMessage}