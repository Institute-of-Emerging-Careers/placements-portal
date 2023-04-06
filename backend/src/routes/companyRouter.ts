import express from "express";
import ash from "express-async-handler";
import { createCompany } from "../interfaces/company";
import { MyError } from "../interfaces/error";
import { Company } from "../mongodb/models/models";

const companyRouter = express.Router();

companyRouter.post(
	"/create",
	ash(async (req, res) => {
		const details: createCompany = req.body;

		if (
			!details.name
		) {
			throw new MyError("Company name is a mandatory field 😥", 400);
		}

		const company = await Company.create(details);

		if (!company) {
			throw new MyError("Company could not be created 😥", 400);
		}

		res
			.status(200)
			.json({ success: true, message: "Company created successfully 😄" });
	})
);

export default companyRouter;
