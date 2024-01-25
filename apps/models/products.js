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
exports.ProductModel = void 0;
/* eslint-disable @typescript-eslint/indent */
var sequelize_1 = require("sequelize");
var _1 = require(".");
var zygote_1 = require("./zygote");
var categories_1 = require("./categories");
exports.ProductModel = _1.sequelize.define('products', __assign(__assign({}, zygote_1.ZygoteModel), { productId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    }, productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, productImages: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, productDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, productPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }, productCategoryId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }, productTotalSale: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }, productStock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }, productCondition: {
        type: sequelize_1.DataTypes.ENUM('Baru', 'Bekas'),
        allowNull: false,
        defaultValue: 'Baru'
    }, productWeight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }, productDiscount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }, productColors: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }, productSizes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    } }), __assign(__assign({}, _1.sequelize), { timestamps: false, tableName: 'products', deletedAt: false, paranoid: true, underscored: true, freezeTableName: true, engine: 'InnoDB' }));
exports.ProductModel.hasOne(categories_1.CategoriesModel, {
    sourceKey: 'productCategoryId',
    foreignKey: 'categoryId'
});
