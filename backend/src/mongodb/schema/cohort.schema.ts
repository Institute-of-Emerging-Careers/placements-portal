import { Schema } from "mongoose";

export const CohortSchema = new Schema(
	{
		cohortNumber: { type: String, required: true, unique: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		coursesOffered: { type: [String], required: true },
	},
	{ timestamps: true }
);
