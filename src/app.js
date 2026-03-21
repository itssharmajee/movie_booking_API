import express from "express"

export const app = express();

//Some middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());


// Some Routes
// app.use("/api/v1/movies")

app.get("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message: "API works perfectly"
    })
})