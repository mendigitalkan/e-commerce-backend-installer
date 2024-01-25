"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestChecker = void 0;
var requestChecker = function (_a) {
    var requireList = _a.requireList, requestData = _a.requestData;
    var emptyField = [];
    // eslint-disable-next-line array-callback-return
    requireList.map(function (value) {
        if (requestData[value] === undefined) {
            emptyField.push(value);
        }
    });
    return emptyField.toString();
};
exports.requestChecker = requestChecker;
