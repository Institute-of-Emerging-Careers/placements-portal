import express from "express";
import ash from "express-async-handler";
import { LecAccount, PersonalAccount, Student } from "../mongodb/models/models";
import { MyError } from "../interfaces/error";

const studentRouter = express.Router();

studentRouter.post(
	"/create",
	ash(async (req, res) => {
		const details = req.body;
		if (
			!details.name ||
			!details.gender ||
			!details.province ||
			!details.city ||
			!details.email ||
			!details.course ||
			!details.phone ||
			!details.cohort
		) {
			throw new MyError("Some fields may be missing 😥", 400);
		}
		try {

			const student = await Student.create({
				cohort: details.cohort,
				name: details.name,
				gender: details.gender,
				province: details.province,
				city: details.city,
				email: details.email,
				course: details.course,
				phone: details.phone,
				status: details.status,
				notes: details.notes,
			});
			
			//also create an LEC account and a personal account for each student
			const lec = await LecAccount.create({
				student: student._id,
				pledgedAmount: 0,
				paidAmount: 0,
				accountActive: true,
			});

			const personal = await PersonalAccount.create({
				student: student._id,
				amount: 0,
				active: true,
			});

			const updatedStudent = await Student.findByIdAndUpdate(
				student._id,
				{
					lecAccount: lec._id,
					personalAccount: personal._id,
				},
				{ new: true }
			);

			if (!student || !lec || !personal) {
				throw new MyError("Student could not be created 😥", 400);
			}

			res
				.status(200)
				.json({ success: true, message: "Student created successfully 😄" });
		} catch (error: any) {
			if (error?.code === 11000) {
				throw new MyError("Student already exists 🚨", 400);
			} else {
				console.log(error);
				
				throw new MyError("Something went wrong 🚨", 400);
			}
		}
	})
);

studentRouter.get("/all", ash(async (req, res) => {
	const students = await Student.find({}).populate("cohort").populate("lecAccount").populate("personalAccount");

	if (!students) {
		throw new MyError("Students could not be fetched 😥", 400);
	}


	res.status(200).json({ success: true, students });
}));

export default studentRouter;
