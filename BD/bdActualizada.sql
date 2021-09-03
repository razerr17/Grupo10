USE MASTER
GO

/* ********************************************************************
					    CREACIÓN DE LA BASE DE DATOS
   ******************************************************************** */
IF EXISTS (SELECT * 
				FROM SYSDATABASES
				WHERE NAME = 'BDSistema_Tutorias')
	DROP DATABASE BDSistema_Tutorias
GO
CREATE DATABASE BDSistema_Tutorias
GO

-- Crear tipos de datos para las claves primarias
USE BDSistema_Tutorias
	EXEC SP_ADDTYPE tyCodEstudiante,	'VARCHAR(6)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodEstudianteAyudante,	'VARCHAR(6)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodEstudianteRA,	'VARCHAR(6)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodDocente,		'VARCHAR(7)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodCoordinadorTutoria,'VARCHAR(7)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodTaller,		'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodInforme,		'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyIdCaso,		'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyIdTipoCaso,		'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyIdInformeSemestral, 'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyIdAsignacion, 'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyIdFichaTutoria, 'VARCHAR(10)', 'NOT NULL'
	EXEC SP_ADDTYPE tyCodInformeQuincenal, 'VARCHAR(10)', 'NOT NULL'
GO 

/* ********* TABLA DOCENTE ********* */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TDocente')
	DROP TABLE TDocente
