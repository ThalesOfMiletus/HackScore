"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvaliacoesByAvaliadorController = exports.getAvaliacoesByEquipeController = exports.getAllAvaliacoesController = exports.createAvaliacaoController = void 0;
const avaliacoesService_1 = require("../services/avaliacoesService");
const joi_1 = __importDefault(require("joi"));
const validateAvaliacao = (data) => {
    const schema = joi_1.default.object({
        avaliador_id: joi_1.default.number().required(),
        equipe_id: joi_1.default.number().required(),
        notas: joi_1.default.object().required(),
    });
    return schema.validate(data);
};
const createAvaliacaoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validateAvaliacao(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { avaliador_id, equipe_id, notas } = req.body;
    try {
        const avaliacao = yield (0, avaliacoesService_1.registerAvaliacao)(avaliador_id, equipe_id, notas);
        res.json(avaliacao);
    }
    catch (err) {
        res.status(500).send('Erro ao cadastrar avaliação');
    }
});
exports.createAvaliacaoController = createAvaliacaoController;
const getAllAvaliacoesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const avaliacoes = yield (0, avaliacoesService_1.listAvaliacoes)();
        res.json(avaliacoes);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar avaliações');
    }
});
exports.getAllAvaliacoesController = getAllAvaliacoesController;
const getAvaliacoesByEquipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const avaliacoes = yield (0, avaliacoesService_1.listAvaliacoesByEquipe)(Number(id));
        res.json(avaliacoes);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar avaliações da equipe');
    }
});
exports.getAvaliacoesByEquipeController = getAvaliacoesByEquipeController;
const getAvaliacoesByAvaliadorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const avaliacoes = yield (0, avaliacoesService_1.listAvaliacoesByAvaliador)(Number(id));
        res.json(avaliacoes);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar avaliações do avaliador');
    }
});
exports.getAvaliacoesByAvaliadorController = getAvaliacoesByAvaliadorController;
