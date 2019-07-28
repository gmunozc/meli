"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const items_1 = require("../items");
const app_1 = require("../../controllers/app");
const appRouter = express.Router();
appRouter.get('/', app_1.default.index);
appRouter.use('', items_1.default);
exports.default = appRouter;
//# sourceMappingURL=index.js.map