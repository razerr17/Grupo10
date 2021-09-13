import { Router } from "express";
import { getCasos,getCasoById,addCaso, deleteCasoById } from "../controllers/Casos.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//CASO ROUTES
//funcion para obtener todos los casos
router.get('/casos',getCasos);
//funcion para obtener un caso por id el cual es el codigo
router.get('/casos/:idInforme/:idCaso',getCasoById);
//funcion para agregar un caso nuevo
router.post('/casos',addCaso);
//funcion para eliminar un caso por ID
router.delete('/casos/:idInforme/:idCaso',deleteCasoById);
export default router;