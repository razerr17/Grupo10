import React,{useState} from 'react'
import '../styles/TutorSesionTutorias.css'
import {Col,Row} from 'react-bootstrap'
import Tutorbar from '../Tutor/Tutorbar'
import { makeStyles } from '@material-ui/core/styles';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: theme.spacing(5),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
const TutorSesionTutorias = () => {
    const classes = useStyles();
    const[modalInsertar,setModalInsertar]=useState(false);
    const abrirCerrarModalInsertar=()=>{
        
        setModalInsertar(!modalInsertar);
      }
    return (
        <div>
            <Tutorbar nombrePage={"Sesion de tutoria"}/>
            <div className="contenido">
                <div className="Principal2">
                    <br />
                    <div className="STtop">
                        <Row className="mt-4">
                            <Col className="col-2">
                                <b>Semestre : </b>
                            </Col>
                            <Col className="col-3">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                
                            </Col>
                            <Col className="col-2">
                                <b>Tutorado : </b>
                            </Col>
                            <Col className="col-4">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                        </Row>
                    </div>
                    <div className="STbot">
                        Tabla aqui c:
                    </div>
                    <div className="ContainerSTbtn">
                            <button onClick={()=>abrirCerrarModalInsertar()} className="btnSTSave"><b>Nueva Sesion</b></button>
                        </div>
                </div>
            </div>
            <Modal
            isOpen={modalInsertar}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
               
                <ModalHeader>Agregar nueva sesion</ModalHeader>
                
                <ModalBody>
                    <Col>
                            <Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col className="col-4">
                                                <h6>Id Sesion :</h6>
                                            </Col>
                                            <Col className="col-5">
                                                <input className="inputLarge bg-Secondary" type="text" />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col className="col-5">
                                                <h6>IdFichaTutoria :</h6>
                                            </Col>
                                            <Col className="col-6">
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                
                                <Row className="mt-2">
                                    <Col className="col-2">
                                                <h6>Fecha :</h6>
                                    </Col>
                                    <Col className="col-4">
                                        <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"                                            
                                           type="date"
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                             }}
                                            />
                                        </form>
                                    </Col>
                                    <Col className="col-2">
                                                <h6>Tipo tutoria :</h6>
                                        </Col>
                                    <Col className="col-4">
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                            <label for="exampleFormControlTextarea1" class="form-label"><b>Descripcion :</b></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </Row>
                            <Row>
                            <label for="exampleFormControlTextarea1" class="form-label"><b>Referencia :</b></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </Row>
                            <Row>
                            <label for="exampleFormControlTextarea1" class="form-label"><b>Observaciones :</b></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </Row>
                            
                        </Col>
                </ModalBody>
                <ModalFooter>
                        <button className="btnColoG" >Insertar</button>{""}
                        <button className="btnColoC " onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default TutorSesionTutorias
