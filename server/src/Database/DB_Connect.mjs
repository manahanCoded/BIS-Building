import pg from "pg"
import env from "dotenv"

env.config()

const db = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 5432, 
  });
db.connect()



export default db
