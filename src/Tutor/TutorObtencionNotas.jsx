import React from 'react'
import Tutorbar from '../Tutor/Tutorbar'
import '../styles/TutorObtencionNotas.css'

import {Row,Col} from 'react-bootstrap'
const TutorObtencionNotas = () => {
    return (
        <div>
            <Tutorbar  nombrePage={"Obtención de notas"}/>
            <div className="contenido">
                <div className="Principal2">
                   <div className="obtencionTop">
                        <h4>Datos estudiante</h4>
                        <br></br>
                            <Row>
                                <Col className="col-1">
                                <b>Codigo : </b>
                                </Col>
                                <Col className="col-2">
                                    <input className="inputLarge" type="text" />
                                </Col>
                                <Col className="col-4">
                                    <button className="btnSe"><b>Buscar</b></button>
                                </Col>
                            </Row>
                        <div>
                            <label htmlFor=""><b>Alumno : </b>  </label>

                        </div>
                   </div>
                   <div className="obtencionBot">
                        <h4>Notas de cursos : </h4>                        
                                <div className="CardAsig">
                                    <div className="toplbl">
                                        <Row>
                                            <Col className="col-10">
                                                <b>Asignatura</b>
                                            </Col>
                                            <Col className="col-2">
                                                <b>Nota</b>
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                    <div>

                                        <Row className="">
                                            <Col className="col-10">
                                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                            <Col className="col-2">
                                                <input className="inputNota" type="text" />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="CardAsig">
                                    <div className="toplbl">
                                        <Row>
                                            <Col className="col-10">
                                                <b>Asignatura</b>
                                            </Col>
                                            <Col className="col-2">
                                                <b>Nota</b>
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                    <div>

                                        <Row className="">
                                            <Col className="col-10">
                                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                            <Col className="col-2">
                                                <input className="inputNota" type="text" />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                        <button className="btnAgre">
                            <div className="iconoAdd">
                                <b>+</b>
                            </div>
                        </button>

                   </div>
                   <button className="btnGua">
                       <b>Guardar</b>
                   </button>
                </div>
            </div>
        </div>
    )
}

export default TutorObtencionNotas
