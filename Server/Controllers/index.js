"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About - Burhan Jawed', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services - Burhan Jawed', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map