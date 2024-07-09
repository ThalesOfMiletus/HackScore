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
exports.removeAvaliador = exports.listAvaliadores = exports.registerAvaliador = void 0;
const avaliadorModel_1 = require("../models/avaliadorModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerAvaliador = (nome, login, senha) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(senha, 10);
    return yield (0, avaliadorModel_1.createAvaliador)(nome, login, hashedPassword);
});
exports.registerAvaliador = registerAvaliador;
const listAvaliadores = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, avaliadorModel_1.getAllAvaliadores)();
});
exports.listAvaliadores = listAvaliadores;
const removeAvaliador = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, avaliadorModel_1.deleteAvaliador)(id);
});
exports.removeAvaliador = removeAvaliador;
