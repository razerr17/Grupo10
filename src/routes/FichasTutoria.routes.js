import { Router } from "express";
import { getFichas,addFicha, getFichaById, getFichasTutoria, updateFichaById,get} from "../controllers/FichasTutoria.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//FICHAS ROUTES
//funcion para obtener todas las fichas
router.get('/fichas',getFichas);
//funcion para obtener una ficha por id
router.get('/fichas/:id',getFichaById);
//funcion para obtener una ficha por id
router.get('/fichas/asignacion/:CodDocente',getFichasTutoria);
//funcion para agregar una ficha nueva
router.post('/fichas',addFicha);
//funcion para actualizar una ficha por ID
router.put('/fichas/:id',updateFichaById);
//funcion para obtener todas las fichas de tutoria
//router.get('/fichas',getFichasTutoria);
export default router;