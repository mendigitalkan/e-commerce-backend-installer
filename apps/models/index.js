"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var sequelize_1 = require("sequelize");
var configs_1 = require("../configs");
dotenv_1.default.config();
var dataBaseConfig = configs_1.CONFIG.dataBase.development;
exports.sequelize = new sequelize_1.Sequelize(dataBaseConfig);
