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
exports.OrdersModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
exports.OrdersModel = _1.sequelize.define('orders', __assign(__assign({}, zygote_1.ZygoteModel), { orderId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, orderUserId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, orderProductId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, orderProductName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, orderProductPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }, orderProductImages: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, orderProductDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, orderStatus: {
        type: sequelize_1.DataTypes.ENUM('waiting', 'process', 'delivery', 'done', 'cancel'),
        allowNull: false,
        defaultValue: 'waiting'
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'orders', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
