import { getConnection,sql,queries } from "../database";

//peticiones a la base de datos se detalla la funcionalidad en FichasTutoria.routes.js
export const getSesiones=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllSesiones);
        console.log('getSesiones executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getSesionById=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("IdSesion",sql.VarChar,id)
        .query(queries.getSesionById);
        console.log('getSesionById executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getSesionesbyFicha=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("IdFichaTutoria",sql.VarChar,id)
        .query(queries.getSesionByFicha);
        console.log('getSesionByFicha executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const addSesionTutoria=async (req,res)=>{
    try{
        const {IdFichaTutoria,Fecha,TipoTutoria,Semestre,Descripcion,Observaciones}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdFichaTutoria",sql.VarChar,IdFichaTutoria)
            .input("Fecha",sql.Date,Fecha)
            .input("TipoTutoria",sql.VarChar,TipoTutoria)
            .input("Semestre",sql.VarChar,Semestre)
            .input("Descripcion",sql.VarChar,Descripcion)
            .input("Observaciones",sql.VarChar,Observaciones)
            .query(queries.addNewSesion);
        res.json({IdFichaTutoria});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
