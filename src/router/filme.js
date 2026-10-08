import express from "express";
import ControllerFilme from './controller/filme.js'

const router = express.Router();

const controller = new ControllerFilme()


router.get("/listar",ControllerFilme.Listar);
router.get("/buscar/:id",controllers.BuscarId);
router.post("/criar",controllers.Criar);
router.put("/alterar",controllers.Alterar);
router.delete("/deletar",controllers.Deletar);

export default router