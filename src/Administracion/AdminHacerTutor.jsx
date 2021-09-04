import React from 'react'
import AdminBar from '../Administracion/AdminBar'
import {Col,Row} from 'react-bootstrap'
import '../styles/AdminHacerTutor.css'
const AdminHacerTutor = () => {
    return (
        <div>
            <AdminBar nombrePage={"Hacer tutor"}/>
            <div className="contenido">
                <div className="Principal2">
                    <div className="cont">
                        <h5>Lista de docentes :</h5>
                        <div className="TablaHacerTutor">
                            <div className="col tableScrollHacerTutor scrollHacerTutor"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead>
                                            <tr>
                                                <th>Nro</th>
                                                <th>Curso</th>
                                                <th>Estudiante</th>
                                                <th>Detalles</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <button className="btnGua"> Guardar</button>
                    <br />
                    <br />
                    
                    <Row>
                        <Col className="col-2">
                            <b>Buscar :</b>
                        </Col>
                        <Col className="col-8">
                            <input className="inpuT" type="text" />
                        </Col>
                        <Col className="col-2">
                        <button className="btnG"> Buscar</button>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <Row>
                        <Col className="col-1">
                            <b>Nombre :</b>
                        </Col>
                        <Col className="col-4">
                            <label htmlFor=""> nombre usuario</label>
                        </Col>
                        <Col className="col-1">
                            <b>Estado :</b>
                        </Col>
                        <Col className="col-4">
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                        <Col className="col-2">
                        <button className="btnG"> Guardar</button>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHacerTutor
