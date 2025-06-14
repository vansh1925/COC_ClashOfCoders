import express from "express"
import cors from "cors"
const app = express()
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.routes.js"
import matchRoutes from "./routes/match.routes.js"

//middlewares
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "Accept"],
// }))
app.use(clerkMiddleware());                 //So that req.auth is available on all routes.
app.use(express.json({ limit: "20kb" }))



//routes
app.use('/api/user', userRoutes);
app.use('/api/match', matchRoutes);

export { app };