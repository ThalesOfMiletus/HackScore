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
exports.getAvaliacoesByAvaliador = exports.getAvaliacoesByEquipe = exports.getAllAvaliacoes = exports.createAvaliacao = void 0;
const dbConfig_1 = __importDefault(require("../database/dbConfig"));
const createAvaliacao = (avaliador_id, equipe_id, notas) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('INSERT INTO avaliacoes (avaliador_id, equipe_id, notas) VALUES ($1, $2, $3) RETURNING *', [avaliador_id, equipe_id, notas]);
    return result.rows[0];
});
exports.createAvaliacao = createAvaliacao;
const getAllAvaliacoes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('SELECT * FROM avaliacoes');
    return result.rows;
});
exports.getAllAvaliacoes = getAllAvaliacoes;
const getAvaliacoesByEquipe = (equipe_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('SELECT * FROM avaliacoes WHERE equipe_id = $1', [equipe_id]);
    return result.rows;
});
exports.getAvaliacoesByEquipe = getAvaliacoesByEquipe;
const getAvaliacoesByAvaliador = (avaliador_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('SELECT * FROM avaliacoes WHERE avaliador_id = $1', [avaliador_id]);
    return result.rows;
});
exports.getAvaliacoesByAvaliador = getAvaliacoesByAvaliador;
