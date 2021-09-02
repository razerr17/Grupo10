export const queries={
    // Queries Estudiantes
    getAllEstudiantes:"Select * from TEstudiante",
    getEstudianteById:"Select * from TEstudiante where CodEstudiante=@CodEstudiante",
    addNewEstudiantes:"Insert into TEstudiante Values (@CodEstudiante,@Nombres,@ApPaterno,@ApMaterno,@Email,@Direccion,@Celular,@SemestreIngreso)",
    deleteEstudianteById:"delete from TEstudiante where CodEstudiante=@CodEstudiante",
    updateEstudianteById:"update TEstudiante set Email=@Email,Direccion=@Direccion,Celular=@Celular where CodEstudiante=@CodEstudiante",
    // Queries Docentes
    getAllDocentes:"Select * from TDocente",
    getDocenteById:"Select * from TDocente where IDDocente=@IDDocente",
    addNewDocente:"Insert into TDocente Values (@IDDocente,@Nombre,@DNI,@Correo,@Celular,@Direccion)",
    deleteDocenteById:"delete from TDocente where IDDocente=@IDDocente",
    updateDocenteById:"update TDocente set Nombre=@Nombre,DNI=@DNI,Correo=@Correo,Celular=@Celular,Direccion=@Direccion where IDDocente=@IDDocente"
}