"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.orderController = {
    create: create_1.createOrder,
    findAll: find_1.findAllOrder,
    findOne: find_1.findDetailOrder,
    remove: remove_1.removeOrder,
    update: update_1.updateOrder
};
