import { getConnection,sql,queries } from "../database";
//peticiones a la base de datos se detalla la funcionalidad en InformeSemestral.routes.js
export const getInformesSemestrales=async (req,res)=>{
    try{
        const pool=await getConnection()
        const result=await pool.request().query(queries.getAllInformesSemestrales);
        console.log('getInformesSemestrales executed');  
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const addInformeSemestral=async (req,res)=>{
    try{
        const {CodInforme,Semestre,Fecha,IdInformeSemestral,CodDocente,NroTutorandos_TuroriasRealizadas_InicioSemestre,NroTutorandos_TuroriasRealizadas_MedioSemestre,NroTutorandos_TuroriasRealizadas_FinalSemestre}=req.body;
        const pool=await getConnection();
        
        await pool.request()
            .input("CodInforme",sql.VarChar,CodInforme)
            .input("Semestre",sql.VarChar,Semestre)
            .input("Fecha",sql.Date,Fecha)
            .query(queries.addNewInforme);
        console.log('addInforme executed',CodInforme)
        //res.json({CodInforme});

        await pool.request()
            .input("CodInforme",sql.VarChar,CodInforme)
            .input("IdInformeSemestral",sql.VarChar,IdInformeSemestral)
            .input("CodDocente",sql.VarChar,CodDocente)
            .input("NroTutorandos_TuroriasRealizadas_InicioSemestre",sql.Int,NroTutorandos_TuroriasRealizadas_InicioSemestre)
            .input("NroTutorandos_TuroriasRealizadas_MedioSemestre",sql.Int,NroTutorandos_TuroriasRealizadas_MedioSemestre)
            .input("NroTutorandos_TuroriasRealizadas_FinalSemestre",sql.Int,NroTutorandos_TuroriasRealizadas_FinalSemestre)
            .query(queries.addNewInformeSemestral);
        console.log('addInformeSemestral executed',IdInformeSemestral)
        res.json({IdInformeSemestral});

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};