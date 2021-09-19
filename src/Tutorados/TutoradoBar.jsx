import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as GiIcons from "react-icons/gi"
import * as IoIcons from "react-icons/io"
import * as CgIcons from "react-icons/cg"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import '../styles/TutoradosBar.css'
const TutoradoBar = (props) => {
    const {nombrePage}=props;
    const cookie=new Cookies()
    const cerrarSesion=()=>{
        cookie.remove('CodEstudiante',{path:'/'});
        cookie.remove('Nombres',{path:'/'});
        cookie.remove('ApPaterno',{path:'/'});
        cookie.remove('ApMaterno',{path:'/'});
        cookie.remove('Celular',{path:'/'});
        cookie.remove('Email',{path:'/'});
        cookie.remove('Direccion',{path:'/'});
        cookie.remove('SemestreIngreso',{path:'/'});
        
    }
    return(
        <div className="all">
             
            <div className="encabezado " style={{backgroundColor:'#fde052'}}>
               
                <label className="nombre" for="check">
                <h5>Bienvenido : {cookie.get('Nombres')}</h5>
                </label>
                <label className="lblNombre"><b>{nombrePage}</b></label>
                <Link className="link" to="/LoginTutorados" onClick={()=>cerrarSesion()}style={{ textDecoration: 'none' }} for="check">
                    <b>cerrar sesion</b>
                </Link>
            </div>
            <div className="sidebar" style={{backgroundColor:'#000a25'}}>
                <div className="cabecera">
                    <img className="carrera" src="../logo.png" alt="" />
                    <h6 className="label">Tutorias</h6>
                </div>
                <div className="perfilContenedor">
                    <img className="perfil" src="../imagenes/PerfilPrueba.JPG" alt="" />      
                </div>
                <Link to="/Tutorado_Menu"  style={{ textDecoration: 'none',color:'white' }} title="Inicio"><IoIcons.IoIosHome style={{color:'orange'}} className="iconobar"/><span>Inicio</span></Link>
                <Link to="/Tutorado_Horarios"  style={{ textDecoration: 'none',color:'white' }} title="Horarios"><BsIcons.BsFillCalendarFill style={{color:'orange'}}className="iconobar"/><span>Horarios</span></Link>
                <Link to="/Tutorado_TutorAsignado" style={{ textDecoration: 'none',color:'white' }} title="Tutor Asignado"><FaIcons.FaChalkboardTeacher style={{color:'orange'}}className="iconobar"/><span>Tutor Asignado</span></Link>
                <Link to="/Tutorado_EstudianteAsignado" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><GiIcons.GiTeacher style={{color:'orange'}}className="iconobar"/><span>Estudiante Asignado</span></Link>
                <div className="linkPerfil">
                  <Link to="/Tutorado_Perfil" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><CgIcons.CgProfile style={{color:'orange'}}className="iconobar"/><span>Perfil</span></Link>
                </div>
            </div>            
        </div>
    )
}

export default TutoradoBar
