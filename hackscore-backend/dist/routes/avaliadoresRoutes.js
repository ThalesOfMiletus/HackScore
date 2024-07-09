"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const avaliadoresController_1 = require("../controllers/avaliadoresController");
const router = express_1.default.Router();
router.post('/', avaliadoresController_1.createAvaliadorController);
router.get('/', avaliadoresController_1.getAllAvaliadoresController);
router.delete('/:id', avaliadoresController_1.deleteAvaliadorController);
exports.default = router;
