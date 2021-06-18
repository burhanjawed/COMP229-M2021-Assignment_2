"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.DisplayAddPage = exports.ProcessUpdatePage = exports.DisplayUpdatePage = exports.DisplayContactListPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Contacts List', page: '/contact-list/contact-list', contacts: contactsCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayUpdatePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update Contact', page: '/contact-list/update', contacts: contactItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function ProcessUpdatePage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contacts_1.default({
        "_id": id,
        "Name": req.body.name,
        "Number": req.body.number,
        "Email": req.body.email
    });
    contacts_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact', page: '/contact-list/add', contacts: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contacts_1.default({
        "Name": req.body.name,
        "Number": req.body.number,
        "Email": req.body.email
    });
    contacts_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contacts.js.map