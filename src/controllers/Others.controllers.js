import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en Others.controllers.js
export const getListSemestres=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getListSemestres);
        console.log('getListSemestres executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
//Peticiones de Fotos de peril para la base de datos
export const getFotoPerfilByCorreo=async (req,res)=>{
    try{
        const {Correo}=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("Correo",sql.VarChar,Correo)
        .query(queries.getFotoPerfil);
        console.log('getFotoPerfilByCorreo executed',Correo);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateFotoPerfilByCorreo=async (req,res)=>{
    try{
        const {Correo}=req.params;
        const {Foto}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("Correo",sql.VarChar,Correo)
            .input("Foto",sql.VarChar,Foto)
            .query(queries.UpdateFotoPerfil);
        console.log('updateFotoPerfilByCorreo executed',Correo)
        res.json({Foto});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateConfidencialidaByCod=async (req,res)=>{
    try{
        const {CodEstudiante}=req.params;
        const {TerminosConf}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .input("TerminosConf",sql.VarChar,TerminosConf)
            .query(queries.UpdateConfidencialidadByCod);
        console.log('UpdateConfidencialidadByCod executed',CodEstudiante)
        res.json({TerminosConf});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getConfidencialidaByCod=async (req,res)=>{
    try{
        const {CodEstudiante}=req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .query(queries.GetConfidencialidadByCod);
        console.log('GetConfidencialidadByCod executed',CodEstudiante)
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getObservacionEncByIdSesion=async (req,res)=>{
    try{
        const {IdSesion}=req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("IdSesion",sql.VarChar,IdSesion)
            .query(queries.GetObservacionEncByIdSesion);
        console.log('GetObservacionEncByIdSesion executed',IdSesion)
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateContraseniaByUsuario=async (req,res)=>{
    try{
        const {Usuario}=req.params;
        const {ContraseniaAnt,ContraseniaNew}=req.body;
        const pool=await getConnection();
        const result=await pool.request()
            .input("Usuario",sql.VarChar,Usuario)
            .input("ContraseniaAnt",sql.VarChar,ContraseniaAnt)
            .input("ContraseniaNew",sql.VarChar,ContraseniaNew)
            .query(queries.UpdateContraseniaGeneral);
        console.log('UpdateContraseniaGeneral executed',Usuario)
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};