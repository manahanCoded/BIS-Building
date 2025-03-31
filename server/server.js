import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"
import cors from "cors"
import pgSession from "connect-pg-simple"
import db from "./src/Database/DB_Connect.mjs"

const app = express()
env.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


const pgStore = pgSession(session)
app.use(session({
    store: new pgStore({
        pool: db,
        createTableIfMissing: true,
    }),
    name: "My Portal",
    secret: process.env.Session_Secret,
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.Session_Cookie === "production",
        httpOnly: true,
        sameSite: process.env.Session_Cookie === "production"? "none" :"lax"
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: [
        "http://localhost:3000"
    ],
    credentials: true,
}))





const port = process.env.port || 5000
app.listen(port, () => console.log(`Port is now running on ${port}...`))