import mongoose from "mongoose";

export async function dbConnn(uri) {
    return await mongoose
        .connect(uri)
        .then(() => console.log(`DB connected successfully`))
        .catch((error) => console.log(error));
}
