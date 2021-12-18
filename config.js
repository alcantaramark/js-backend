import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { DB_PASSWORD } = process.env;
export const connectDB = () => {
    return mongoose.connect(
        `mongodb://alcantaramarkjohn:${DB_PASSWORD}@alcantaramarkjohn.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alcantaramarkjohn@`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => console.log("Database Connected Successfully"))
     .catch(err => console.error("Error Creating Database", err.message));
};

//module.exports = connectDB;