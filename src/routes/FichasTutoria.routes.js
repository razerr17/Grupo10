import { Router } from "express";
import { addFicha, getFichaById, getFichas, updateFichaById} from "../controllers/FichasTutoria.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//FICHAS ROUTES
//funcion para obtener todas las fichas
router.get('/fichas',getFichas);
//funcion para obtener una ficha por id
router.get('/fichas/:id',getFichaById);
//funcion para agregar una ficha nueva
router.post('/fichas',addFicha);
//funcion para actualizar una ficha por ID
router.put('/fichas/:id',updateFichaById);
export default router;