"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayReaderLab = exports.DisplayRascalFranky = exports.DisplayHolyCow = void 0;
function DisplayHolyCow(req, res, next) {
    res.render('projects-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow' });
}
exports.DisplayHolyCow = DisplayHolyCow;
function DisplayRascalFranky(req, res, next) {
    res.render('projects-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky' });
}
exports.DisplayRascalFranky = DisplayRascalFranky;
function DisplayReaderLab(req, res, next) {
    res.render('projects-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab' });
}
exports.DisplayReaderLab = DisplayReaderLab;
//# sourceMappingURL=projects-sub-pages.js.map