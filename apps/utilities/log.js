"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSOLE = void 0;
var configs_1 = require("../configs");
exports.CONSOLE = {
    log: function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        configs_1.CONFIG.log && console.log.apply(console, __spreadArray([message], optionalParams, false));
    },
    info: function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        configs_1.CONFIG.log && console.info.apply(console, __spreadArray([message], optionalParams, false));
    },
    warn: function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        configs_1.CONFIG.log && console.warn.apply(console, __spreadArray([message], optionalParams, false));
    },
    error: function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        configs_1.CONFIG.log && console.error.apply(console, __spreadArray([message], optionalParams, false));
    },
    table: function (tabularData, properties) {
        configs_1.CONFIG.log && console.table(tabularData, properties);
    }
};
