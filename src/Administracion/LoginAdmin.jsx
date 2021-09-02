import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import * as ImIcons from "react-icons/im"
import {useState} from 'react';
import '../styles/LoginTutorados.css'
const LoginAdmin = ()=>{
    const [mostrar,setMostrar]=useState(false)
    const CambiarMostrar = () => setMostrar(!mostrar);
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
                    <hr />
                    <div className="form">
                        <label><b>Ingrese Usuario:</b> </label>
                        <input type="text" className="form-control" name="username" placeholder="Usuario"/>
                        <br />
                        <label> <b>Ingrese Contraseña:</b>  </label>
                        <br />
                        <input
                        type={mostrar ? 'text' : 'password'}
                        className="form-control"
                        name="password"          
                        placeholder={mostrar ? 'ingrese aqui' : '****************'}
                        />
                        <Row>
                            <Col className="col-2 ">
                                <input  clasName="inputM" type="checkbox" onChange={CambiarMostrar}/>
                            </Col>
                            <Col className="col-5">
                               <p className="fst-italic">mostrar contraseña</p> 
                            </Col>
                        </Row>
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
