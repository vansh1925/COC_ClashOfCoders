import express from "express"
import cors from "cors"
const app = express()

//middlewares
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "Accept"],
// }))
app.use(express.json({ limit: "20kb" }))



//routes

export { app };