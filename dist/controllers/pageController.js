"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionario1 = exports.questionario = exports.quest = void 0;
/* export const home = (req: Request, res: Response) => {
  res.render('pages/page');
}

export const dicas = (req: Request, res: Response) => {
  res.render('pages/dicas');
}

export const contato = (req: Request, res: Response) => {
  res.render('pages/contato');
} */
const quest = (req, res) => {
    res.render('pages/quest');
};
exports.quest = quest;
const questionario = (req, res) => {
    res.render('pages/questionario');
};
exports.questionario = questionario;
const questionario1 = (req, res) => {
    res.render('pages/questionario1');
};
exports.questionario1 = questionario1;
