import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as GiIcons from "react-icons/gi"
import * as IoIcons from "react-icons/io"
import * as CgIcons from "react-icons/cg"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import '../styles/TutoradosBar.css'
const TutoradoBar = (props) => {
    const baseUrl=`http://localhost:4000/FotoPerfil`;
    const[direccionUrl,setDireccionUrl]=useState([{
        Foto:"./imagenes/carga.gif"
    
    }])
    const peticionGet=async()=>{
        await axios.get(baseUrl+`/${cookie.get('Email')}`)
      .then(response=>{
        setDireccionUrl(response.data);
        
      }).catch(error=>{
        console.log(error);
      })
    }
    useEffect(()=>{
        peticionGet();
      })
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
             
            <div className="encabezado ">
               
                <label className="nombre" for="check">
                <h5>Bienvenido : {cookie.get('Nombres')}</h5>
                </label>
                <label className="lblNombre"><b>{nombrePage}</b></label>
                <Link className="link" to="/LoginTutorados" onClick={()=>cerrarSesion()}style={{ textDecoration: 'none' }} for="check">
                    <b>cerrar sesion</b>
                </Link>
            </div>
            <div className="sidebar">
                <div className="cabecera">
                    <img className="carrera" src="../logo.png" alt="" />
                    <h6 className="label">Tutorias</h6>
                </div>
                <div className="perfilContenedor">
                <img className="perfil" src={direccionUrl[0].Foto} alt="" />      
                </div>
                <Link to="/Tutorado_Menu"  style={{ textDecoration: 'none' }} title="Inicio"><IoIcons.IoIosHome className="iconobar"/><span>Inicio</span></Link>
                <Link to="/Tutorado_Horarios"  style={{ textDecoration: 'none' }} title="Horarios"><BsIcons.BsFillCalendarFill className="iconobar"/><span>Horarios</span></Link>
                <Link to="/Tutorado_TutorAsignado" style={{ textDecoration: 'none' }} title="Tutor Asignado"><FaIcons.FaChalkboardTeacher className="iconobar"/><span>Tutor Asignado</span></Link>
                <Link to="/Tutorado_EstudianteAsignado" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><GiIcons.GiTeacher className="iconobar"/><span>Estudiante Asignado</span></Link>
                <div className="linkPerfil">
                  <Link to="/Tutorado_Perfil" style={{ textDecoration: 'none' }} title="Estudiantes Asignado"><CgIcons.CgProfile className="iconobar"/><span>Perfil</span></Link>
                </div>
            </div>            
        </div>
    )
}

export default TutoradoBar
