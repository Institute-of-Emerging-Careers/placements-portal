import express from "express";
import ash from "express-async-handler";
import { createCohort } from "../interfaces/cohort";
import { Cohort } from "../mongodb/models/models";

const cohortRouter = express.Router();

cohortRouter.post(
	"/create",
	ash(async (req, res) => {

		const { cohortNumber, startDate, endDate }: createCohort = req.body;
		console.log(cohortNumber, startDate, endDate);
		
		if (!cohortNumber || !startDate || !endDate) {
			throw new Error("Please provide all the required fields 🚨");
		}
		
		const cohort = await Cohort.create({
			cohortNumber,
			startDate,
			endDate,
		});

		if (!cohort) {
			throw new Error("Something went wrong 🚨");
		}

		res.status(200).json({
			status: true,
			message: "Successfully created cohort ✔️",
		});
	})
);

export default cohortRouter;
