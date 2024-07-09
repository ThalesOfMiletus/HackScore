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
exports.deleteEquipeController = exports.getAllEquipesController = exports.createEquipeController = void 0;
const equipesService_1 = require("../services/equipesService");
const joi_1 = __importDefault(require("joi"));
const validateEquipe = (data) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
    });
    return schema.validate(data);
};
const createEquipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validateEquipe(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { nome } = req.body;
    try {
        const equipe = yield (0, equipesService_1.registerEquipe)(nome);
        res.json(equipe);
    }
    catch (err) {
        res.status(500).send('Erro ao cadastrar equipe');
    }
});
exports.createEquipeController = createEquipeController;
const getAllEquipesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipes = yield (0, equipesService_1.listEquipes)();
        res.json(equipes);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar equipes');
    }
});
exports.getAllEquipesController = getAllEquipesController;
const deleteEquipeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, equipesService_1.removeEquipe)(Number(id));
        res.send('Equipe excluída com sucesso');
    }
    catch (err) {
        res.status(500).send('Erro ao excluir equipe');
    }
});
exports.deleteEquipeController = deleteEquipeController;
