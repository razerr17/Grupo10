import { getConnection,sql,queries } from "../database";

//peticiones a la base de datos se detalla la funcionalidad en TipoCaso.routes.js
export const getTiposCaso=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllTipoCasos);
        console.log('getAllTipoCasos executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getTipoCasoById=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("IdTipoCaso",sql.VarChar,id)
        .query(queries.getTipoCasosById);
        console.log('getTipoCasosById executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addTipoCaso=async (req,res)=>{
    try{
        const { IdTipoCaso,TipoCaso }=req.body;
        const pool=await getConnection();
        
        await pool.request()
            .input("IdTipoCaso",sql.VarChar,IdTipoCaso)
            .input("TipoCaso",sql.VarChar,TipoCaso)
            .query(queries.addNewTipoCaso);
        console.log('addTipoCaso executed',IdTipoCaso)
        res.json({IdTipoCaso});

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const updateTipoCasoById=async (req,res)=>{
    try{
        const {id}=req.params;
        const {TipoCaso}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IdTipoCaso",sql.VarChar,id)
            .input("TipoCaso",sql.VarChar,TipoCaso)
            .query(queries.updateTipoCasoById);
        console.log('updateTipoCasoById executed',id)
        res.json({id,TipoCaso});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const deleteTipoCasoById=async (req,res)=>{
    try{
        const {id}=req.params;
        const pool=await getConnection();
        await pool.request()
            .input("IdTipoCaso",sql.VarChar,id)
            .query(queries.deleteTipoCasoById);
        res.json({id});
        console.log("deleteTipoCasoById executed",id);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};