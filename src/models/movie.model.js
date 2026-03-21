import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[2, "name must be of 2 and more characters"]
    },
    description:{
        type:String,
        required:true
    },
    casts:{
        type:[String],
        required:true,
    },
    trailerUrl:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
        default:"English"
    },
    releaseDate:{
        type:String,
        required:true,
        default:"RELEASED"
    },
},{timestamps:true});

export const Movie = mongoose.model("movie",movieSchema);