import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/TutorSesionTutorias.css";
import { Col, Row } from "react-bootstrap";
import Tutorbar from "../Tutor/Tutorbar";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Cookies from "universal-cookie";
import axios from "axios";
import * as ImIcons from "react-icons/im"

var moment = require('moment');

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing(5),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const TutorSesionTutorias = (props) => {
  const cookie = new Cookies();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [sesiones, setSesiones] = useState([]);
  const [idFichaTutoria, setIdFichaTutoria] = useState("");
  const [semestre, setSemestre] = useState([]);
  const [fecha, setFecha] = useState("");
  const [tipoTutoria, setTipoTutoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [codDocente, setCodDocente] = useState(cookie.get("CodDocente"));
  const [modalInsertar, setModalInsertar] = useState(false);
  const [mostrar,setMostrar]=useState(false);
  const abrirCerrarMostrar=()=>{setMostrar(!mostrar)}
  const[warningView,setWarningview]=useState(false);
  const url=`https://backendtutorias.herokuapp.com/Conf/Observacion`
  const getInfo=async(ses,index)=>{
    await axios.get(url+`/${ses}`)
    .then(response=>{
      return response.data;
    }).then(response=>{
            if(response.length>0){
               abrirCerrarMostrar()
               if(mostrar){
                document.getElementById("inputmal"+index).value="******************-"
                document.getElementById("btnVerDatos"+index).innerText="Ver datos privados"
               }
               else{
                document.getElementById("inputmal"+index).value=response[0].Observacion
                document.getElementById("btnVerDatos"+index).innerText="Ocultar datos"
               }
            }
            else{
              abrirCerrarMostrar()
              if(mostrar){
                document.getElementById("inputmal"+index).value="******************"
                document.getElementById("btnVerDatos"+index).innerText="Ver datos privados"
               }
               else{
                document.getElementById("inputmal"+index).value="SU TUTORADO NO LE DIO ACCESO A ESTA INFORMACION"
                document.getElementById("btnVerDatos"+index).innerText="Ocultar datos "
               }
              
            }
        })
    .catch(error=>{
      console.log(error);
    })
  }
  const abrirCerrarModalWarning=()=>{
    setWarningview(!warningView);
}
  const limpiar = () => {
    setTipoTutoria("");
    setDescripcion("");
    setObservaciones("");
    setFecha("");
  };
  const baseUrl = `https://backendtutorias.herokuapp.com/fichas/asignacion/${codDocente}`;
  const baseUrlSemestre = `https://backendtutorias.herokuapp.com/coordinador`;

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const peticionSemestre = async () => {
    await axios
      .get(baseUrlSemestre)
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSemestre = () => {
    data2.forEach((elemento) => {
      setSemestre(elemento.Periodo);
    });
  };
  const baseUrlSesiones = `https://backendtutorias.herokuapp.com/sesiones`;
  const peticionPost = async () => {
    await axios
      .post(baseUrlSesiones, {
        IdFichaTutoria: idFichaTutoria,
        Fecha: fecha,
        TipoTutoria: tipoTutoria,
        Semestre: semestre,
        Descripcion: descripcion,
        Observaciones: observaciones,
      })
      .then((response) => {
        setSesiones(sesiones.concat(response.data));
        limpiar();
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        setWarningview(true);
        console.log(error);
      });
  };

  const peticionSesiones = async (id) => {
    await axios
      .get(`https://backendtutorias.herokuapp.com/sesiones/ficha/${id}`)
      .then((response) => {
        setSesiones(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  useEffect(() => {
    //peticionSesiones();
    if (!cookie.get("CodDocente")) {
      props.history.push('/LoginTutor');
    }
  });
  const abrirCerrarModalInsertar = () => {
    getSemestre();
    limpiar();
    setModalInsertar(!modalInsertar);
  };
  return (
    <div>
      <Tutorbar nombrePage={"Sesiones de tutoria"} />
      <div className="contenido">
        <div className="Principal2">
          <br />
          <div className="STtop">
            <Row className="mt-4">
              <Col className="col-5">
                <b>Tutorado : </b>
              </Col>
              <Col className="col-6">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onClick = {() => peticionGet()}
                  onChange={(e) => {
                    peticionSemestre();
                    setIdFichaTutoria(e.target.value);
                    peticionSesiones(e.target.value);
                  }}
                >
                  {data.map((obj) => (
                    <option value={obj.IdFichaTutoria}>
                      {obj.Nombres + " " + obj.ApPaterno + " " + obj.ApMaterno}
                    </option>
                  ))}
                </select>
              </Col>
              
            </Row>
          </div>
          <div className="ContainerSTbtn">
            <button
              onClick={() => {abrirCerrarModalInsertar()}}
              className="btnSTSave"
            >
              <b>Nueva Sesion</b>
            </button>
          </div>
          <br />
          <div className="STbot">
            <div className="TablaST">
              <div className="col tableScrollST scrollST">
                {sesiones.map((obj,index) => (
                  <div className="sesion">
                    <Row className="w-100">
                      <Col className="col-4">
                        <b>Fecha</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Fecha"
                          value={moment(obj.Fecha).format("MM/DD/YYYY")} readOnly
                        />
                        
                      </Col>
                      <Col className="col-4">
                        <b>Semestre</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Semestre"
                          value={obj.Semestre}
                          readOnly
                        />
                      </Col>
                      <Col className="col-4 mt-4">
                        <button className="btnDatos" id={"btnVerDatos"+index} onClick={()=>getInfo(obj.IdSesion,index)} >
                          Ver datos privados
                        </button>
                        
                      </Col>
                    </Row>
                    <Row className="w-100">
                      <Col className="col-6">
                        <b>Descripcion</b>
                        <textarea class="form-control" type="text"
                          className="form-control"
                          name="Descripcion"
                          value = {obj.Descripcion}
                          readOnly rows="2"></textarea>
                      </Col>
                      <Col className="col-6">
                        <b>Observaciones</b>
                        <textarea
                          id={"inputmal"+index}
                          type="text"
                          className="form-control"
                          name="Observaciones"
                          value="******************"
                          readOnly
                        />
                      </Col>

                    </Row>
                  </div>
                ))}
              </div>
            </div>
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
                    <Col className="col-2">
                      <h6 className="titulos">Semestre: </h6>
                    </Col>
                    <Col className="col-4">
                      <input
                        type="text"
                        name="Semestre"
                        className="form-control input-sm"
                        value={semestre}
                        readonly=""
                      />
                    </Col>
                    <Col className="col-2">
                      <h6 className="titulos" >Tipo Tutoria :</h6>
                    </Col>

                    <Col className="col-4">
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        onChange={(e) => setTipoTutoria(e.target.value)}
                      >
                        <option value="Académica">Académica</option>
                        <option value="Personal">Personal</option>
                        <option value="Profesional">Profesional</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col className="col-2">
                  <h6 className="titulos">Fecha :</h6>
                </Col>
                <Col className="col-4">
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      onChange={(e) => setFecha(e.target.value)}
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </Col>
              </Row>
            </Row>
            <hr/>
            <Row>
              <Col>
                <label for="exampleFormControlTextarea1" class="form-label">
                  <b>Descripción :</b>
                </label>
                <textarea
                  placeholder="Ingrese la descripción de la sesión"
                  onChange={(e) => setDescripcion(e.target.value)}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="exampleFormControlTextarea1" class="form-label mt-2">
                  <b>Observaciones :</b>
                </label>
                <textarea
                  placeholder="Ingrese las observaciones de la sesión"
                  onChange={(e) => setObservaciones(e.target.value)}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </Col>
            </Row>
          </Col>
        </ModalBody>
        <ModalFooter>
          <button
            className="btnColoG"
            onClick={() => {
              peticionPost();
              peticionSesiones(idFichaTutoria);
            }}
          >
            Insertar
          </button>
          {""}
          <button
            className="btnColoC "
            onClick={() => abrirCerrarModalInsertar()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={warningView} centered>

                    <ModalHeader>
                        <ImIcons.ImWarning />          Algun(os) de los campos no esta(n) correctamente llenado(s) 
                    </ModalHeader>
                 
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalWarning()}/>
                    </ModalFooter>
                </Modal> 
    </div>
  );
};

export default TutorSesionTutorias;
