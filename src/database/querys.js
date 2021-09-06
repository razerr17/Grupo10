export const queries={
    // Queries Estudiantes
    getAllEstudiantes:"Select * from TEstudiante",
    getEstudianteById:"Select * from TEstudiante where CodEstudiante=@CodEstudiante",
    addNewEstudiantes:"Insert into TEstudiante Values (@CodEstudiante,@Nombres,@ApPaterno,@ApMaterno,@Email,@Direccion,@Celular,@SemestreIngreso)",
    deleteEstudianteById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateEstudianteById:"update TEstudiante set Email=@Email,Direccion=@Direccion,Celular=@Celular where CodEstudiante=@CodEstudiante",
    // Queries Docentes
    getAllDocentes:"Select * from TDocente",
    getDocenteById:"Select * from TDocente where CodDocente=@CodDocente",
    addNewDocente:"Insert into TDocente Values (@CodDocente,@Nombres,@ApPaterno,@ApMaterno,@DNI,@Categoria,@Celular,@Email,@Direccion,@EsTutor)",
    deleteDocenteById:"delete from TDocente where CodDocente=@CodDocente",
    updateDocenteById:"update TDocente set Categoria=@Categoria, Email=@Email,Celular=@Celular,Direccion=@Direccion, EsTutor=@EsTutor where CodDocente=@CodDocente",
    getTutores:"Select * from TDocente where esTutor='Si'"
}