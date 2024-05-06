const express = require("express");
const cors =require("cors");
const app = express();
const contact = require("./routes/contact");

require("./conn/conn");
app.use(express.json());
app.use(cors({
    origin:["https://lookscout-9krn.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use("/api/v1", contact);
app.listen("1000", () => {
    console.log("Server started at port 1000");
});