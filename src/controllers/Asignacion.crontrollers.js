import { getConnection,sql,queries } from "../database";



export const getAsignaciones=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAsignaciones);
        console.log("getAsignaciones executed");  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addAsignacion=async (req,res)=>{
    try{
        const {IdAsignacion,CodDocente,CodEstudiante,Semestre}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdAsignacion",sql.VarChar,IdAsignacion)
            .input("CodDocente",sql.VarChar,CodDocente)
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .input("Semestre",sql.VarChar,Semestre)
            .query(queries.addNewAsignacion);
        console.log('addAsignacion executed',IdAsignacion)
        res.json({IdAsignacion});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateAsignacionById=async (req,res)=>{
    try{
        const {id}=req.params;
        const {CodDocente,CodEstudiante}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("CodDocente",sql.VarChar,CodDocente)
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .input("IdAsignacion",sql.VarChar,id)
            .query(queries.updateAsignacionById);
        console.log('updateAsignacionById executed',id,CodDocente,CodEstudiante)
        res.json({id,CodDocente,CodEstudiante});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};