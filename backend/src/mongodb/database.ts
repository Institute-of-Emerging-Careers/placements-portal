import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { Admin } from "./models/models";

dotenv.config();

const seed = false;

export const connect = async () => {
	try {
		await mongoose.connect(
			process.env.NODE_ENV === "production"
				? (process.env.MONGO_URI_PROD as string)
				: (process.env.MONGO_URI_DEV as string)
		);
		console.log("Database is connected");
	} catch (error) {
		console.log("Database connection failed");
		console.log("Error")
	}
};

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
		email: "abdul6wahab6@gmail.com",
		password: bcrypt.hashSync(
			"adminpwd2",
			parseInt(process.env.SALT_ROUNDS as string) || 3
		),
	});


	console.log("seeding done");
	
}
