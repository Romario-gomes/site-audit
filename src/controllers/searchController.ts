import { Request, Response } from "express";

interface IQuestion {
  questionario: [];
}

export const search = (req: Request, res: Response) => {
  const question = req.body['question[]'];
  const total = question.length;
  console.log("Total: ", total);
  let cont = 0
  question.map((quest: any) => {
    if(quest === "1"){
      cont++;
    }
  })




  const percent = ((cont*100)/total).toFixed(1);

  res.render('pages/resultado', {
    total,
    percent,
  });
}