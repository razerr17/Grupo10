import { Router } from "express";
import {getAsignaciones,addAsignacion,updateAsignacionById, addListAsignacion, getTutorByCodEstudiante} from '../controllers/Asignacion.crontrollers'
//Asignaciones ROUTES
//importamos la funcion router para el enrutado
const router=Router();
//funcion para obtener todas las asignaciones
router.get('/asignaciones',getAsignaciones);
//funcion para agregar una asignaion nueva
router.post('/asignaciones',addAsignacion);
//funcion para agregar una lista de asignaciones
router.post('/Listasignaciones',addListAsignacion);
//funcion para actualizar una asignacion por ID
router.put('/asignaciones/:id',updateAsignacionById);
//funcion para obtener un tutor por estudiante
router.get('/asignaciones/:CodEstudiante',getTutorByCodEstudiante);
export default router;