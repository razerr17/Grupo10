import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/LogMenu.css'
const log_menu = () => {
    return (
        <div className="fondo">
            
            <div>
                <div className='bar'>
                      <h1 className="h1"> SISTEMA DE TUTORIAS</h1>
                </div>
                <div className ="log">
                    <img className="logo"src="../logo.png" alt="" />
                </div>
            </div>
            <div className="logins">
                <Row>
                    <Col>
                        <div className="tarjeta1">
                           <Col className="columnas">
                                <div>
                                    <img  src="../imagenes/Tutorado.JPG" alt="" />
                                </div>
                                <div >
                                    <h2>Tutorados</h2>
                                </div>
                                <div>
                                    <Link to="/LoginTutorados" style={{ textDecoration: 'none' }}>
                                        <button className="btna" >
                                            Ingresar
                                        </button>
                                    </Link>
                                </div>
                           </Col>
                        </div>
                        
                    </Col>
                    <Col>
                        <div className="tarjeta1">
                            <Col className="columnas">
                                        <div>
                                            <img  src="../imagenes/Tutor.JPG" alt="" />
                                        </div>
                                        <div >
                                            <h2>Tutor</h2>
                                        </div>
                                        <div>
                                            <Link to="/LoginTutor" style={{ textDecoration: 'none' }}>
                                                <button className="btna" >
                                                    Ingresar
                                                </button>
                                            </Link>
                                        </div>
                            </Col>
                        </div>
                    </Col>
                        <Col>
                            <div className="tarjeta1">
                                    <Col className="columnas">
                                            <div>
                                                <img  src="../imagenes/Administracion.JPG" alt="" />
                                            </div>
                                            <div >
                                                <h2>Administracion</h2>
                                            </div>
                                            <div>
                                                <Link to="/LoginAdministracion" style={{ textDecoration: 'none' }}>
                                                    <button className="btna" >
                                                        Ingresar
                                                    </button>
                                                </Link>
                                            </div>
                                    </Col>
                            </div>
                    </Col>
                </Row>
                
            </div>
           
        </div>
    )
}

export default log_menu
