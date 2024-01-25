"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.addressController = {
    create: create_1.createAddress,
    findAll: find_1.findAllAddress,
    findOne: find_1.findDetailAddress,
    remove: remove_1.removeAddress,
    update: update_1.updateAddress
};
