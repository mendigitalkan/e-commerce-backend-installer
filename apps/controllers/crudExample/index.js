"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudExampleController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.crudExampleController = {
    create: create_1.createCrudExample,
    findAll: find_1.findAllCrudExample,
    findOne: find_1.findOneCrudExample,
    remove: remove_1.removeCrudExample,
    update: update_1.updateCrudExample
};
