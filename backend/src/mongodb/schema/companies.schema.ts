import { Schema } from "mongoose";

export const CompaniesSchema = new Schema(
	{
		name: { type: String, required: true },
		city: { type: String, required: false },
		website: { type: String, required: false },
		phone: { type: String, required: false },
		linkedIn: { type: String, required: false },
		pocOne: { type: String, required: false },
		pocTwo: { type: String, required: false },
		status: { type: String, required: false },
		notes: { type: String, required: false },
	},
	{ timestamps: true }
);
