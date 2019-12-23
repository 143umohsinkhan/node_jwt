const mongoose = require("mongoose");

const mongoUri = "mongodb+srv://mongodb:123mongo@cluster0-vqg7l.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(mongoUri,{
            useNewUrlParser : true
        });
        console.log("Connected to the DB");

    }catch(e){console.log(e);throw e;}
};

module.exports = InitiateMongoServer;