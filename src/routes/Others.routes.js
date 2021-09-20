import { Router } from "express";
import {getConfidencialidaByCod, getFotoPerfilByCorreo, getListSemestres, getObservacionEncByIdSesion, updateConfidencialidaByCod, updateContraseniaByUsuario, updateFotoPerfilByCorreo} from '../controllers/Others.controllers'
//DOCENTES ROUTES
//importamos la funcion router para el enrutado
const router=Router();

router.get('/ListSemestres',getListSemestres);
router.get('/FotoPerfil/:Correo',getFotoPerfilByCorreo);
router.put('/FotoPerfil/:Correo',updateFotoPerfilByCorreo);
router.put('/Conf/:CodEstudiante',updateConfidencialidaByCod);
router.get('/Conf/:CodEstudiante',getConfidencialidaByCod);
router.get('/Conf/Observacion/:IdSesion',getObservacionEncByIdSesion);
router.put('/UpPass/:Usuario',updateContraseniaByUsuario);
export default router;