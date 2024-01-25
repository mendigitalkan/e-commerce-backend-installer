"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
var find_1 = require("./find");
var login_1 = require("./login");
var register_1 = require("./register");
var remove_1 = require("./remove");
var update_1 = require("./update");
exports.UsersController = {
    login: login_1.userLogin,
    register: register_1.userRegister,
    findAll: find_1.findAllUser,
    findAdmins: find_1.findAllAdmin,
    findDetailUser: find_1.findDetailUser,
    findDetailAdmin: find_1.findDetailAdmin,
    update: update_1.updateUser,
    remove: remove_1.removeUser
};
