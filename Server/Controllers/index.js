"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const DBConfig = __importStar(require("../Config/db"));
const user_1 = __importDefault(require("../Models/user"));
const Util_1 = require("../Util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About - Burhan Jawed', page: 'about', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services - Burhan Jawed', page: 'services', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login - Burhan Jawed', page: 'login', messages: req.flash('loginMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/contact-list');
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            };
            const authToken = jsonwebtoken_1.default.sign(payload, DBConfig.Secret, {
                expiresIn: 604800
            });
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register - Burhan Jawed', page: 'register', messages: req.flash('registerMessage'), displayName: Util_1.UserDisplayName(req) });
    }
    return res.redirect('/contact-list');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/contact-list');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logout();
    return res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=index.js.map