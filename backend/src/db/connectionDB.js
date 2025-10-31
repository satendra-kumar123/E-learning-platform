import mongoose from "mongoose";
import { DbName } from "../../constant.js";

const connectionDB = async function () {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DbName}`)
        console.log("mongodb connection successfull")
    } catch (error) {
        console.log("db error", error)
    }
    
}

export {connectionDB}