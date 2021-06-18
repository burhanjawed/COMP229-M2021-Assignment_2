"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactListPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
function DisplayContactListPage(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactsCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
//# sourceMappingURL=contacts.js.map