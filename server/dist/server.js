"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const compression = require("compression");
const path = require("path");
const items_1 = require("./routers/items");
const app_1 = require("./routers/app");
const app = express();
app.use(compression());
const viewDirectory = path.join(__dirname, '../views');
app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', viewDirectory);
const staticDirectory = path.join(__dirname, '../public');
app.use('/static', express.static(staticDirectory, { maxAge: '30 days' }));
app.use('', app_1.default);
app.use('/items', items_1.default);
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
    console.log(`Press CTRL-C to stop`);
});
//# sourceMappingURL=server.js.map