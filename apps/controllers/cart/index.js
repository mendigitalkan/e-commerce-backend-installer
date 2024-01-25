"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.cartController = {
    create: create_1.createCart,
    findAll: find_1.findAllCart,
    findOne: find_1.findDetailCart,
    remove: remove_1.removeCart,
    update: update_1.updateCart
};
