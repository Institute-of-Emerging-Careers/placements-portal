import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

(async () => {
	try {
		await mongoose.connect(
			process.env.NODE_ENV === "production"
				? (process.env.MONGO_URI_PROD as string)
				: (process.env.MONGO_URI_DEV as string)
		);
		console.log("Database is connected");
	} catch (error) {
		console.log(error);
	}
})();
