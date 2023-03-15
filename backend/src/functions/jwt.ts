import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ash from "express-async-handler";
import { MyError } from "../interfaces/error";
import { tokenPayload } from "../interfaces/auth";

export const generateToken = (payload: any) => {
	return jwt.sign(payload, process.env.JWT_SECRET as string, {
		expiresIn: "1d",
	});
};

export const checkAuthenticated = ash(
	async (req: Request, _, next: NextFunction) => {
		const token = req.cookies.access_token;

		if (!token) {
			throw new MyError("Unauthorized", 401);
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

		const { role } = decoded as tokenPayload;

		if (!decoded || role !== "admin") {
			throw new MyError("Unauthorized", 401);
		} else {
			req.body.user = decoded;
			next();
		}
	}
);
