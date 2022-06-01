"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (req, res) => {
    let { email, senha, nome } = req.body;
    const campos = { email, senha, nome };
    console.log({ email, senha, nome });
    const total = Object.keys(campos).length;
    let cont = 0;
    if (email === "email@email.com") {
        cont++;
    }
    if (senha === "senha123") {
        cont++;
    }
    if (nome === "Romário") {
        cont++;
    }
    const percent = ((cont * 100) / total).toFixed(1);
    res.render('pages/resultado', {
        cont,
        total,
        percent,
    });
};
exports.search = search;
