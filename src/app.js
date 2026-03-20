import express from "express"
import { MONGO_URI, PORT } from "./config/credentials.js";
import { dbConnn } from "./config/db.conn.js";

const app = express();


export function serverConfig(){
    app.listen(PORT,()=>{
        console.log(`Server is lisening on PORT`, PORT);
        dbConnn(MONGO_URI);
        
    })
}