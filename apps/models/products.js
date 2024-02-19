"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const categories_1 = require("./categories");
exports.ProductModel = _1.sequelize.define('products', {
    ...zygote_1.ZygoteModel,
    productId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    productImages: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    productDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    productCategoryId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    productTotalSale: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    productStock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    productCondition: {
        type: sequelize_1.DataTypes.ENUM('Baru', 'Bekas'),
        allowNull: false,
        defaultValue: 'Baru'
    },
    productWeight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    productDiscount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    productColors: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    productSizes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'products',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
exports.ProductModel.hasOne(categories_1.CategoriesModel, {
    sourceKey: 'productCategoryId',
    foreignKey: 'categoryId'
});
