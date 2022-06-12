"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionario1 = exports.questionario = exports.contato = exports.dicas = exports.home = void 0;
const home = (req, res) => {
    res.render('pages/page');
};
exports.home = home;
const dicas = (req, res) => {
    res.render('pages/dicas');
};
exports.dicas = dicas;
const contato = (req, res) => {
    res.render('pages/contato');
};
exports.contato = contato;
const questionario = (req, res) => {
    res.render('pages/questionario');
};
exports.questionario = questionario;
const questionario1 = (req, res) => {
    res.render('pages/questionario1');
};
exports.questionario1 = questionario1;
