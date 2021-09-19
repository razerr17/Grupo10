import React from 'react'
import TutoradoBar from './TutoradoBar'
import '../styles/TadoEstudianteAsignado.css'
import { Col ,Row} from 'react-bootstrap'
const TadoEstudianteAsignado = () => {
    return (
        <div>
            <TutoradoBar/>
            <div className="contenido">
                <div className=" Principal2">

                    <label className="lbltop"><b>Lista De Estudiantes Ayudantes :</b></label>
                   <div className="partTop">
                   <div className="col table-wrapper-scroll-y my-custom-scrollbar"> 
                                <table className="table table-bordered bg-light ">
                                    <thead className="bg-warning">
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

                                    </tbody>
                                </table>
                            </div>
                   </div>
                   <div className="partBot">
                       <label className="lblDatosAyudante"><b>Datos del Estudiante Ayudante :</b></label>
                       <img className="perfilAyudante" src="../imagenes/PerfilAyudante.JPG" alt="" />
                       <div className="datosAyudante">
                          <Row>
                              <Col className="col-5">
                                <div>
                                  <label htmlFor=""><b>Nombres :  </b></label>
                                    <label className="lblda">  EDGAR DANIEL</label>
                                </div>
                                <div>
                                    <label htmlFor=""><b>Apellidos :  </b></label>
                                    <label className="lblda"> RAMOS ALVAREZ</label>
                                </div>
                                <div>
                                    <label htmlFor=""><b>Email :  </b></label>
                                    <label className="lblda">171812@unsaac.edu.pe</label>
                                </div>
                              </Col>
                              <Col className="col-7">
                                <div>
                                    <label htmlFor=""><b>Direccion:  </b></label>
                                    <label className="lblda">  MICAELA BASTIDAS 221 - SANTIAGO</label>
                                </div>
                                <div>
                                    <label htmlFor=""><b>Celular :  </b></label>
                                    <label className="lblda">  987654321</label>
                                </div>
                                <div>
                                    <label htmlFor=""><b>Asignatura :  </b></label>
                                    <label className="lblda"> Ingenieria de Software</label>
                                </div>
                              </Col>
                          </Row>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default TadoEstudianteAsignado
