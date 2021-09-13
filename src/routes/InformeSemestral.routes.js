import { Router } from "express";
import { getInformesSemestrales,addInformeSemestral } from "../controllers/InformeSemestral.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//INFORMES SEMESTRALES ROUTES
//funcion para obtener todas las fichas
router.get('/informeSemestral',getInformesSemestrales);
//funcion para agregar un informe nuevo
router.post('/informeSemestral',addInformeSemestral);

export default router;