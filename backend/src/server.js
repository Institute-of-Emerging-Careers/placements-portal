import express from "express";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// mariadb connection
var sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    dialect: "mariadb",
    host: process.env.MYSQL_HOST,
  }
);

// attempt database connection
try {
  await sequelize.authenticate();
  console.log("\n\nConnection has been established successfully.\n\n");
} catch (error) {
  console.error("\n\nUnable to connect to the database:", error);
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3020, () => {
  console.log("Listening on port 3020");
});
