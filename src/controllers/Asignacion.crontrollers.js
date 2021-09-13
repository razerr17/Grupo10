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
        const {CodDocente,CodEstudiante}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("CodDocente",sql.VarChar,CodDocente)
            .input("CodEstudiante",sql.VarChar,CodEstudiante)
            .query(queries.addNewAsignacion);
        console.log('addAsignacion executed',CodDocente,CodEstudiante)
        res.json({CodDocente,CodEstudiante});
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
export const addListAsignacion=async (req,res)=>{
    try{  
        const Lista=req.body;
        let queriestemp='';
        for (let i = 0; i < Lista.length; i++) {
            let CodDocente=Lista[i].CodDocente,CodEstudiante=Lista[i].CodEstudiante;
            queriestemp+="execute spuInsertarAsignaciones '"+CodDocente+"','"+CodEstudiante+"'\n";
        }
        console.log(queriestemp);
        const pool=await getConnection();
        const result=await pool.request().query(queriestemp);
        console.log('addListAsignacion executed')
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);}
};