"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./middleware/auth");
const app = (0, express_1.default)();
const portNumber = 3000;
app.use((0, cors_1.default)());
app.use(auth_1.authenticator_middleWare);
app.use(express_1.default.json());
const admin_1 = require("./routes/admin");
const user_1 = require("./routes/user");
const utility_1 = require("./routes/utility");
app.use("/admin", admin_1.router);
app.use("/users", user_1.router);
app.use("/util", utility_1.router);
try {
    mongoose_1.default.connect('mongodb://localhost:27018/courses');
}
catch (error) {
    console.log(error.message);
}
app.listen(portNumber, () => console.log(`Server running on port ${portNumber}`));
