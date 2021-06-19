"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayReaderLab = exports.DisplayRascalFranky = exports.DisplayHolyCow = void 0;
const Util_1 = require("../Util");
function DisplayHolyCow(req, res, next) {
    res.render('projects-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayHolyCow = DisplayHolyCow;
function DisplayRascalFranky(req, res, next) {
    res.render('projects-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayRascalFranky = DisplayRascalFranky;
function DisplayReaderLab(req, res, next) {
    res.render('projects-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayReaderLab = DisplayReaderLab;
//# sourceMappingURL=projects-sub-pages.js.map