"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthorization = void 0;
var http_status_codes_1 = require("http-status-codes");
var response_1 = require("../utilities/response");
var jwt_1 = require("../utilities/jwt");
var useAuthorization = function (req, res, next) {
    try {
        if (req.headers.authorization == null ||
            !req.headers.authorization.startsWith('Bearer ')) {
            var message = 'Missing Authorization.';
            var response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
        }
        var token = req.headers.authorization.split(' ')[1];
        var verify = (0, jwt_1.verifyAccessToken)(token);
        if (!verify) {
            var message = 'Invalid Authorization.';
            var response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(response);
        }
        req.body.user = verify;
        next();
    }
    catch (error) {
        var message = "unable to process request! error ".concat(error.message);
        var response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.useAuthorization = useAuthorization;
