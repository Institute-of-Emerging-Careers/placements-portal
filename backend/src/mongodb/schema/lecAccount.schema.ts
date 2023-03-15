import { Schema } from "mongoose";

export const LecAccountSchema = new Schema(
	{
		student: { type: Schema.Types.ObjectId, ref: "Student", required: true },

		payments: [
			{ type: Schema.Types.ObjectId, ref: "LecPayment", required: false },
		],

		pledgedAmount: { type: Number, required: true },
		paidAmount: { type: Number, required: true },
		accountClosed: { type: Boolean, required: true, default: false },
		accountActive: { type: Boolean, required: true, default: true },
	},
	{ timestamps: true }
);
