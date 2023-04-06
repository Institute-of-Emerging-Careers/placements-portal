import { ObjectId } from "mongoose";

export interface createStudent {
    name: string;
    gender: string;
    province: string;
    city: string;
    email: string;
    course: string;
    phone: string;
    status: string;
    notes: string;
    cohort: ObjectId;
}