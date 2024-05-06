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


  app.use("/api/v1", (req, res, next) => {
    const allowedOrigins = ['https://lookscout-9krn.vercel.app/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.listen("1000", () => {
    console.log("Server started at port 1000");
});