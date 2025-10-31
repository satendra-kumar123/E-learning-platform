import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// console.log("sid " , accountSid)
// console.log("token ", authToken)
const client = twilio(accountSid, authToken);

// console.log("this is twilio", client)

export {client}

// async function createMessage() {
//   const message = await client.messages.create({
//     body: "This is the ship that made the Kessel Run in fourteen parsecs?",
//     from: process.env.TWILIO_PHONE,
//     to: "+919675755876",
//   });

//   console.log(message.body);
// }

// export {createMessage}