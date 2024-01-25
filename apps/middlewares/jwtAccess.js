"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useJwtAccess = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utilities/response");
const jwt_1 = require("../utilities/jwt");
const useJwtAccess = (req, res, next) => {
    try {
        const token = req.header('x-token');
        if (token == null) {
            const message = 'Invalid Authorization.';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(response);
        }
        try {
            const decoded = (0, jwt_1.verifyAccessToken)(token);
            req.user = decoded;
        }
        catch (error) {
            const message = 'Invalid Authorization.';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(response);
        }
        next();
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.useJwtAccess = useJwtAccess;
