import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ash from "express-async-handler";
import { MyError } from "../interfaces/error";


export const generateToken = async (payload: any) => {
	return jwt.sign(payload, process.env.JWT_SECRET as string, {
		expiresIn: "1d",
	});
};
