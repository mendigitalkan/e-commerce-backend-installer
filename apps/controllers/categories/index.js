"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.categoriesController = {
    create: create_1.createCategory,
    findAll: find_1.findAllCategory,
    findOne: find_1.findDetailCategory,
    remove: remove_1.removeCategory,
    update: update_1.updateCategory
};
