"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const avaliacoesController_1 = require("../controllers/avaliacoesController");
const router = express_1.default.Router();
router.post('/', avaliacoesController_1.createAvaliacaoController);
router.get('/', avaliacoesController_1.getAllAvaliacoesController);
router.get('/equipe/:id', avaliacoesController_1.getAvaliacoesByEquipeController);
router.get('/avaliador/:id', avaliacoesController_1.getAvaliacoesByAvaliadorController);
exports.default = router;
