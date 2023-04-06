import express from "express";
import ash from "express-async-handler";
import { createCohort } from "../interfaces/cohort";
import { MyError } from "../interfaces/error";
import { Cohort, Student } from "../mongodb/models/models";

const cohortRouter = express.Router();

cohortRouter.post(
	"/create",
	ash(async (req, res) => {
		const { cohortNumber, startDate, endDate, coursesOffered }: createCohort =
			req.body;

		if (!cohortNumber || !startDate || !endDate || !coursesOffered) {
			throw new MyError("Please provide all the required fields 🚨", 400);
		}

		try {
			const cohort = await Cohort.create({
				cohortNumber,
				startDate,
				endDate,
				coursesOffered,
			});

			if (!cohort) {
				throw new MyError("Something went wrong 🚨", 400);
			}

			res.status(200).json({
				success: true,
				message: "Successfully created cohort ✔️",
			});
		} catch (error: any) {
			if (error?.code === 11000) {
				throw new MyError("Cohort already exists 🚨", 400);
			} else {
				throw new MyError("Something went wrong 🚨", 400);
			}
		}
	})
);

cohortRouter.get(
	"/",
	ash(async (req, res) => {
		const cohorts = await Cohort.find({});

		if (!cohorts) {
			throw new MyError("No cohorts made 😥", 404);
		}

		res.status(200).json({
			status: true,
			message: "Successfully fetched cohorts ✔️",
			cohorts,
		});
	})
);

cohortRouter.delete(
	"/:id",
	ash(async (req, res) => {
		const { id } = req.params;

		const numStudents = await Student.countDocuments({
			cohort: id,
		});

		if (numStudents > 0) {
			throw new MyError(
				"Cannot delete cohort as there are students in it 🚨",
				400
			);
		}
		const cohort = await Cohort.findByIdAndDelete(id);

		if (!cohort) {
			throw new MyError("Cohort not found 🚨", 404);
		}

		res.status(200).json({
			success: true,
			message: "Successfully deleted cohort ✔️",
		});

		throw new MyError("Something went wrong 🚨", 400);
	})
);

export default cohortRouter;
