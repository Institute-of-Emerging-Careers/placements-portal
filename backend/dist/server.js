"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorHandler_1 = require("./functions/errorHandler");
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const cohortRouter_1 = __importDefault(require("./routes/cohortRouter"));
const companyRouter_1 = __importDefault(require("./routes/companyRouter"));
const studentRouter_1 = __importDefault(require("./routes/studentRouter"));
const database_1 = require("./mongodb/database");
const protect_1 = __importDefault(require("./functions/protect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.connect)(); //connect to the database
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/auth", authRouter_1.default);
app.use("/api/student", protect_1.default, studentRouter_1.default);
app.use("/api/cohort", protect_1.default, cohortRouter_1.default);
app.use("/api/company", protect_1.default, companyRouter_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(3020, () => {
    console.log("Listening on port 3020");
});
