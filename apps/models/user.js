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
exports.UserModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
exports.UserModel = _1.sequelize.define('users', __assign(__assign({}, zygote_1.ZygoteModel), { userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, userPassword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, userEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, userPhoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, userPhoto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }, userRole: {
        type: sequelize_1.DataTypes.ENUM('user', 'admin', 'superAdmin'),
        allowNull: false,
        defaultValue: 'user'
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'users', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
