"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app_1 = require("../../controllers/app");
const appRouter = express.Router();
appRouter.get('/', app_1.default.index);
exports.default = appRouter;
//# sourceMappingURL=index.js.map