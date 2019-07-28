"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const items_1 = require("../../controllers/items");
const itemsRouter = express.Router();
itemsRouter.get('/items', items_1.default.index);
itemsRouter.get('/api/items', items_1.default.search);
itemsRouter.get('/api/items/:id', items_1.default.detail);
exports.default = itemsRouter;
//# sourceMappingURL=index.js.map