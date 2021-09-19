import React from 'react'
import AdminBar from '../Administracion/AdminBar'
import '../styles/AdminCrearNotifi.css'
import {Col,Row} from 'react-bootstrap'
const AdminCrearNotifi = () => {
    return (
        <div>
            <AdminBar nombrePage={"Crear Notificaciones"}/>
            <div className="contenido">
                <div className="Principal2">
                    <div className="cont"> 
                        <h4>Seleccione tipo de notificacion : </h4>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                 <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <form className="frmNot" action="">
                                <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"><b>Asunto :</b></label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                 <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"><b>Destinatario :</b></label>
                                    <Row>
                                        <Col className="col-3">
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </Col>
                                        <Col className="col-9">
                                            <input type="email" class="form-control" id="exampleFormControlInput1" />
                                        </Col>
                                    </Row>
                                    
                                    </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"><b>Descripcion :</b></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                                </div>
                                <button  style={{backgroundColor:'#000a25',color:'white'}}
                                className="btnSend">
                                    Enviar
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCrearNotifi
