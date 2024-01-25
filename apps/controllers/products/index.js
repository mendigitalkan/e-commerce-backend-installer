"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.ProductController = {
    create: create_1.createProduct,
    findAll: find_1.findAllProducts,
    findOne: find_1.findDetailProduct,
    remove: remove_1.removeProduct,
    update: update_1.updateProduct
};
