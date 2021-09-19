import React from 'react'
import * as BsIcons from "react-icons/bs"
import * as ImIcons from "react-icons/im"
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import * as IoIcons from "react-icons/io"
import * as HiIcons from "react-icons/hi"
import Cookies from 'universal-cookie'
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import '../styles/TutoradosBar.css'
const TutoradoBar = (props) => {
   const {nombrePage}=props;
   const cookie=new Cookies()
    const cerrarSesion=()=>{
        cookie.remove('CodDocente',{path:'/'});
        cookie.remove('Nombres',{path:'/'});
        cookie.remove('ApPaterno',{path:'/'});
        cookie.remove('ApMaterno',{path:'/'});
        cookie.remove('DNI',{path:'/'});
        cookie.remove('Categoria',{path:'/'});
        cookie.remove('Celular',{path:'/'});
        cookie.remove('Email',{path:'/'});
        cookie.remove('Direccion',{path:'/'});
        cookie.remove('Estutor',{path:'/'});
        
    }
    return(
        <div className="all">
            
            <div className="encabezado " style={{backgroundColor:'#fde052'}}>
               
                <label className="nombre" for="check">
                    <h5>Bienvenido : {cookie.get('Nombres')}</h5>
                </label>
                <label className="lblNombre"><b>{nombrePage}</b></label>
                <Link className="link" to="/LoginTutor" style={{ textDecoration: 'none' }} onClick={()=>cerrarSesion()} for="check">
                    <b>cerrar sesion</b>
                </Link>
            </div>
            <div className="sidebar" style={{backgroundColor:'#000a25'}}>
                <div className="cabecera">
                    <img className="carrera" src="../logo.png" alt="" />
                    <h6 className="label">Tutorias</h6>
                </div>
                <div className="perfilContenedor" >
                    <img className="perfil" src="../imagenes/PerfilTutor.JPG" alt="" />      
    
                </div>
                <Link to="/Tutor_Menu"  style={{ textDecoration: 'none' ,color:'white'}} title="Inicio"><  IoIcons.IoIosHome style={{color:'orange'}} className="iconobar"/><span>Inicio</span></Link>
                <Link to="/Tutor_Estudiantes_a_cargo"  style={{ textDecoration: 'none' ,color:'white'}} title="Horarios"><RiIcons.RiUserSearchLine style={{color:'orange'}}className="iconobar"/><span>Estudiantes a cargo</span></Link>
                <Link to="/Tutor_Estudiantes_Ayudantes" style={{ textDecoration: 'none',color:'white' }} title="Tutor Asignado"><RiIcons.RiUserHeartLine style={{color:'orange'}}className="iconobar"/><span>Estudiantes Ayudantes</span></Link>
                <Link to="/Tutor_Informe_Quincenal" style={{ textDecoration: 'none' ,color:'white'}} title="Tutor Asignado"><BsIcons.BsClipboardData style={{color:'orange'}}className="iconobar"/><span>Informe quincenal</span></Link>
                <Link to="/Tutor_Informe_Semestral" style={{ textDecoration: 'none' ,color:'white'}} title="Estudiantes Asignado"><FaIcons.FaClipboardList style={{color:'orange'}} className="iconobar"/><span>Informe semestral</span></Link>
                <Link to="/Tutor_Registrar_Ficha_Tutoria" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><ImIcons.ImClipboard style={{color:'orange'}} className="iconobar"/><span>Registrar ficha de tutoria </span></Link>
                <Link to="/Tutor_Sesion_Tutoria" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><AiIcons.AiOutlineContainer style={{color:'orange'}} className="iconobar"/><span>Sesiones de tutoria</span></Link>
                <Link to="/Tutor_Obtencion_Notas" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><HiIcons.HiOutlineClipboardCopy style={{color:'orange'}} className="iconobar"/><span>Obtencion de notas </span></Link>
                <div className="linkPerfil">
                  <Link to="/Tutor_Perfil" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><BsIcons.BsPersonSquare  style={{color:'orange'}} className="iconobar"/><span>Perfil</span></Link>
                </div>
            </div>    
                  
        </div>
    )
}

export default TutoradoBar
