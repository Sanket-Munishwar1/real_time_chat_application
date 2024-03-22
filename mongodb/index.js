
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true)

    if(isConnected){
        console.log("MongoDB is connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_URL , {
            dbName: "Chat_App",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true
        console.log("MongoDB is connected Successfully")
    } catch (error) {
        console.log(error)
    }

}