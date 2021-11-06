const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DB_PASSWORD } = process.env;

const connectDB = () => {
    return mongoose.connect(
        `mongodb://alcantaramarkjohn:${DB_PASSWORD}@alcantaramarkjohn.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alcantaramarkjohn@`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => console.log("Database Connected Successfully"))
     .catch(err => console.error("Error Creating Database", err.message));
};

module.exports = connectDB;