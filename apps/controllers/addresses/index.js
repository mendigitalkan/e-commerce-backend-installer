"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.addressController = {
    create: create_1.createAddress,
    findAll: find_1.findAllAddress,
    findOne: find_1.findDetailAddress,
    remove: remove_1.removeAddress,
    update: update_1.updateAddress
};
