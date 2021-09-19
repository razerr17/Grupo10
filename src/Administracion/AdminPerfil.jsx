import React ,{useState,useEffect}from 'react'
import AdminBar from '../Administracion/AdminBar'
import { Col ,Row} from 'react-bootstrap'
import * as BiIcons from "react-icons/bi"
import Cookies from 'universal-cookie'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
const AdminPerfil = (props) => {
    const[modalInsertar,setModalInsertar]=useState(false);
    const abrirCerrarModalInsertar=()=>{
        setModalInsertar(!modalInsertar);
      }
    const cookie =new Cookies();
    useEffect(()=>{
        if(!cookie.get('CodDocente')){
            props.history.push('/LoginAdministracion');
        }
    })
    return (
        <div>
            <AdminBar nombrePage={"Perfil"}/>
            <div className="contenido">
                    <div className="Principal2 ">
                        <img className="portada"src="./imagenes/FondoTadoPerfil.JPG" alt="" />
                        <img className="sizephoto" src="./imagenes/admin.png" alt="" />
                        <div className ="contDatos">
                            <label className="lbldatos" htmlFor=""><b>Datos Personales :</b></label>
                            <Row className=" position-relative">
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Nombres :  </b></label>
                                        <label className="lbldat">  {cookie.get('Nombres')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Apellidos :  </b></label>
                                        <label className="lbldat"> {cookie.get('ApPaterno')+" "+cookie.get('ApMaterno')}</label>
                                    </div>
                                     <div>
                                        <label htmlFor=""><b>DNI :  </b></label>
                                        <label className="lbldat"> {cookie.get('DNI')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Categoria :  </b></label>
                                        <label className="lbldat"> {cookie.get('Categoria')}</label>
                                    </div>
                                </Col>
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Celular :  </b></label>
                                        <label className="lbldat"> {cookie.get('Celular')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Email :  </b></label>
                                        <label className="lbldat"> {cookie.get('Email')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Direccion :  </b></label>
                                        <label className="lbldat"> {cookie.get('Direccion')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Es tutor :  </b></label>
                                        <label className="lbldat"> {cookie.get('Estutor')}</label>
                                    </div>

                                </Col>
                            </Row>
                            <button onClick={()=>abrirCerrarModalInsertar()} className="btnEditar">
                                Editar
                                <BiIcons.BiEdit className="iconSave"/>
                            </button>
                        </div>
                    </div>
                    <Modal isOpen={modalInsertar} size="lg">
                    <ModalHeader>Insertar docente de base de datos</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                            <br/> 
                            <input type="text" className="form-control" name="IDEstudiante" />
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input type="text" className="form-control" name="Nombres" />
                            <br/>
                            <label>DNI: </label>
                            <br/>
                            <input type="text" className="form-control" name="dni" />
                            <br/>
                            </Col>
                            <Col>
                            
                            <label>Correo: </label>
                            <br/> 
                            <input type="email" className="form-control" name="correo" />
                            <br/>       
                            <label>Celular :</label>
                            <br />
                            <input type="text" className="form-control" name="telefono" />
                            <br/>
                            <label htmlFor="">Direccion</label>
                            <input type="text" className="form-control" name="direccion"/>
                            </Col>
                        </Row>
                                         
                              
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button style={{backgroundColor:'#000a25',color:'white'}} className="btnColoG" >Insertar</button>{""}
                    <button style={{backgroundColor:'#000a25',color:'white'}} className="btnColoC " onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default AdminPerfil
