import express, { Router, Request, Response } from "express";
import dotenv from "dotenv";
import ash from "express-async-handler";
import { tokenPayload, login } from "../interfaces/auth";
import { MyError } from "../interfaces/error";
import { Admin } from "../mongodb/models/models";

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

        const admin = await Admin.findOne({
            where: {
                email: creds.email
            }
        })

        console.log(admin);
        

        res.sendStatus(200)

        
	})
);

export default authRouter;
