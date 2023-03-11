import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3020, () => {
  console.log("Listening on port 3020");
});
