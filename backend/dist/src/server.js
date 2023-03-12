import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3020, () => {
    console.log("Listening on port 3020");
});
