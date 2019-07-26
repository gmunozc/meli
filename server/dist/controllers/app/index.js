"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    index(req, res) {
        res.redirect('/items/');
    }
}
exports.default = new AppController();
//# sourceMappingURL=index.js.map