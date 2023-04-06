import express, { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import ash from "express-async-handler";
import { login } from "../interfaces/auth";
import { MyError } from "../interfaces/error";
import { Admin } from "../mongodb/models/models";
import { generateToken } from "../functions/jwt";

dotenv.config();

const authRouter: Router = express.Router();

authRouter.get(
	"/",
	ash(async (req, res) => {
		res.send("Hello Auth");
	})
);

authRouter.post(
	"/login",
	ash(async (req: Request, res: Response) => {
		const creds: login = req.body;

		const admin = await Admin.findOne({ email: creds.email });

		if (admin) {
			const valid = await bcrypt.compare(creds.password, admin.password);

			if (valid) {
				const tokenPayload = {
					id: admin._id,
					email: admin.email,
					name: admin.name,
				};

				const token = await generateToken(tokenPayload);

				res.status(200).json({
					token,
					message: "Logged in successfully ✅",
					success: true,
				});
				
			} else {
				throw new MyError("Incorrect username or password 🚨", 401);
			}
		} else {
			throw new MyError("Invalid Credentials ❌", 401);
		}

		res.sendStatus(200);
	})
);

export default authRouter;
