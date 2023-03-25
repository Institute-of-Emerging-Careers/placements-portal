import { Schema } from "mongoose";

export const CohortSchema = new Schema(
	{
		cohortNumber: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },

		students: [
			{ type: Schema.Types.ObjectId, ref: "Student", required: false },
		],
	},
	{ timestamps: true }
);
