import { Router } from "express";
import {getListSemestres} from '../controllers/Others.controllers'
//DOCENTES ROUTES
//importamos la funcion router para el enrutado
const router=Router();

router.get('/ListSemestres',getListSemestres);

export default router;