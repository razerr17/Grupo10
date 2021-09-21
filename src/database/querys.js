export const queries={
    // Queries Estudiantes
    getAllEstudiantes:"Select * from TEstudiante",
    getEstudianteById:"Select * from TEstudiante where CodEstudiante=@CodEstudiante",
    addNewEstudiantes:"Insert into TEstudiante Values (@CodEstudiante,@Nombres,@ApPaterno,@ApMaterno,@Email,@Direccion,@Celular,@SemestreIngreso)",
    deleteEstudianteById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateEstudianteById:"update TEstudiante set Email=@Email,Direccion=@Direccion,Celular=@Celular where CodEstudiante=@CodEstudiante",
    loginEstudiante:"execute spuVerificacionLoginEstudiante @Usuario,@Contrasenia;",
    getEstudianteBySemestreIngreso:"Select * from TEstudiante where SemestreIngreso=@SemestreIngreso",
    // Queries Docentes
    getAllDocentes:"Select * from TDocente",
    getDocenteById:"Select * from TDocente where CodDocente=@CodDocente",
    addNewDocente:"Insert into TDocente Values (@CodDocente,@Nombres,@ApPaterno,@ApMaterno,@DNI,@Categoria,@Celular,@Email,@Direccion,@EsTutor)",
    deleteDocenteById:"delete from TDocente where CodDocente=@CodDocente",
    updateDocenteById:"update TDocente set Categoria=@Categoria, Email=@Email,Celular=@Celular,Direccion=@Direccion, EsTutor=@EsTutor where CodDocente=@CodDocente",
    getTutores:"Select * from TDocente where esTutor='Si'",
    loginDocente:"execute spuVerificacionLoginDocente @Usuario,@Contrasenia;",
    loginCoordinador:"execute spuVerificacionLoginCoordinador @Usuario,@Contrasenia;",
    getTutorById:"Select * from TDocente where (CodDocente=@CodDocente and esTutor='Si')",
    // Queries Fichas de tutoria
    getAllFichas:"Select * from TFichaTutoria",
    getFichaById:"Select * from TFichaTutoria where IdFichaTutoria=@IdFichaTutoria",
    addNewFicha:"Insert into TFichaTutoria Values (@IdFichaTutoria,@IdAsignacion,@CelularReferenciaTutorando,@PersonaReferenciaTutorando)",
    //deleteFichaById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateFichaById:"update TFichaTutoria set CelularReferenciaTutorando=@CelularReferenciaTutorando,PersonaReferenciaTutorando=@PersonaReferenciaTutorando where IdFichaTutoria=@IdFichaTutoria",
    getFichasT:"execute spuEstudiantebyAsignacion @CodDocente",
    // Queries Asignaciones
    addNewAsignacion: "execute spuInsertarAsignaciones @CodDocente ,@CodEstudiante",
    getAsignaciones: "Select * from TAsignacion",
    updateAsignacionById:"update TAsignacion set CodDocente=@CodDocente, CodEstudiante=@CodEstudiante where IdAsignacion=@IdAsignacion",
    getTutorByCodEstudiante:"execute spuGetTutorByEstudiante @CodEstudiante",
    // Queries Asignar sesion de tutoria
    getAllSesiones:"Select * from TSesionTutoria",
    getSesionById:"Select * from TSesionTutoria where IdSesion=@IdSesion",
    addNewSesion:"execute spuInsertarSesion @IdFichaTutoria,@Fecha,@TipoTutoria,@Semestre,@Descripcion,@Observaciones",
    getSesionByFicha:"Select * from TSesionTutoria where IdFichaTutoria=@IdFichaTutoria",
    // Queries Others
    getListSemestres: "select distinct SemestreIngreso from TEstudiante",
    UpdateContraseniaGeneral:"execute spuCambioContraseniaGeneral @Usuario,@ContraseniaAnt,@ContraseniaNew",
    //Queries Foto Perfil
    getFotoPerfil:"select Foto from TFotosPerfil where Correo=@Correo",
    UpdateFotoPerfil:"execute spuUpdateFotoPerfil @Correo,@Foto",
    getCoordinadores:"Select * from TCoordinador",
    //Queries Confidencialidad
    UpdateConfidencialidadByCod:"execute spuUpdateConfidencialidad @CodEstudiante,@TerminosConf",
    GetConfidencialidadByCod:"execute spuGetConfidencialidad @CodEstudiante",
    GetObservacionEncByIdSesion:"execute spuDevolverObservaciones @IdSesion",
  }