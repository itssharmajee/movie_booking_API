import mongoose from "mongoose";

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength:[6, "name must be length of 6 character and more"]
    },

    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String }
    },

    contact: {
        phone: {
            type:String,
            match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"]
        },
        email:{
            type:String,
        }
    },

    isActive: {
        type: Boolean,
        default: true 
    }

}, { timestamps: true });

export const Theatre = mongoose.model("theatre", theatreSchema);