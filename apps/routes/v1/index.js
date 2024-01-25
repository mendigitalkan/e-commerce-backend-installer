"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
var controllers_1 = require("../../controllers");
var user_router_1 = require("./user-router");
var upload_file_route_1 = require("./upload-file-route");
var myProfileRouter_1 = require("./myProfileRouter");
var productRouter_1 = require("./productRouter");
var orderRouter_1 = require("./orderRouter");
var categoryRouter_1 = require("./categoryRouter");
var addressRouter_1 = require("./addressRouter");
var transactionRoutes_1 = require("./transactionRoutes");
var statisticRouter_1 = require("./statisticRouter");
var cartRouter_1 = require("./cartRouter");
var settingRouter_1 = require("./settingRouter");
var appRouterV1 = function (app) {
    app.get('/api/v1', function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, controllers_1.index)(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); });
    (0, upload_file_route_1.uploadFileRoutes)(app);
    (0, myProfileRouter_1.myProfileRouter)(app);
    (0, user_router_1.userRoutes)(app);
    (0, productRouter_1.productRoutes)(app);
    (0, orderRouter_1.orderRoutes)(app);
    (0, categoryRouter_1.categoryRoutes)(app);
    (0, addressRouter_1.addressRoutes)(app);
    (0, transactionRoutes_1.transactionRoutes)(app);
    (0, statisticRouter_1.statisticRouters)(app);
    (0, cartRouter_1.cartRoutes)(app);
    (0, settingRouter_1.settingRouters)(app);
};
exports.appRouterV1 = appRouterV1;
