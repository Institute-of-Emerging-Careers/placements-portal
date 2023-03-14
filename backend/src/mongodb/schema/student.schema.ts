import { Schema } from "mongoose";

export const StudentSchema = new Schema(
	{
        cohort : { type: Schema.Types.ObjectId, ref: "Cohort", required: true },
        lecAccount: { type: Schema.Types.ObjectId, ref: "LecAccount", required: false },
        placements: [{ type: Schema.Types.ObjectId, ref: "Placement", required: false }],
        personalAccount: { type: Schema.Types.ObjectId, ref: "PersonalAccount", required: false },

		name: { type: String, required: true },
		gender: { type: String, required: true },
		province: { type: String, required: true },
		city: { type: String, required: true },
		email: { type: String, required: true },
		course: { type: String, required: true },
		phone: { type: String, required: false },
		status: {
			type: String,
			required: true,
			enum: [
				"L1: Placed(+50k)",
				"L2: Placed (<50k)",
				"L3: Placed(Unpaid)",
				"L4: Unemployed",
				"L5: Don't want to work",
			],
		},
		notes: { type: String, required: false },
	},
	{ timestamps: true }
);
