export const queries={
    // Queries Estudiantes
    getAllEstudiantes:"Select * from TEstudiante",
    getEstudianteById:"Select * from TEstudiante where IDEstudiante=@IDEstudiante",
    addNewEstudiantes:"Insert into TEstudiante Values (@IDEstudiante,@Nombres,@ApPaterno,@ApMaterno,@Email,@Direccion,@Celular)",
    deleteEstudianteById:"delete from TEstudiante where IDEstudiante=@IDEstudiante",
    updateEstudianteById:"update TEstudiante set IDEstudiante=@IDEstudiante,Nombres=@Nombres,ApPaterno=@ApPaterno,ApMaterno=@ApMaterno,Email=@Email,Direccion=@Direccion,Celular=@Celular where IDEstudiante=@IDEstudiante",

    // Queries Docentes
    getAllDocentes:"Select * from TDocente",
    getDocenteById:"Select * from TDocente where IDDocente=@IDDocente",
    getTutores:"Select * from TDocente where EsTutor='Si'",
    addNewDocente:"Insert into TDocente Values (@IdDocente,@DNI,@Nombres,@ApPaterno,@ApMaterno,@Categoria,@Email,@Direccion,@Celular,@EsTutor)",
    deleteDocenteById:"delete from TDocente where IdDocente=@IdDocente",
    updateDocenteById:"update TDocente set DNI=@DNI, Nombres= @Nombres, ApPaterno=@ApPaterno, ApMaterno=@ApMaterno,Categoria=@Categoria, Email=@Email, Direccion=@Direccion, Celular=@Celular, EsTutor=@EsTutor where IdDocente=@IdDocente",


    // Queries Tutor
    getAllTutor:"Select * from TTutor",
    getTutorById:"Select * from TTutor where IDTutor=@IDTutor",
    addNewTutor:"Insert into TTutor Values (@IDTutor,@Tutorados,@IDDocente)",
    deleteTutorById:"delete from TTutor where IDTutor=@IDTutor",
    updateTutorById:"update TTutor set IDTutor=@IDTutor,Tutorados=@Tutorados,IDDocente=@IDDocente where IDTutor=@IDTutor"
}