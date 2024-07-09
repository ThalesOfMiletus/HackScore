"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const equipesController_1 = require("../controllers/equipesController");
const router = express_1.default.Router();
router.post('/', equipesController_1.createEquipeController);
router.get('/', equipesController_1.getAllEquipesController);
router.delete('/:id', equipesController_1.deleteEquipeController);
exports.default = router;
