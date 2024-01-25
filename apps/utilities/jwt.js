"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.generateAccessToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var configs_1 = require("../configs");
var generateAccessToken = function (userId) {
    var _a;
    return jsonwebtoken_1.default.sign(userId, (_a = configs_1.CONFIG.secret.token) !== null && _a !== void 0 ? _a : '', { expiresIn: '2592000s' });
};
exports.generateAccessToken = generateAccessToken;
var verifyAccessToken = function (token) {
    var _a;
    try {
        return jsonwebtoken_1.default.verify(token, (_a = configs_1.CONFIG.secret.token) !== null && _a !== void 0 ? _a : '');
    }
    catch (_b) {
        return false;
    }
};
exports.verifyAccessToken = verifyAccessToken;
