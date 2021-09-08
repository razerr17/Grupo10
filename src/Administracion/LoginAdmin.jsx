import React from 'react'
import { Link } from 'react-router-dom'
import * as ImIcons from "react-icons/im"
import '../styles/LoginTutorados.css'
const LoginAdmin = ()=>{
    return (
        <div className="fondoLog1 ">
            <div className="regresar">
                    <Link to="/LogMenu" style={{ textDecoration: 'none' }}>
                        <ImIcons.ImCross className="icono"/>
                    </Link>
                </div>
            <br />
            <div className="Principal">  
                <div className="containerLogin">
                    <h2 className="title">Administracion</h2>
                    <img className="lo"src="../imagenes/Tutor.JPG" alt=""/>
                    <div className="form-group">
                        <label><b>Ingrese Usuario:</b> </label>
                        <br />
                        <input
                        type="text"
                        className="form-control"
                        name="username"         
                        placeholder="Usuario"
                        />
                        <br />
                        <label> <b>Ingrese Contraseña:</b>  </label>
                        <br />
                        <input
                        type="password"
                        className="form-control"
                        name="password"          
                        placeholder="*********"
                        />
                        <br />
                        <Link to="/Admin_Menu" style={{ textDecoration: 'none' }}>
                            <button className="ingresar" >Iniciar Sesión</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin
