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
exports.TransactionsModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
var orders_1 = require("./orders");
var user_1 = require("./user");
exports.TransactionsModel = _1.sequelize.define('transactions', __assign(__assign({}, zygote_1.ZygoteModel), { transactionId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, transactionPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }, transactionOrderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, transactionUserId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, transactionOngkirPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'transactions', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
exports.TransactionsModel.hasOne(orders_1.OrdersModel, {
    sourceKey: 'transactionOrderId',
    foreignKey: 'orderId'
});
exports.TransactionsModel.hasOne(user_1.UserModel, {
    sourceKey: 'transactionUserId',
    foreignKey: 'userId'
});
