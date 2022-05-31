import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render('pages/page');
}

export const dicas = (req: Request, res: Response) => {
  res.render('pages/dicas');
  
}

export const contato = (req: Request, res: Response) => {
  res.render('pages/contato');
  

  
}

export const questionario = (req: Request, res: Response) => {
  res.render('pages/questionario');
  

  
}
