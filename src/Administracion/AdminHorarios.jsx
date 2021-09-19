import React from 'react'
import AdminBar from '../Administracion/AdminBar'
import '../styles/AdminHorarios.css'
import {Row,Col} from "react-bootstrap"
const AdminHorarios = () => {
    return (
        <div>
            <AdminBar nombrePage={"Horarios de tutoria"}/>
            <div className="contenido">
                <div className="Principal2">
                   <div className="horaTop">
                       <Row>
                            <Col className="col-1">
                                <b>Tutor : </b>
                            </Col>
                            <Col className="col-5">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col className="col-1">
                                <b>Semestre :</b>
                            </Col>
                            <Col className="col-5">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                       </Row>
                       <Row className="mt-4">
                           <Col>
                                <div>
                                    <b>Horarios de Tutoria : </b>
                                </div>

                                <div>
                                    <textarea className="inputHor" type="text" />
                                </div>
                                <button className="btnDelete"><b>Eliminar</b></button>
                           </Col>
                           <Col>
                                <div>
                                    <b>Lugar meet:</b>
                                </div>
                                <div>
                                    <textarea className="inputHor" type="text" />
                                </div>
                                <button className="btnGuar"><b>Guardar</b></button>
                           </Col>
                       </Row>
                       <div className="Tabla">
                       <div className="col tableScroll scro"> 
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
                   </div>
                  
                </div>
            </div>
        </div>
    )
}

export default AdminHorarios
