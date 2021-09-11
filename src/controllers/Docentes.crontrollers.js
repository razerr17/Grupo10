import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en Estudiantes.routes.js
export const getDocentes=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllDocentes);
        console.log("getDocentes executed");  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getDocenteById=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("CodDocente",sql.VarChar,id)
        .query(queries.getDocenteById);
        console.log('getDocenteById executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getTutores=async (req,res)=>{
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().query(queries.getTutores);
        console.log('getTutores executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const getTutorById=async (req,res)=>{ //new
    try{
        const { id }=req.params;
        const pool=await getConnection();
        const result=await pool.request().input("CodDocente",sql.VarChar,id)
        .query(queries.getTutorById);
        console.log('getTutoresById executed',id);  
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addDocente=async (req,res)=>{
    try{
        const {CodDocente,Nombres,ApPaterno,ApMaterno,DNI,Categoria,Celular,Email,Direccion,EsTutor}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("CodDocente",sql.VarChar,CodDocente)
            .input("Nombres",sql.VarChar,Nombres)
            .input("ApPaterno",sql.VarChar,ApPaterno)
            .input("ApMaterno",sql.VarChar,ApMaterno)
            .input("DNI",sql.VarChar,DNI)
            .input("Categoria",sql.VarChar,Categoria)
            .input("Celular",sql.VarChar,Celular)
            .input("Email",sql.VarChar,Email)
            .input("Direccion",sql.VarChar,Direccion)
            .input("EsTutor",sql.VarChar,EsTutor)
            .query(queries.addNewDocente);
        console.log('addDocente executed',CodDocente)
        res.json({CodDocente});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addDocentes=async (req,res)=>{
    try{  
        const Lista=req.body;
        let queriestemp='';
        for (let i = 0; i < Lista.length; i++) {
            let CodDocente=Lista[i].CodDocente,Nombres=Lista[i].Nombres,ApPaterno=Lista[i].ApPaterno,ApMaterno=Lista[i].ApMaterno,
            DNI=Lista[i].DNI,Categoria=Lista[i].Categoria,Celular=Lista[i].Celular,Email=Lista[i].Email,Direccion=Lista[i].Direccion,
            EsTutor=Lista[i].EsTutor;
            queriestemp+="Insert into TDocente Values ('"+CodDocente+"','"+Nombres+"','"+ApPaterno+"','"+ApMaterno+"','"+DNI+"','"+Categoria+"','"+Celular+"','"+Email+"','"+Direccion+"','"+EsTutor+"')\n";
        }
        console.log(queriestemp);
        const pool=await getConnection();
        const result=await pool.request().query(queriestemp);
        console.log('addDocentes executed')
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);}
};
export const updateDocenteById=async (req,res)=>{
    try{
        const {id}=req.params;
        const {Categoria,Email,Celular,Direccion,EsTutor}=req.body;
        const pool=await getConnection();
        await pool.request()
            .input("CodDocente",sql.VarChar,id)
            .input("Email",sql.VarChar,Email)
            .input("Categoria",sql.VarChar,Categoria)
            .input("Celular",sql.VarChar,Celular)
            .input("Direccion",sql.VarChar,Direccion)
            .input("EsTutor",sql.VarChar,EsTutor)
            .query(queries.updateDocenteById);
        console.log('updateDocenteById executed',id)
        res.json({id,Email,Celular,Direccion,EsTutor});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const deleteDocenteById=async (req,res)=>{
    try{
        const {id}=req.params;
        const pool=await getConnection();
        await pool.request()
            .input("CodDocente",sql.VarChar,id)
            .query(queries.deleteDocenteById);
        res.json({id});
        console.log("Se elimino el docente",id);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const loginDocente=async (req,res)=>{
    try{
        const {Usuario,Contrasenia}=req.body;
        const pool=await getConnection();
        const result=await pool.request()
            .input("Usuario",sql.VarChar,Usuario)
            .input("Contrasenia",sql.VarChar,Contrasenia)
            .query(queries.loginDocente);
        console.log('LoginDocente executed',Usuario)
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const loginCoordinador=async (req,res)=>{
    try{
        const {Usuario,Contrasenia}=req.body;
        const pool=await getConnection();
        const result=await pool.request()
            .input("Usuario",sql.VarChar,Usuario)
            .input("Contrasenia",sql.VarChar,Contrasenia)
            .query(queries.loginCoordinador);
        console.log('LoginCoordinador executed',Usuario)
        res.json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};