import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en Casos.routes.js
export const getCasos=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllCasos);
        console.log('getAllCasos executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getCasoById=async (req,res)=>{
    try{
        const { idInforme,idCaso }=req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("IdInformeSemestral",sql.VarChar,idInforme)
            .input("IdCaso",sql.VarChar,idCaso)
            .query(queries.getCasoById);
        console.log('getCasoById executed',idCaso);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addCaso=async (req,res)=>{
    try{
        const { IdCaso,IdInformeSemestral,CodEstudiante,IdTipoCaso }=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdCaso",sql.VarChar,IdCaso)
            .input("IdInformeSemestral",sql.VarChar,IdInformeSemestral)
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .input("IdTipoCaso",sql.VarChar,IdTipoCaso)
            .query(queries.addNewCaso);
        console.log('addCaso executed',IdCaso)
        res.json({IdInformeSemestral,IdCaso});

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const deleteCasoById=async (req,res)=>{
    try{
        const { idInforme,idCaso }=req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("IdInformeSemestral",sql.VarChar,idInforme)
            .input("IdCaso",sql.VarChar,idCaso)
            .query(queries.deleteCasoById);
        res.json({idInforme,idCaso});
        console.log("deleteCasoById executed",idCaso);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};