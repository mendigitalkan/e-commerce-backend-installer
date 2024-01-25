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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMyProfile = void 0;
var http_status_codes_1 = require("http-status-codes");
var response_1 = require("../../utilities/response");
var sequelize_1 = require("sequelize");
var user_1 = require("../../models/user");
var findMyProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, message, response_2, response, error_1, message, response;
    var _a, _b;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1.UserModel.findOne({
                        where: {
                            deleted: (_a = {}, _a[sequelize_1.Op.eq] = 0, _a),
                            userId: (_b = {}, _b[sequelize_1.Op.eq] = (_d = (_c = req.body) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId, _b)
                        },
                        attributes: [
                            'userId',
                            'userName',
                            'userEmail',
                            'userRole',
                            'userPhoneNumber',
                            'createdAt',
                            'updatedAt'
                        ]
                    })];
            case 1:
                admin = _e.sent();
                if (admin == null) {
                    message = 'user not found!';
                    response_2 = response_1.ResponseData.error(message);
                    return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_2)];
                }
                response = response_1.ResponseData.default;
                response.data = admin;
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.OK).json(response)];
            case 2:
                error_1 = _e.sent();
                console.log(error_1.message);
                message = "unable to process request! error ".concat(error_1.message);
                response = response_1.ResponseData.error(message);
                return [2 /*return*/, res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findMyProfile = findMyProfile;
