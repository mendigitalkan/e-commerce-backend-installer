"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
var products_1 = require("./products");
exports.CartsModel = _1.sequelize.define('carts', __assign(__assign({}, zygote_1.ZygoteModel), { cartId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, cartUserId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, cartProductId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, cartProductColorSelected: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }, cartProductSizeSelected: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }, cartTotalItem: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'carts', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
exports.CartsModel.hasOne(products_1.ProductModel, {
    sourceKey: 'cartProductId',
    foreignKey: 'productId'
});
