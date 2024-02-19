"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotification = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const notifications_1 = require("../../models/notifications");
const updateNotification = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['notificationId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await notifications_1.NotificationModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                notificationId: { [sequelize_1.Op.eq]: requestBody.notificationId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.notificationName.length > 0 && {
                notificationName: requestBody.notificationName
            }),
            ...(requestBody.notificationMessage.length > 0 && {
                notificationMessage: requestBody.notificationMessage
            })
        };
        await notifications_1.NotificationModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                notificationId: { [sequelize_1.Op.eq]: requestBody.notificationId }
            }
        });
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.updateNotification = updateNotification;
