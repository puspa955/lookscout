const express = require("express");
const cors =require("cors");
const app = express();
const contact = require("./routes/contact");

require("./conn/conn");
app.use(express.json());
app.use(cors({
    origin:["https://lookscout-9krn.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use("/api/v1", contact);
const PORT = process.env.PORT || 1000; // Use the environment variable for the port or fallback to 1000
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});