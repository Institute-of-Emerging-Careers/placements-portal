import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		console.log("Database is connected");
	} catch (error) {
		console.log(error);
	}
})();