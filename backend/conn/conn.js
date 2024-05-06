const mongoose = require("mongoose");
const conn = async() => {
    try{
        (await mongoose.connect("mongodb+srv://puspa:qazwsx12345@cluster0.dbi78nj.mongodb.net/contact1")).then(() => {
            console.log("Connected");
        },
         (error) => {
            console.log(error);
        }
    );
    }catch(error){
        console.log(error);
    }
};

conn();