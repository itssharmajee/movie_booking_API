import express from "express"
import { movieRoutes } from "./routes/movie.routes.js";
import { theatreRoutes } from "./routes/theatre.routes.js";

export const app = express();

//Some middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());


// Some Routes
app.use("/api/v1/movies",movieRoutes);
app.use("/api/v1/theatres",theatreRoutes)

app.get("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message: "API works perfectly"
    })
})