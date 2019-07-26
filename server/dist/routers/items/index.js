"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const items_1 = require("../../controllers/items");
const itemsRouter = express.Router();
itemsRouter.get('/', items_1.default.index);
exports.default = itemsRouter;
//# sourceMappingURL=index.js.map