const mongoose = require("mongoose")

async function dbConnection(){
    try{
        const DB_URL = process.env.MONGO_URI
        console.log("DB_URL:",DB_URL);

        await mongoose.connect(DB_URL)
        console.log("DB Connected");
        
    }
    catch(error){
        console.error("DB error")
    }
}

module.exports = dbConnection