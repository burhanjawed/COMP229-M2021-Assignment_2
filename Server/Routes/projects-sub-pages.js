"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const projects_sub_pages_1 = require("../Controllers/projects-sub-pages");
router.get('/holy-cow', projects_sub_pages_1.DisplayHolyCow);
router.get('/rascal-franky', projects_sub_pages_1.DisplayRascalFranky);
router.get('/readerlab', projects_sub_pages_1.DisplayReaderLab);
//# sourceMappingURL=projects-sub-pages.js.map