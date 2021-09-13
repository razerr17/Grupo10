export const queries={
    // Queries Estudiantes
    getAllEstudiantes:"Select * from TEstudiante",
    getEstudianteById:"Select * from TEstudiante where CodEstudiante=@CodEstudiante",
    addNewEstudiantes:"Insert into TEstudiante Values (@CodEstudiante,@Nombres,@ApPaterno,@ApMaterno,@Email,@Direccion,@Celular,@SemestreIngreso)",
    deleteEstudianteById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateEstudianteById:"update TEstudiante set Email=@Email,Direccion=@Direccion,Celular=@Celular where CodEstudiante=@CodEstudiante",
    loginEstudiante:"execute spuVerificacionLoginEstudiante @Usuario,@Contrasenia;",
    // Queries Docentes
    getAllDocentes:"Select * from TDocente",
    getDocenteById:"Select * from TDocente where CodDocente=@CodDocente",
    addNewDocente:"Insert into TDocente Values (@CodDocente,@Nombres,@ApPaterno,@ApMaterno,@DNI,@Categoria,@Celular,@Email,@Direccion,@EsTutor)",
    deleteDocenteById:"delete from TDocente where CodDocente=@CodDocente",
    updateDocenteById:"update TDocente set Categoria=@Categoria, Email=@Email,Celular=@Celular,Direccion=@Direccion, EsTutor=@EsTutor where CodDocente=@CodDocente",
    getTutores:"Select * from TDocente where esTutor='Si'",
    // Queries Fichas de tutoria
    getAllFichas:"Select * from TFichaTutoria",
    getFichaById:"Select * from TFichaTutoria where IdFichaTutoria=@IdFichaTutoria",
    addNewFicha:"Insert into TFichaTutoria Values (@IdFichaTutoria,@IdAsignacion,@CelularReferenciaTutorando,@PersonaReferenciaTutorando)",
    //deleteFichaById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateFichaById:"update TFichaTutoria set CelularReferenciaTutorando=@CelularReferenciaTutorando,PersonaReferenciaTutorando=@PersonaReferenciaTutorando where IdFichaTutoria=@IdFichaTutoria",
    getFichasT:"execute spuEstudiantebyAsignacion @CodDocente",
    loginDocente:"execute spuVerificacionLoginDocente @Usuario,@Contrasenia;",
    loginCoordinador:"execute spuVerificacionLoginCoordinador @Usuario,@Contrasenia;",
    // Queries Tipo Caso
    getAllTipoCasos:"Select * from TTipoCaso",
    getTipoCasosById:"Select * from TTipoCaso where IdTipoCaso=@IdTipoCaso",
    addNewTipoCaso:"Insert into TTipoCaso Values (@IdTipoCaso,@TipoCaso)",
    deleteTipoCasoById:"delete from TTipoCaso where IdTipoCaso=@IdTipoCaso",
    updateTipoCasoById:"update TTipoCaso set TipoCaso=@TipoCaso where IdTipoCaso=@IdTipoCaso",
    // Queries Caso
    getAllCasos:"Select * from TCasoEspecial",
    getCasoById:"Select * from TCasoEspecial where IdInformeSemestral=@IdInformeSemestral and IdCaso=@IdCaso",
    addNewCaso:"Insert into TCasoEspecial Values (@IdCaso,@IdInformeSemestral,@CodEstudiante,@IdTipoCaso)",
    deleteCasoById:"delete from TCasoEspecial where IdInformeSemestral=@IdInformeSemestral and IdCaso=@IdCaso",
    // Queries Informe Semestral
    getAllInformesSemestrales:"Select * from TInformeSemestral",
    addNewInforme:"Insert into TInforme Values (@CodInforme,@Semestre,@Fecha)",
    addNewInformeSemestral:"Insert into TInformeSemestral Values (@CodInforme,@IdInformeSemestral,@CodDocente,@NroTutorandos_TuroriasRealizadas_InicioSemestre,@NroTutorandos_TuroriasRealizadas_MedioSemestre,@NroTutorandos_TuroriasRealizadas_FinalSemestre)"
}