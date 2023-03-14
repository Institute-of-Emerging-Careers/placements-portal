import { Schema } from "mongoose";

export const CohortSchema = new Schema(
	{
		name: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
	},
	{ timestamps: true }
);
