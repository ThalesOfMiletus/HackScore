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
exports.deleteAvaliador = exports.getAllAvaliadores = exports.createAvaliador = void 0;
const dbConfig_1 = __importDefault(require("../database/dbConfig"));
const createAvaliador = (nome, login, senha) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *', [nome, login, senha]);
    return result.rows[0];
});
exports.createAvaliador = createAvaliador;
const getAllAvaliadores = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbConfig_1.default.query('SELECT * FROM avaliadores');
    return result.rows;
});
exports.getAllAvaliadores = getAllAvaliadores;
const deleteAvaliador = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield dbConfig_1.default.query('DELETE FROM avaliadores WHERE id = $1', [id]);
});
exports.deleteAvaliador = deleteAvaliador;
