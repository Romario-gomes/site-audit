import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
  let { email, senha, nome } = req.body;

  const campos = { email, senha, nome };

  console.log({ email, senha, nome });

  const total = Object.keys(campos).length;

  
  let cont = 0;
  if (email === "email@email.com"){
    cont++;
  }

  if (senha === "senha123") {
   cont++;
  }

  if (nome === "Romário") {
   cont++;
  }

  const percent = ((cont*100)/total).toFixed(1);

  res.render('pages/resultado', {
    cont,
    total,
    percent,
  });
}