require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  
    } catch (error) {
        console.log("error en la coneccion con mongoose")
    }
};

module.exports = dbCon;