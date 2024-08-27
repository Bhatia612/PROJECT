// require("dotenv").config({path: "../env"})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()













/*
// First Approach easy but not neat, and is unproffessional
import express from "express"

const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Not able to connect to DB . . .")
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log("listening on PORT: ", process.env.PORT)
            })
        } catch (err) {
            console.log(err)
            throw err
        }
    })()

*/