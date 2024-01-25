"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCrudExample = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const products_1 = require("../../models/products");
const updateCrudExample = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['crudExampleId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await products_1.CrudExampleModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                crudExampleId: { [sequelize_1.Op.eq]: requestBody.crudExampleId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.crudExampleName.length > 0 && {
                crudExampleName: requestBody.crudExampleName
            })
        };
        await products_1.CrudExampleModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                crudExampleId: { [sequelize_1.Op.eq]: requestBody.crudExampleId }
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
exports.updateCrudExample = updateCrudExample;
