import { Request, Response, NextFunction } from "express";
import { MyError } from "../interfaces/error";
import { verify } from "jsonwebtoken";
import ash from "express-async-handler";

const protect = ash(async (req: Request, res: Response, next: NextFunction) => {
	const token = req?.headers?.authorization?.split(" ")[1];

	if (!token) {
		throw new MyError("Unauthorized ❌, please log in to continue", 401);
	}

	const decoded = verify(token, process.env.JWT_SECRET!);

	if (!decoded) {
		throw new MyError("Unauthorized ❌, please log in to continue", 401);
	}

	req.body.user = decoded;

	next();
});

export default protect;
