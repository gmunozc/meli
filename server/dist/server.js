"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const compression = require("compression");
const favicon = require("serve-favicon");
const path = require("path");
const morgan = require("morgan");
const app_1 = require("./routers/app");
const app = express();
app.use(compression());
const viewDirectory = path.join(__dirname, '../views');
app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', viewDirectory);
const staticDirectory = path.join(__dirname, '../public');
app.use('/static', express.static(staticDirectory, {
    maxAge: '30 days'
}));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
morgan.token('remote-addr', (req) => {
    return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
});
app.use(morgan('[:date[clf]] [INFO]: :remote-addr :method :url :status :response-time ms - :res[content-length]'));
app.use('', app_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found',
        status: 404
    });
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
    console.log(`Press CTRL-C to stop`);
});
//# sourceMappingURL=server.js.map