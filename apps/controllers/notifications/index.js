"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationController = void 0;
var create_1 = require("./create");
var find_1 = require("./find");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.notificationController = {
    create: create_1.createNotification,
    findAll: find_1.findAllNotification,
    findOne: find_1.findDetailNotification,
    remove: remove_1.removeNofication,
    update: update_1.updateNotification
};
