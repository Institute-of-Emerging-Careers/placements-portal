import { Schema } from "mongoose";
export const LecPaymentsSchema = new Schema({
    lecAccount: {
        type: Schema.Types.ObjectId,
        ref: "LecAccount",
        required: true,
    },
    invoicedAmount: { type: Number, required: true },
    invoicedDate: { type: Date, required: true },
    paidAmount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    paymentStatus: { type: String, required: true, enum: ["Paid", "Unpaid"] },
}, { timestamps: true });
