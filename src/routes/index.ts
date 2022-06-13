import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

/* router.get("/", PageController.home);
router.get("/dicas", PageController.dicas); */
router.get("/", PageController.quest);
router.get("/questionario", PageController.questionario);
router.get("/questionario/1", PageController.questionario1);
/* 
router.get("/contato", PageController.contato); */

router.post("/search", SearchController.search)




export default router;