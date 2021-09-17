import { Router } from "express";
import {getFotoPerfilByCorreo, getListSemestres, updateFotoPerfilByCorreo} from '../controllers/Others.controllers'
//DOCENTES ROUTES
//importamos la funcion router para el enrutado
const router=Router();

router.get('/ListSemestres',getListSemestres);
router.get('/FotoPerfil/:Correo',getFotoPerfilByCorreo);
router.put('/FotoPerfil/:Correo',updateFotoPerfilByCorreo);
export default router;