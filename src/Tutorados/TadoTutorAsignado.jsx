import React from 'react'
import TutoradoBar from './TutoradoBar'
import '../styles/TadoTutorAsignado.css'
import { Col ,Row} from 'react-bootstrap'
const TadoTutorAsignado = () => {
    return (
        <div>
            <TutoradoBar/>
            <div className="contenido">
                <div className="Principal2">
                    <label className="lblTuAsignado"><b>Datos del Tutor :</b></label>
                    <div className="partTopTutor">
                    <Row className="">
                                <Col className="col-5 ">
                                    <div className="celda">
                                        <label htmlFor=""><b>Nombres :  </b></label>
                                        <label className="lblda">  EDGAR DANIEL</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Apellidos :  </b></label>
                                        <label className="lblda"> RAMOS ALVAREZ</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Email :  </b></label>
                                        <label className="lblda">171812@unsaac.edu.pe</label>
                                    </div>
                                </Col>
                                <Col className="col-7">
                                    <div className="celda">
                                        <label htmlFor=""><b>Direccion:  </b></label>
                                        <label className="lblda">  MICAELA BASTIDAS 221 - SANTIAGO</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Celular :  </b></label>
                                        <label className="lblda">  987654321</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Asignatura :  </b></label>
                                        <label className="lblda"> Ingenieria de Software</label>
                                    </div>
                                </Col>
                            </Row>
                 
                        <img className="cardImagenPerfil" src="../imagenes/PerfilTutor.JPG" alt="" />
                    </div>
                    <label className="lblTuAsignado"><b>Solicitar Cambio de Tutor :</b></label>
                    <div className="partBotTutor">
                        <div className="cardDatosTutor">
                            <div class="input-group " >
                                <span class="input-group-text">Ingrese el motivo :</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div> 
                        </div>
                    </div>
                    <div >
                        <button className="btnCambiarTutor"><b>Enviar</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default TadoTutorAsignado
