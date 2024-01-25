"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.transactionController = {
    create: create_1.createTransaction,
    findAll: find_1.findAllTransaction,
    findOne: find_1.findDetailTransaction,
    remove: remove_1.removeTransaction,
    update: update_1.updateTransaction
};
