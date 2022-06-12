import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/dicas", PageController.dicas);
router.get("/quest", PageController.questionario);
router.get("/quest/1", PageController.questionariotest);

router.get("/contato", PageController.contato);

router.post("/search", SearchController.search)




export default router;