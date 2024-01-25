"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudExampleRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const crudExample_1 = require("../../controllers/crudExample");
const crudExampleRoutes = (app) => {
    const route = express_1.default.Router();
    app.use('/api/v1/crud-example', route);
    route.get('/list', async (req, res) => await crudExample_1.crudExampleController.findAll(req, res));
    route.get('/detail/:crudExampleId', async (req, res) => await crudExample_1.crudExampleController.findOne(req, res));
    route.post('/', async (req, res) => await crudExample_1.crudExampleController.create(req, res));
    route.patch('/', async (req, res) => await crudExample_1.crudExampleController.update(req, res));
    route.delete('/', async (req, res) => await crudExample_1.crudExampleController.remove(req, res));
};
exports.crudExampleRoutes = crudExampleRoutes;
