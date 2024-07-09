"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const avaliadoresRoutes_1 = __importDefault(require("./avaliadoresRoutes"));
const equipesRoutes_1 = __importDefault(require("./equipesRoutes"));
const avaliacoesRoutes_1 = __importDefault(require("./avaliacoesRoutes"));
const router = express_1.default.Router();
router.use('/avaliadores', avaliadoresRoutes_1.default);
router.use('/equipes', equipesRoutes_1.default);
router.use('/avaliacoes', avaliacoesRoutes_1.default);
exports.default = router;
