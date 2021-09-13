import { Router } from "express";
import { getTiposCaso,getTipoCasoById,addTipoCaso,updateTipoCasoById,deleteTipoCasoById } from "../controllers/TiposCasos.controllers";

//importamos la funcion router para el enrutado
const router=Router();
//TIPO CASO ROUTES
//funcion para obtener todos los tipos de caso
router.get('/tiposCaso',getTiposCaso);
//funcion para obtener un tipo de caso por id el cual es el codigo
router.get('/tiposCaso/:id',getTipoCasoById);
//funcion para agregar un tipo caso nuevo
router.post('/tiposCaso',addTipoCaso);
//funcion para actualizar un tipo de caso por ID
router.put('/tiposCaso/:id',updateTipoCasoById);
//funcion para eliminar un tipo de caso por ID
router.delete('/tiposCaso/:id',deleteTipoCasoById);

export default router;