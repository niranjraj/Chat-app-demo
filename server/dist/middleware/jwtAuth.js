"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const ObjectId = mongoose_1.default.Schema.Types.ObjectId;
const { TokenExpiredError } = jsonwebtoken_1.default;
const JWT_SECRET = process.env.JWT_SECRET;
const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res
            .status(401)
            .send({ message: "Unauthorized! Access Token was expired!" });
    }
    return res.sendStatus(401).send({ message: "Unauthorized!" });
};
function generateJwtToken(id) {
    if (JWT_SECRET) {
        return jsonwebtoken_1.default.sign({ id }, JWT_SECRET, {
            expiresIn: "30s",
        });
    }
}
exports.generateJwtToken = generateJwtToken;
function authenticateToken(req, res, next) {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).send({ message: "No token provided!" });
    }
    const arrayAuth = authHeader.split(" ");
    if (arrayAuth.length != 2 || arrayAuth[0] != "Bearer")
        return res.status(401).json({ error: "The provided token is invalid" });
    const token = arrayAuth[1];
    if (token && JWT_SECRET) {
        jsonwebtoken_1.default.verify(String(token), JWT_SECRET, (err, decoded) => {
            if (err) {
                return catchError(err, res);
            }
            if (decoded) {
                req.userId = decoded.id;
            }
            next();
        });
    }
}
