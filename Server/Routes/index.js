"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About - Burhan Jawed', page: 'about' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services - Burhan Jawed', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact' });
});
router.get('/projects/holy-cow', function (req, res, next) {
    res.render('index-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow' });
});
router.get('/projects/rascal-franky', function (req, res, next) {
    res.render('index-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky' });
});
router.get('/projects/readerlab', function (req, res, next) {
    res.render('index-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab' });
});
//# sourceMappingURL=index.js.map