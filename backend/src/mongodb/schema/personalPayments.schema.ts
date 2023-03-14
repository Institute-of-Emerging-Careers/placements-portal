import { Schema } from "mongoose";

export const PersonalPaymentsSchema = new Schema(
	{
		student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
		personalAccount: {
			type: Schema.Types.ObjectId,
			ref: "PersonalAccount",
			required: true,
		},
		company: { type: Schema.Types.ObjectId, ref: "Company", required: true },

		amount: { type: Number, required: true },
		nature: {
			type: String,
			required: true,
			enum: ["Salary", "Bonus", "Other"],
		},
		approved: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true }
);
