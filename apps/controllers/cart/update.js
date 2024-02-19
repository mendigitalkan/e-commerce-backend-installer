"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCart = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const carts_1 = require("../../models/carts");
const updateCart = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['cartId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await carts_1.CartsModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                cartId: { [sequelize_1.Op.eq]: requestBody.cartId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.cartProductId.length > 0 && {
                cartProductId: requestBody.cartProductId
            }),
            ...(requestBody.cartProductColorSelected.length > 0 && {
                cartProductColorSelected: requestBody.cartProductColorSelected
            }),
            ...(requestBody.cartProductSizeSelected.length > 0 && {
                cartProductSizeSelected: requestBody.cartProductSizeSelected
            })
        };
        await carts_1.CartsModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                cartId: { [sequelize_1.Op.eq]: requestBody.cartId }
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
exports.updateCart = updateCart;
