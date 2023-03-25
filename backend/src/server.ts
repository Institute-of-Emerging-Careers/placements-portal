import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./functions/errorHandler";
import authRouter from "./routes/authRouter";
import cohortRouter from "./routes/cohortRouter";
import { connect } from "./mongodb/database";

dotenv.config();

const app: Express = express();

connect(); //connect to the database

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRouter);
app.use("/api/cohort", cohortRouter);

app.use(errorHandler);

app.listen(3020, () => {
	console.log("Listening on port 3020");
});
