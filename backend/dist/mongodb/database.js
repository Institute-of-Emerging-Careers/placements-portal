"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("./models/models");
dotenv_1.default.config();
const seed = false;
const connect = async () => {
    try {
        await mongoose_1.default.connect(process.env.NODE_ENV === "production"
            ? process.env.MONGO_URI_PROD
            : process.env.MONGO_URI_DEV);
        console.log("Database is connected");
    }
    catch (error) {
        console.log("Database connection failed");
        console.log("Error");
    }
};
exports.connect = connect;
if (seed) {
    createAdmins();
}
async function createAdmins() {
    models_1.Admin.create({
        name: "Ommer",
        email: "ommer.amer@gmail.com",
        password: bcrypt_1.default.hashSync("adminpwd1", parseInt(process.env.SALT_ROUNDS) || 3),
    });
    models_1.Admin.create({
        name: "Wahab",
        email: "abdul6wahab6@gmail.com",
        password: bcrypt_1.default.hashSync("adminpwd2", parseInt(process.env.SALT_ROUNDS) || 3),
    });
    console.log("seeding done");
}
