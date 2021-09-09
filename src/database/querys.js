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
    loginCoordinador:"execute spuVerificacionLoginCoordinador @Usuario,@Contrasenia;"

}