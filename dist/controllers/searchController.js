"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (req, res) => {
    const question = req.body['question[]'];
    const total = question.length;
    console.log("Total: ", total);
    let cont = 0;
    question.map((quest) => {
        if (quest === "1") {
            cont++;
        }
    });
    const percent = ((cont * 100) / total).toFixed(1);
    res.render('pages/resultado', {
        total,
        percent,
    });
};
exports.search = search;
