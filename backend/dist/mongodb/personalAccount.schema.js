import { Schema } from "mongoose";
export const PersonalAccountSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    payments: [
        { type: Schema.Types.ObjectId, ref: "Payment", required: false },
    ],
    amount: { type: Number, required: true },
    active: { type: Boolean, required: true, default: true },
    closed: { type: Boolean, required: true, default: false },
}, { timestamps: true });
