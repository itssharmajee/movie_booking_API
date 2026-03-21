import { app } from "./src/app.js";
import {PORT, MONGO_URI} from "./src/config/credentials.js";
import {dbConnn} from "./src/config/db.conn.js"

export function serverConfig(){
    app.listen(PORT,()=>{
        console.log(`Server is lisening on PORT`, PORT);
        dbConnn(MONGO_URI);
        
    })
}
serverConfig()