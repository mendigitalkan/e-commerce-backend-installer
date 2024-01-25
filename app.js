"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var v1_1 = require("./apps/routes/v1");
var configs_1 = require("./apps/configs");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use((0, cookie_parser_1.default)());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization, Content-Type');
    next();
});
app.use('/public', express_1.default.static('public'));
// eslint-disable-next-line @typescript-eslint/no-misused-promises
// app.use(middleware.ipBlackList)
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
app.routes = (0, v1_1.appRouterV1)(app);
app.listen(configs_1.CONFIG.port, function () {
    console.log("listening on ".concat(configs_1.CONFIG.appUrl, ":").concat(configs_1.CONFIG.port, "/api/v1"));
});