GO
CREATE TABLE TDocente
(
	-- Lista de atributos
	CodDocente tyCodDocente,
	Nombres VARCHAR(30) NOT NULL,
	ApPaterno VARCHAR(15) NOT NULL,
	ApMaterno VARCHAR(15) NOT NULL,
	DNI	varchar(8) check (DNI like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Categoria VARCHAR(15) NOT NULL,
	Celular	varchar(9) check (Celular like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Email VARCHAR(50) NOT NULL,
	Direccion VARCHAR(50) NOT NULL,
	EsTutor VARCHAR(2) check (EsTutor like 'Si' or EsTutor like 'No')
	-- Determinar las claves 
	PRIMARY KEY (CodDocente)
);
GO

/* ********* TABLA ESTUDIANTE ********* */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TEstudiante')
	DROP TABLE TEstudiante
GO
CREATE TABLE TEstudiante
(
	CodEstudiante tyCodEstudiante not null,
	Nombres	varchar(50) not null,
	ApPaterno	varchar(50) not null,
	ApMaterno	varchar(50) not null,
	Email	varchar(50) not null,
	Direccion	varchar(50) not null,
	Celular	varchar(9) check (Celular like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	SemestreIngreso varchar(9)
	primary key (CodEstudiante)
);
GO

/* ********* TABLA ASIGNACION ********* */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TAsignacion')
	DROP TABLE TAsignacion
GO
CREATE TABLE TAsignacion
(
	-- Lista de atributos
	IdAsignacion tyIdAsignacion,
	CodDocente tyCodDocente,
	CodEstudiante tyCodEstudiante,
	Semestre VARCHAR(7) NOT NULL,
	-- Determinar las claves 
	PRIMARY KEY (IdAsignacion),
	FOREIGN KEY (CodDocente) REFERENCES TDocente,
	FOREIGN KEY (CodEstudiante) REFERENCES TEstudiante
);
GO

/* *************************** TABLA FICHA TUTORIA *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TFichaTutoria')
	DROP TABLE TFichaTutoria
GO
CREATE TABLE TFichaTutoria
(
	-- Lista de atributos
	IdFichaTutoria tyIdFichaTutoria ,
	IdAsignacion tyIdAsignacion,
	CelularReferenciaTutorando VARCHAR(9) NOT NULL,
	PersonaReferenciaTutorando VARCHAR(50) NOT NULL,
	-- Determinar las claves 
	PRIMARY KEY (IdFichaTutoria),
	FOREIGN KEY (IdAsignacion) REFERENCES TAsignacion,
);
GO

/* *************************** TABLA SESION TUTORIA *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TSesionTutoria')
	DROP TABLE TSesionTutoria
GO
CREATE TABLE TSesionTutoria
(
	-- Lista de atributos
	IdSesion VARCHAR(5) NOT NULL,
	IdFichaTutoria tyIdFichaTutoria,
	Fecha date,
	TipoTutoria VARCHAR(15) NOT NULL,
	Descripcion VARCHAR(50) NOT NULL,
	Referencia VARCHAR(50) NOT NULL,
	Observaciones VARCHAR(100) NOT NULL,
	-- Determinar las claves 
	PRIMARY KEY (IdSesion),
	FOREIGN KEY (IdFichaTutoria) REFERENCES TFichaTutoria,

)

/* *************************** TABLA INFORME *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TInforme')
	DROP TABLE TInforme
GO
CREATE TABLE TInforme
(
	-- Lista de atributos
	CodInforme tyCodInforme,
	Semestre VARCHAR(10) NOT NULL,
	Fecha date,

	-- Determinar las claves 
	PRIMARY KEY (CodInforme)
);
GO

/* *************************** TABLA INFORME SEMESTRAL *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TInformeSemestral')
	DROP TABLE TInformeSemestral
GO
CREATE TABLE TInformeSemestral
(
	-- Lista de atributos
	CodInforme tyCodInforme,
	IdInformeSemestral tyIdInformeSemestral,
	CodDocente tyCodDocente,
	NroTutorandos_TuroriasRealizadas_InicioSemestre int NOT NULL,
	NroTutorandos_TuroriasRealizadas_MedioSemestre int NOT NULL,
	NroTutorandos_TuroriasRealizadas_FinalSemestre int NOT NULL,

	-- Determinar las claves 
	PRIMARY KEY (IdInformeSemestral),
	FOREIGN KEY (CodInforme) REFERENCES TInforme,
	FOREIGN KEY (CodDocente) REFERENCES TDocente,
);
GO
/* *************************** TABLA TIPO ESPECIAL *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TTipoCaso')
	DROP TABLE TTipoCaso
GO
CREATE TABLE TTipoCaso
(
	-- Lista de atributos
	IdTipoCaso tyIdTipoCaso,
	TipoCaso varchar(15),

	-- Definir la clave primaria
	PRIMARY KEY(IdTipoCaso)	
)
GO

/* *************************** TABLA CASO ESPECIAL *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'TCasoEspecial')
	DROP TABLE TCasoEspecial
GO
CREATE TABLE TCasoEspecial
(
	-- Lista de atributos
	IdCaso tyIdCaso,
	IdInformeSemestral tyIdInformeSemestral,
	CodEstudiante tyCodEstudiante,
	IdTipoCaso tyIdTipoCaso,

	-- Definir la clave primaria
	PRIMARY KEY(IdCaso, IdInformeSemestral),
	FOREIGN KEY(CodEstudiante) REFERENCES TEstudiante,
	FOREIGN KEY(IdTipoCaso) REFERENCES TTipoCaso,
	FOREIGN KEY(IdInformeSemestral) REFERENCES TInformeSemestral,
)
GO

/* *************************** TABLA HORARIO *************************** */
IF EXISTS (SELECT * 
				FROM SYSOBJECTS
				WHERE NAME = 'THorario')
	DROP TABLE TFichaTutoria
GO
CREATE TABLE THorario
(
	LinkMeet VARCHAR(50) NOT NULL,
	CodDocente tyCodDocente,
	Descripcion VARCHAR(50) NOT NULL,
	-- Determinar las claves 
	FOREIGN KEY (CodDocente) REFERENCES TDocente,)

use BDSistema_Tutorias
go
-- DATOS TABLA ALUMNO
INSERT INTO TEstudiante VALUES ('171943','ERICK ANDREW','BUSTAMANTE','FLORES','171943@unsaac.edu.pe','P1','984556854','2020-I')
INSERT INTO TEstudiante VALUES ('174908','VLADIMIR DANTE','CASILLA','PERCCA','174908@unsaac.edu.pe','P2','956897456','2020-I')
INSERT INTO TEstudiante VALUES ('160889','FIORELLA SILVIA','CHOQUE', 'BUENO','160889@unsaac.edu.pe','P3','956897456','2020-I')
INSERT INTO TEstudiante VALUES ('174909','LEYDI DIANA','CHOQUE' ,'SARMIENTO','174909@unsaac.edu.pe','P4','956874532','2020-I')
INSERT INTO TEstudiante VALUES ('170429','JUAN CARLOS','CONDORI', 'LOPEZ','170429@unsaac.edu.pe','P5','986879546','2020-I')
INSERT INTO TEstudiante VALUES ('170594','DIEGO ALONSO','DORADO' ,'TORRES','170594@unsaac.edu.pe','P6','984556854','2020-I')
INSERT INTO TEstudiante VALUES ('174442','ANGIE','ESCOBEDO', 'MESCCO','174442@unsaac.edu.pe','P7','984458796','2020-I')
INSERT INTO TEstudiante VALUES ('171258','BRIGGITTE','ESPEJO', 'FRANCO' ,'171258@unsaac.edu.pe','P8','914568789','2020-I')
INSERT INTO TEstudiante VALUES ('170432','GONZALO','GUTIERREZ', 'DAZA','170432@unsaac.edu.pe','P9','912456325','2020-I')
INSERT INTO TEstudiante VALUES ('171062','JUAN MANUEL','GUTIERREZ', 'SALAZAR','171062@unsaac.edu.pe','P10','945632322','2020-I')
INSERT INTO TEstudiante VALUES ('150394','ALEXANDER JAVIER','HUAMAN', 'GUEVARA','150394@unsaac.edu.pe','P11','922568556','2020-I')
INSERT INTO TEstudiante VALUES ('170434','ANTONY ISAAC','HUAMAN', 'HERMOZA','170434@unsaac.edu.pe','P12','984568956','2020-I')
INSERT INTO TEstudiante VALUES ('170435','ALVARO RICARDO','HUAMAN' ,'TORRES','170435@unsaac.edu.pe','P13','984452355','2020-I')
INSERT INTO TEstudiante VALUES ('161760','PERCY ELVIS','HUAMAN', 'VARGAS','161760@unsaac.edu.pe','P14','912568744','2020-I')
INSERT INTO TEstudiante VALUES ('174911','ALEX HELDER','HUANCARA', 'CCOLQQUE','174911@unsaac.edu.pe','P15','912568555','2020-I')
INSERT INTO TEstudiante VALUES ('160329','BRYAN','HUILLCA', 'MOZO','160329@unsaac.edu.pe','P16','978785665','2020-I')
INSERT INTO TEstudiante VALUES ('174912','CARLOS EDUARDO','INCA' ,'CRUZ','174912@unsaac.edu.pe','P17','912568555','2020-I')
INSERT INTO TEstudiante VALUES ('161368','CHARLIE JOEL','LUNA', 'CCASANI','161368@unsaac.edu.pe','P18','945235687','2020-I')
INSERT INTO TEstudiante VALUES ('170436','MARIELA','LUYCHO' ,'ANCAIFURO','170436@unsaac.edu.pe','P19','984455566','2020-I')
INSERT INTO TEstudiante VALUES ('171063','NADIABETH DIANA','MALLQUI' ,'APAZA','171063@unsaac.edu.pe','P20','981255565','2020-I')
INSERT INTO TEstudiante VALUES ('171915','MILEYDY','NINANTAY' ,'DIAZ','171915@unsaac.edu.pe','P21','955668885','2020-I')
INSERT INTO TEstudiante VALUES ('171064','ABRAHAM BENJAMIN','ORE' ,'GAMARRA','171064@unsaac.edu.pe','P22','978566655','2020-I')
INSERT INTO TEstudiante VALUES ('174447','CARLOS ENRIQUE','QUISPE', 'CHAMBILLA','174447@unsaac.edu.pe','P23','912556645','2020-I')
INSERT INTO TEstudiante VALUES ('171259','WIDMAR RAUL','QUISPE' ,'LEON','171259@unssaac.edu.pe','P24','912565555','2020-I')
INSERT INTO TEstudiante VALUES ('174914','LUIYI ANTONY','QUISPE', 'PALOMINO','174914@unsaac.edu.pe','P25','912556687','2020-I')
INSERT INTO TEstudiante VALUES ('171866','RONALDO','QUISPE', 'YAHUIRA','171866@unsaac.edu.pe','P26','912556654','2020-I')
INSERT INTO TEstudiante VALUES ('171570','EDGAR DANIEL','RAMOS' ,'ALVAREZ','171570@unsaac.edu.pe','P27','912456687','2020-I')
INSERT INTO TEstudiante VALUES ('171068','RUDY RODRIGO','RODRIGUEZ','HANCCO','171068@unsaac.edu.pe','P28','912455545','2020-I')
INSERT INTO TEstudiante VALUES ('124821','ETSON RONALDAO','ROJAS', 'CAHUANA','124821@unsaac.edu.pe','P29','912568756','2020-I')
INSERT INTO TEstudiante VALUES ('171805','CLAUDIA LUZ','ROJAS' ,'SOTO','171805@unsaac.edu.pe','P30','912567845','2020-I')
INSERT INTO TEstudiante VALUES ('174452','DANIEL EDUARDO','SARCO' ,'JACINTO','174452@unsaac.edu.pe','P31','984568755','2020-I')
INSERT INTO TEstudiante VALUES ('171070','MELANIE INDIRA','SULLCA' ,'PERALTA','171070@unsaac.edu.pe','P32','912456879','2020-I')
INSERT INTO TEstudiante VALUES ('150408','JHON EDWIN','TACUSI' ,'LAROTA','150408@unsaac.edu.pe','P33','988885652','2020-I')
INSERT INTO TEstudiante VALUES ('140998','CESAR RODRIGO','TTITO' ,'QUILCA','140998@unsaac.edu.pe','P34','988565523','2020-I')
INSERT INTO TEstudiante VALUES ('164249','ALEXANDER','TTITO' ,'SAYA','164249@unsaac.edu.pe','P35','988562322','2020-I')
INSERT INTO TEstudiante VALUES ('155183','JEREMYK RUFINO','VARGAS' ,'ARQQUE','155183@unsaac.edu.pe','P36','988895563','2020-I')
INSERT INTO TEstudiante VALUES ('140934','RONALDINHO','VEGA CENTENO', 'OLIVERA','140934@unsaac.edu.pe','P37','988562322','2020-I')
INSERT INTO TEstudiante VALUES ('174441','ALEX CHRISTOPHER','VILLAFUERTE' ,'TURPO','170441@unsaac.edu.pe','P38','984555633','2020-I')
INSERT INTO TEstudiante VALUES ('170441','RENO MAX','DEZA' ,'KACHA','170441@unsaac.edu.pe','P39','984522633','2020-I')
INSERT INTO TEstudiante VALUES ('161727','ENIT','MUÑOZ' ,'PACHECO','161727@unsaac.edu.pe','P40','984555113','2020-I')
INSERT INTO TEstudiante VALUES ('93160','CESAR','CHARA' ,'TACURI','93160@unsaac.edu.pe','P41','914555633','2020-I')
INSERT INTO TEstudiante VALUES ('161731','DAVID','SONCCO' ,'CACHURA','161731@unsaac.edu.pe','P42','984445633','2020-I')
INSERT INTO TEstudiante VALUES ('171058','ROSMEL URIEL','DEZA' ,'CONDORI','171058@unsaac.edu.pe','P43','984658758','2020-I')
go

use BDSistema_Tutorias
go
-- DATOS TABLA DOCENTE
INSERT INTO TDocente VALUES ( 'D000001','JOSE MAURO','PILLCO', 'QUISPE','45698745','ASOCIADO','916122333','Jose.Pillco@unsaac.edu.pe','D1','No')
INSERT INTO TDocente VALUES ( 'D000002','WILLIAN','ZAMALLOA' ,'PARO','45698745','AUXILIAR','916122333','Wlliam.Zamalloa@unsaac.edu.pe','D2','No')
INSERT INTO TDocente VALUES ( 'D000003','LINO PRISCILIANO','FLORES' ,'PACHECO','45698745','ASOCIADO','916122333','Lino.Flores@unsaac.edu.pe','D3','No')
INSERT INTO TDocente VALUES ( 'D000004','RONY','VILLAFUERTE', 'SERNA','45698745','ASOCIADO','916122333','Rony.Villafuerte@unsaac.edu.pe','D4','No')
INSERT INTO TDocente VALUES ( 'D000005','JOSE LUIS','SONCCO' ,'ALVAREZ','45698745','AUXILIAR','916122333','Jose.Soncco@unsaac.edu.pe','D5','No')
INSERT INTO TDocente VALUES ( 'D000006','VANESA MARIBEL','CHOQUE', 'SOTO','45698745','AUXILIAR','916122333','Vanessa.Choque@unsaac.edu.pe','D6','No')
INSERT INTO TDocente VALUES ( 'D000007','VICTOR DARIO','SOSA', 'JAUREGUI','45698745','AUXILIAR','916122333','Victor.Sosa@unsaac.edu.pe','D7','No')
INSERT INTO TDocente VALUES ( 'D000008','ROXANA LISETTE','QUINTANILLA' ,'PORTUGAL','45698745','AUXILIAR','916122333','Roxana.Quintanilla@unsaac.edu.pe','D8','No')
INSERT INTO TDocente VALUES ( 'D000009','LUIS BELTRAN','PALMA', 'TTITO','45698745','ASOCIADO','916122333','Luis.Palma@unsaac.edu.pe','D9','No')
INSERT INTO TDocente VALUES ( 'D000010','ROBERT','ALZAMORA' ,'PAREDES','45698745','ASOCIADO','916122333','Robert.Alzamora@unsaac.edu.pe','D10','No')
INSERT INTO TDocente VALUES ( 'D000011','EMILIO','PALOMINO' ,'OLIVERA','45698745','PRINCIPAL','916122333','Emilio.Palomino@unsaac.edu.pe','D11','No')
INSERT INTO TDocente VALUES ( 'D000012','WALDO ELIO','IBARRA', 'ZANBRANO','45698745','AUXILIAR','916122333','Waldo.Ibarra@unsaac.edu.pe','D12','No')
INSERT INTO TDocente VALUES ( 'D000013','IVAN CESAR','MEDRANO', 'VALENCIA','45698745','ASOCIADO','916122333','Ivan.Medrano@unsaac.edu.pe','D13','No')
INSERT INTO TDocente VALUES ( 'D000014','GUZMAN','TICONA','PARI','45698745','ASOCIADO','916122333','Guzman.Ticona@unsaac.edu.pe','D14','No')
INSERT INTO TDocente VALUES ( 'D000015','JAVIER ARTURO','ROZAS' ,'HUACHO','45698745','PRINCIPAL','916122333','Javier.Rozas@unsaac.edu.pe','D15','No')
INSERT INTO TDocente VALUES ( 'D000016','DAVID REYNALDO','BERRIOS', 'BARCENA','45698745','AUXILIAR','916122333','David.Berrios@unsaac.edu.pe','D16','No')
INSERT INTO TDocente VALUES ( 'D000017','LAURO','ENCISO', 'RODAS','45698745','PRINCIPAL','916122333','Lauro.Enciso@unsaac.edu.pe','D17','No')
INSERT INTO TDocente VALUES ( 'D000018','JULIO CESAR','CARBAJAL', 'LUNA','45698745','PRINCIPAL','916122333','Julio.Carbajal@unsaac.edu.pe','D18','No')
INSERT INTO TDocente VALUES ( 'D000019','DENNIS IVAN','CANDIA', 'OVIEDO','45698745','ASOCIADO','916122333','Dennis.Candia@unsaac.edu.pe','D19','No')
INSERT INTO TDocente VALUES ( 'D000020','KARELIA','MEDINA', 'MIRANDA','45698745','ASOCIADO','916122333','Karelia.Medina@unsaac.edu.pe','D20','No')
INSERT INTO TDocente VALUES ( 'D000021','JAVIER DAVID','CHAVEZ', 'CENTENO','45698745','ASOCIADO','916122333','Javier.Chavez@unsaac.edu.pe','D21','No')
go