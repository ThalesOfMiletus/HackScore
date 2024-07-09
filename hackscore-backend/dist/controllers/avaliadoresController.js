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
exports.deleteAvaliadorController = exports.getAllAvaliadoresController = exports.createAvaliadorController = void 0;
const avaliadoresService_1 = require("../services/avaliadoresService");
const joi_1 = __importDefault(require("joi"));
const validateAvaliador = (data) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
        login: joi_1.default.string().required(),
        senha: joi_1.default.string().required(),
    });
    return schema.validate(data);
};
const createAvaliadorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validateAvaliador(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const { nome, login, senha } = req.body;
    try {
        const avaliador = yield (0, avaliadoresService_1.registerAvaliador)(nome, login, senha);
        res.json(avaliador);
    }
    catch (err) {
        res.status(500).send('Erro ao cadastrar avaliador');
    }
});
exports.createAvaliadorController = createAvaliadorController;
const getAllAvaliadoresController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const avaliadores = yield (0, avaliadoresService_1.listAvaliadores)();
        res.json(avaliadores);
    }
    catch (err) {
        res.status(500).send('Erro ao buscar avaliadores');
    }
});
exports.getAllAvaliadoresController = getAllAvaliadoresController;
const deleteAvaliadorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, avaliadoresService_1.removeAvaliador)(Number(id));
        res.send('Avaliador excluído com sucesso');
    }
    catch (err) {
        res.status(500).send('Erro ao excluir avaliador');
    }
});
exports.deleteAvaliadorController = deleteAvaliadorController;
