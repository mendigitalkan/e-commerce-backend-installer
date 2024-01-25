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
exports.NotificationModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
exports.NotificationModel = _1.sequelize.define('notifications', __assign(__assign({}, zygote_1.ZygoteModel), { notificationId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, notificationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, notificationMessage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'notifications', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
