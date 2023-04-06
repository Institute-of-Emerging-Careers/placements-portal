import { Schema } from "mongoose";

export const PlacementsSchema = new Schema(
	{
		student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
		company: { type: Schema.Types.ObjectId, ref: "Company", required: true },

		salary: { type: Number, required: true },
		jobTitle: { type: String, required: true },
		jobNature: {
			type: String,
			required: true,
			enum: ["Remote", "Hybrid", "In-Office"],
		},
		contract: {
			type: String,
			required: true,
			enum: ["Full-Time", "Part-Time", "Internship"],
		},
		dateOfJoining: { type: Date, required: true },
		dateOfLeaving: { type: Date, required: false },
		// date of joining is the default salary date
		salaryDate: { type: Date, required: false },
		notes: { type: String, required: false },
	},
	{ timestamps: true }
);
