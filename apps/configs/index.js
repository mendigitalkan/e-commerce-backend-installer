"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    appVersion: process.env.APP_VERSION,
    appSemantic: process.env.APP_SEMANTIC,
    appMode: (_a = process.env.APP_MODE) !== null && _a !== void 0 ? _a : 'development',
    appUrl: 'ecommerceapi.jasaapk.us',
    env: process.env.APP_ENV,
    port: 8000,
    log: 'true',
    ipBlackList: [],
    secret: {
        keyEncryption: 'qwerty',
        passwordEncryption: 'qwerty',
        pinEncryption: 'qwerty',
        token: 'qwerty'
    },
    maximumUploadFile: 1024,
    dataBase: {
        development: {
            username: 'jasaapku_e-commerce',
            password: 'e-commerce100%',
            database: 'jasaapku_e-commerce',
            host: '119.235.248.134',
            dialect: 'mysql',
            logging: process.env.DB_LOG === 'true'
        },
        testing: {
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: process.env.DB_LOG === 'true'
        },
        production: {
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: process.env.DB_LOG === 'true'
        }
    }
};
// export const CONFIG = {
//   appVersion: process.env.APP_VERSION,
//   appSemantic: process.env.APP_SEMANTIC,
//   appMode: process.env.APP_MODE ?? 'development',
//   appUrl: process.env.APP_URL,
//   env: process.env.APP_ENV,
//   port: process.env.APP_PORT ?? 8000,
//   log: process.env.APP_LOG === 'true',
//   ipBlackList: JSON.parse(process.env.IP_BLACK_LIST ?? '[]'),
//   secret: {
//     keyEncryption: process.env.SECRET_KEY_ENCRYPTION,
//     passwordEncryption: process.env.SECRET_PASSWORD_ENCRYPTION,
//     pinEncryption: process.env.SECRET_PIN_ENCRYPTION,
//     token: process.env.TOKEN_SECRET
//   },
//   maximumUploadFile: process.env.MAXIMUM_UPLOAD_FILE ?? 1024,
//   dataBase: {
//     development: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     },
//     testing: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     },
//     production: {
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       dialect: process.env.DB_DIALECT,
//       logging: process.env.DB_LOG === 'true'
//     }
//   }
// }
