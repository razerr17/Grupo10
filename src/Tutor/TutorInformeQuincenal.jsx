import React from 'react'
import Tutorbar from '../Tutor/Tutorbar'
import '../styles/TutorInformeQuincenal.css'
import { Col,Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
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
const TutorInformeQuincenal = () => {
    const classes = useStyles();
    return (
        <div>
            <Tutorbar nombrePage={"Informe Quincenal"}/>
            <div className="contenido">
                <div className="Principal2">
                    <div className="dropwdowns">
                        <Row>
                            <Col className="col-2">
                                <h4>Tutorando :</h4>
                            </Col>
                            <Col className="col-4">
                                 <select class="form-select form-select mb-3" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                             
                            </Col>
                            <Col className="col-2">
                                <h4>Semestre :</h4>
                            </Col>
                            <Col className="col-4">
                            <select class="form-select form-select mb-3">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                               
                            </Col>
                        </Row>
                    </div>
                    <div className="AsistenciaPart">
                        <Col>
                            <Row>
                                <h5 className="h5">Asistencia-Reuniones Programadas :</h5>
                            </Row>
                            <Row>
                                <Col className="d-flex"> 
                                   <b>Fecha :</b>
                                   <div>
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
                                   </div>
                                </Col>
                                <Col className="d-flex">
                                    <b>Asistencia :</b>
                                    <b className="switchlbl"> No asistió   </b>
                                    <div class="form-check form-switch">
                                    
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                    
                                    </div>
                                    <b> Asistió   </b>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12">
                                <div class="mt-2">
                                <b>Descripción: </b>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                </Col>
                            </Row>
                            
                        </Col>
                        <div className="col scroll scrollBar"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead style={{backgroundColor:'#85b7e9'}}>
                                            <tr>
                                                <th>Nro</th>
                                                <th>Curso</th>
                                                <th>Estudiante</th>
                                                <th>Detalles</th>
                                                
                                            </tr>
                                        </thead >
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
                    <div className="ResumenPart">                        
                    <div class="mt-1">
                    <h6>Resumen de Reuniones:</h6>                   
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                    <div class="mt-3">
                    <h6>Dificultades :</h6>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <button className="btnEnviarQuince"><b>Enviar</b></button>
                    </div>
                    
                    
                  
                </div>
            </div>
        </div>
    )
}

export default TutorInformeQuincenal