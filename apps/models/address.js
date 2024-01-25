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
exports.AddressesModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
exports.AddressesModel = _1.sequelize.define('addresses', __assign(__assign({}, zygote_1.ZygoteModel), { addressId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, addressUserId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressDetail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressPostalCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressProvinsi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressKabupaten: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, addressKecamatan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'addresses', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
