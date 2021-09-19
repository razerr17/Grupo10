import React from 'react'
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import * as MdIcons from "react-icons/md"
import * as CgIcons from "react-icons/cg"
import * as GiIcons from "react-icons/gi"
import * as AiIcons from "react-icons/ai"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import '../styles/TutoradosBar.css'
const AdminBar=(props)=>{
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
                <Link className="link" to="/LoginAdministracion" style={{ textDecoration: 'none' }} onClick={()=>cerrarSesion()} for="check">
                 <b>cerrar sesion</b>
                </Link>
            </div>
            <div className="sidebar" style={{backgroundColor:'#000a25'}}>
                <div className="cabecera">
                    <img className="carrera" src="../logo.png" alt="" />
                    
                    <h6 className="label">Tutorias</h6>
                    
                </div>
             
                <div className="perfilContenedor">
                    <img className="perfil" src="../imagenes/admin.png" alt="" />      
    
                </div>
                <Link to="/Admin_Menu"  style={{ textDecoration: 'none',color:'white' }} title="Inicio"><  RiIcons.RiNotification3Fill style={{color:'orange'}}className="iconobar"/><span>Notificaciones</span></Link>
                <Link to="/Admin_Horarios"  style={{ textDecoration: 'none' ,color:'white'}} title="Horarios"><BsIcons.BsTable style={{color:'orange'}}className="iconobar"/><span>Horarios de tutoria</span></Link>
                <Link to="/Admin_Docentes_Tutores" style={{ textDecoration: 'none',color:'white' }} title="Tutor Asignado"><GiIcons.GiTeacher style={{color:'orange'}}className="iconobar"/><span>Docentes tutores</span></Link>
                <Link to="/Admin_Ayudantes" style={{ textDecoration: 'none',color:'white' }} title="Tutor Asignado"><FaIcons.FaChalkboardTeacher style={{color:'orange'}}className="iconobar"/><span>Ayudantes de tutoria</span></Link>
                <Link to="/Admin_Estudiantes_Riesgo" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><BsIcons.BsFillPersonDashFill style={{color:'orange'}}className="iconobar"/><span>Estudiantes en riesgo</span></Link>
                <Link to="/Admin_Consultar_Informes" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><CgIcons.CgPlayListSearch style={{color:'orange'}}className="iconobar"/><span>Consultar informes</span></Link>
                <Link to="/Admin_Crear_Notificacion" style={{ textDecoration: 'none' ,color:'white'}} title="Estudiantes Asignado"><MdIcons.MdAddAlert style={{color:'orange'}}className="iconobar"/><span>Crear Notificacion </span></Link>
                
                <Link to="/Admin_Asignar_Tutor" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><AiIcons.AiOutlineUserSwitch style={{color:'orange'}} className="iconobar"/><span>Asignar tutor</span></Link>

                <div className="linkEstudiantes">
                      <Link to="/Admin_Estudiantes" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><FaIcons.FaUserFriends  style={{color:'orange'}}className="iconobar"/><span>Estudiantes</span></Link>
                </div>
                <div className="linkDocentes">
                      <Link to="/Admin_Docentes" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><FaIcons.FaUserTie  style={{color:'orange'}}className="iconobar"/><span>Docentes</span></Link>
                </div>
                <div className="linkPerfil">
                      <Link to="/Admin_Perfil" style={{ textDecoration: 'none',color:'white' }} title="Estudiantes Asignado"><BsIcons.BsPersonSquare  style={{color:'orange'}}className="iconobar"/><span>Perfil</span></Link>
                </div> 
            </div>    
                  
        </div>
    )
}

export default AdminBar
