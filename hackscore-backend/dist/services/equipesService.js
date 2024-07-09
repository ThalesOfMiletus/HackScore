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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEquipe = exports.listEquipes = exports.registerEquipe = void 0;
const equipeModel_1 = require("../models/equipeModel");
const registerEquipe = (nome) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, equipeModel_1.createEquipe)(nome);
});
exports.registerEquipe = registerEquipe;
const listEquipes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, equipeModel_1.getAllEquipes)();
});
exports.listEquipes = listEquipes;
const removeEquipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, equipeModel_1.deleteEquipe)(id);
});
exports.removeEquipe = removeEquipe;
