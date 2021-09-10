import { Router } from "express";
import { getSesiones,getSesionById, addSesionTutoria} from "../controllers/SesionTutoria.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//SESIONES DE TUTORIA ROUTES
//funcion para obtener todas las sesiones insertadas
router.get('/sesiones',getSesiones);
//funcion para obtener una sesion por id
router.get('/sesiones/:id',getSesionById);
//funcion para agregar una ficha nueva
router.post('/sesiones',addSesionTutoria);
//funcion para obtener todas las fichas de tutoria
//router.get('/fichas',getFichasTutoria);
export default router;