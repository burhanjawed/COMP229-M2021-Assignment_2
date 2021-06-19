"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contacts_1 = require("../Controllers/contacts");
const index_1 = require("../Util/index");
router.get('/', contacts_1.DisplayContactListPage);
router.get('/update/:id', index_1.AuthGuard, contacts_1.DisplayUpdatePage);
router.post('/update/:id', index_1.AuthGuard, contacts_1.ProcessUpdatePage);
router.get('/add', index_1.AuthGuard, contacts_1.DisplayAddPage);
router.post('/add', index_1.AuthGuard, contacts_1.ProcessAddPage);
router.get('/delete/:id', index_1.AuthGuard, contacts_1.ProcessDeletePage);
//# sourceMappingURL=contacts.js.map