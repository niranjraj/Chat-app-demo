"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const jwtAuth_1 = require("../middleware/jwtAuth");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, email, password, confirmPassword } = req.body;
                console.log(userName);
                if (!userName || !email || !password || !confirmPassword) {
                    return res.status(400).json({
                        error: true,
                        errorMessage: "Invalid field values",
                    });
                }
                const userExist = yield user_model_1.default.findOne({ email });
                if (userExist) {
                    return res.status(400).json({
                        error: true,
                        errorMessage: "User already Exists",
                    });
                }
                const user = yield user_model_1.default.create({ userName, email, password });
                if (user) {
                    return res.status(201).json({
                        _id: user._id,
                        userName: user.userName,
                        email: user.email,
                    });
                }
                else {
                    res.status(400);
                    throw new Error("Error:User not created");
                }
            }
            catch (e) {
                return res.json({
                    e,
                });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.json({ error: true, errorMessage: "Field value is empty" });
                }
                const user = yield user_model_1.default.findOne({ email });
                if (user && (yield user.passwordCheck(password))) {
                    res.json({
                        user: {
                            userName: user.userName,
                            email: user.email,
                            pic: user.profileURL,
                        },
                        accessToken: (0, jwtAuth_1.generateJwtToken)(user._id),
                    });
                }
                else {
                    res.status(401);
                    throw new Error("Invalid Email or Password");
                }
            }
            catch (err) {
                return res.json({
                    error: true,
                    errorMessage: err,
                });
            }
        });
    }
}
const userControl = new UserController();
exports.default = userControl;
