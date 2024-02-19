"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const orders_1 = require("../../models/orders");
const updateOrder = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['orderId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await orders_1.OrdersModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                orderId: { [sequelize_1.Op.eq]: requestBody.orderId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody?.orderId?.length > 0 && {
                orderId: requestBody?.orderId
            }),
            ...(requestBody?.orderProductId?.length > 0 && {
                orderProductId: requestBody?.orderProductId
            }),
            ...(requestBody?.orderProductName?.length > 0 && {
                orderProductName: requestBody?.orderProductName
            }),
            ...(requestBody?.orderProductPrice?.toString().length > 0 && {
                orderProductPrice: requestBody?.orderProductPrice
            }),
            ...(requestBody?.orderProductImages?.length > 0 && {
                orderProductImages: requestBody?.orderProductImages
            }),
            ...(requestBody?.orderProductDescription?.length > 0 && {
                orderProductDescription: requestBody?.orderProductDescription
            }),
            ...(requestBody?.orderStatus?.length > 0 && {
                orderStatus: requestBody?.orderStatus
            })
        };
        await orders_1.OrdersModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                orderId: { [sequelize_1.Op.eq]: requestBody.orderId }
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
exports.updateOrder = updateOrder;
