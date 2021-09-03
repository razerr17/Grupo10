import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en Estudiantes.routes.js
export const getEstudiantes=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllEstudiantes);
        console.log('getEstudiantes executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getEstudianteById=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("IDEstudiante",sql.VarChar,id)
        .query(queries.getEstudianteById);
        console.log('getEstudiantesByID executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const addEstudiante=async (req,res)=>{
    try{
        const {IDEstudiante,Nombres,ApPaterno,ApMaterno,Email,Direccion,Celular}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IDEstudiante",sql.VarChar,IDEstudiante)
            .input("Nombres",sql.VarChar,Nombres)
            .input("ApPaterno",sql.VarChar,ApPaterno)
            .input("ApMaterno",sql.VarChar,ApMaterno)
            .input("Email",sql.VarChar,Email)
            .input("Direccion",sql.VarChar,Direccion)
            .input("Celular",sql.VarChar,Celular)
            .query(queries.addNewEstudiantes);
        console.log('addEstudiante executed',IDEstudiante)
        res.json({IDEstudiante,Nombres,ApPaterno,ApMaterno,Email,Direccion,Celular});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addEstudiantes=async (req,res)=>{
    try{  
        const Lista=req.body;
        let queriestemp='';
        for (let i = 0; i < Lista.length; i++) {
            let IDEstudiante=Lista[i].IDEstudiante,Nombres=Lista[i].Nombres,ApPaterno=Lista[i].ApPaterno,ApMaterno=Lista[i].ApMaterno,
            Email=Lista[i].Email,Direccion=Lista[i].Direccion,Celular=Lista[i].Celular;
            queriestemp+="Insert into TEstudiante Values ('"+IDEstudiante+"','"+Nombres+"','"+ApPaterno+"','"+ApMaterno+"','"+Email+"','"+Direccion+"','"+Celular+"')\n";
        }
        console.log(queriestemp);
        const pool=await getConnection();
        const result=await pool.request().query(queriestemp);
        console.log('addEstudiantes executed')
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);}
};
export const updateEstudianteById=async (req,res)=>{
    try{
        const {id}=req.params;
        const {Nombres,ApPaterno,ApMaterno,Email,Direccion,Celular}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("IDEstudiante",sql.VarChar,id)
            .input("Nombres",sql.VarChar,Nombres)
            .input("ApPaterno",sql.VarChar,ApPaterno)
            .input("ApMaterno",sql.VarChar,ApMaterno)
            .input("Email",sql.VarChar,Email)
            .input("Direccion",sql.VarChar,Direccion)
            .input("Celular",sql.VarChar,Celular)
            .query(queries.updateEstudianteById);
        console.log('updateEstudiantesByID executed',id)
        res.json({id,Nombres,ApPaterno,ApMaterno,Email,Direccion,Celular});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const deleteEstudianteById=async (req,res)=>{
    try{
        const {id}=req.params;
        const pool=await getConnection();
        await pool.request()
            .input("IDEstudiante",sql.VarChar,id)
            .query(queries.deleteEstudianteById);
        res.json({id});
        console.log("deleteEstudianteById executed",id);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};