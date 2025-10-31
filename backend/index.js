import dotenv from "dotenv"
import { app } from './app.js'
import { connectionDB } from "./src/db/connectionDB.js"
dotenv.config({
    path: "./.env"
})

connectionDB()
.then(()=> {
    app.listen(process.env.PORT, () => {
    console.log("server listening....", process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})
