import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { MyError } from "../interfaces/error";
import { Admin } from "./models/models";

dotenv.config();

const seed = true;

(async () => {
	try {
		await mongoose.connect(
			process.env.NODE_ENV === "production"
				? (process.env.MONGO_URI_PROD as string)
				: (process.env.MONGO_URI_DEV as string)
		);
		console.log("Database is connected");
	} catch (error) {
		throw new MyError("Database connection failed", 500);
	}
})();

if (seed) {
	createAdmins();
}

async function createAdmins() {
	Admin.create({
		name: "Ommer",
		email: "ommer.amer@gmail.com",
		password: bcrypt.hashSync(
			"adminpwd1",
			parseInt(process.env.SALT_ROUNDS as string) || 3
		),
	});
	Admin.create({
		name: "Wahab",
		email: "ommer.amer@gmail.com",
		password: bcrypt.hashSync(
			"adminpwd10",
			parseInt(process.env.SALT_ROUNDS as string) || 3
		),
	});
}
