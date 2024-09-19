const mongoose = require("mongoose");
const connection = async() =>{
    try{
        await mongoose.connect("mongodb://85.31.235.228:27017/pdsbandw");
        console.log("Success db");
    }catch(error){
        console.log(error);
        throw new Error("Fail to conect to db!");
    }
}

module.exports = connection
