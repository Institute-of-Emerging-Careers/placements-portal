import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World");
});

app.listen(3020, () => {
	console.log("Listening on port 3020");
});
