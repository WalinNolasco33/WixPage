import { createPool } from "mysql2/promise";
import {config} from 'dotenv'
config();
export const pool= createPool({
    host:process.env.DB_HOST,
    port:3306,
    user:"root",
    password:process.env.PASS_DB,
    database:process.env.DB_DATABASE
});

