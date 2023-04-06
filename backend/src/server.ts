import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./functions/errorHandler";
import authRouter from "./routes/authRouter";
import cohortRouter from "./routes/cohortRouter";
import companyRouter from "./routes/companyRouter";
import studentRouter from "./routes/studentRouter";
import { connect } from "./mongodb/database";
import protect from "./functions/protect";

dotenv.config();

const app = express();

connect(); //connect to the database

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/student", protect, studentRouter);
app.use("/api/cohort", protect, cohortRouter);
app.use("/api/company", protect, companyRouter);

app.use(errorHandler);

app.listen(3020, () => {
	console.log("Listening on port 3020");
});
