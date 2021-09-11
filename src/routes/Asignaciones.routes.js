import { Router } from "express";
import {getAsignaciones,addAsignacion,updateAsignacionById} from '../controllers/Asignacion.crontrollers'
//Asignaciones ROUTES
//importamos la funcion router para el enrutado
const router=Router();
//funcion para obtener todas las asignaciones
router.get('/asignaciones',getAsignaciones);
//funcion para agregar una asignaion nueva
router.post('/asignaciones',addAsignacion);
//funcion para actualizar una asignacion por ID
router.put('/asignaciones/:id',updateAsignacionById);
export default router;