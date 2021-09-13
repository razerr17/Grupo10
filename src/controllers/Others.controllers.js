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