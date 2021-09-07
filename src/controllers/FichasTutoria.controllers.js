import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en FichasTutoria.routes.js
export const getFichas=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllFichas);
        console.log('getFichas executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getFichaById=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("IdFichaTutoria",sql.VarChar,id)
        .query(queries.getFichaById);
        console.log('getFichaByID executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addFicha=async (req,res)=>{
    try{
        const {IdFichaTutoria,IdAsignacion,CelularReferenciaTutorando,PersonaReferenciaTutorando}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdFichaTutoria",sql.VarChar,IdFichaTutoria)
            .input("IdAsignacion",sql.VarChar,IdAsignacion)
            .input("CelularReferenciaTutorando",sql.VarChar,CelularReferenciaTutorando)
            .input("PersonaReferenciaTutorando",sql.VarChar,PersonaReferenciaTutorando)
            .query(queries.addNewFicha);
        console.log('addFicha executed',IdFichaTutoria)
        res.json({IdFichaTutoria});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateFichaById=async (req,res)=>{
    try{
        const {id}=req.params;
        const {CelularReferenciaTutorando,PersonaReferenciaTutorando}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdFichaTutoria",sql.VarChar,id)
            .input("CelularReferenciaTutorando",sql.VarChar,CelularReferenciaTutorando)
            .input("PersonaReferenciaTutorando",sql.VarChar,PersonaReferenciaTutorando)
            .query(queries.updateFichaById);
        console.log('updateFichaByID executed',id)
        res.json({id,CelularReferenciaTutorando,PersonaReferenciaTutorando});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};