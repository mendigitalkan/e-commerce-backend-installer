"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.orderController = {
    create: create_1.createOrder,
    findAll: find_1.findAllOrder,
    findOne: find_1.findDetailOrder,
    remove: remove_1.removeOrder,
    update: update_1.updateOrder
};
