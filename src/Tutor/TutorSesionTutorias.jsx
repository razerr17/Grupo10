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
  const limpiar = () => {
    setTipoTutoria("");
    setDescripcion("");
    setObservaciones("");
    setFecha("");
  };
  const baseUrl = `http://localhost:4000/fichas/asignacion/${codDocente}`;
  const baseUrlSemestre = `http://localhost:4000/coordinador`;

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
  const baseUrlSesiones = `http://localhost:4000/sesiones/`;
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
        setData(data.concat(response.data));
        limpiar();
        abrirCerrarModalInsertar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionSesiones = async (id) => {
    await axios
      .get(`http://localhost:4000/sesiones/ficha/${id}`)
      .then((response) => {
        console.log(id);
        console.log(`http://localhost:4000/sesiones/ficha/${id}`);
        setSesiones(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    peticionGet();
    peticionSemestre();
    //peticionSesiones();
    if (!cookie.get("CodDocente")) {
      props.history.push("/LoginAdministracion");
    }
  });
  const abrirCerrarModalInsertar = () => {
    getSemestre();
    limpiar();
    setModalInsertar(!modalInsertar);
  };
  return (
    <div>
      <Tutorbar nombrePage={"Sesion de tutoria"} />
      <div className="contenido">
        <div className="Principal2">
          <br />
          <div className="STtop">
            <Row className="mt-4">
              <Col className="col-2">
                <b>Tutorado : </b>
              </Col>
              <Col className="col-4">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={(e) => {
                    setIdFichaTutoria(e.target.value);
                    peticionSesiones(e.target.value);
                  }}
                >
                  <option value="" selected>
                    {" "}
                  </option>
                  {data.map((obj) => (
                    <option value={obj.IdFichaTutoria}>
                      {obj.Nombres + " " + obj.ApPaterno + " " + obj.ApMaterno}
                    </option>
                  ))}
                </select>
              </Col>
              <Col className="col-2">
                <b>Semestre : </b>
              </Col>
              <Col className="col-3">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value="3">2021-I</option>
                </select>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <div className="ContainerSTbtn">
            <button
              onClick={() => abrirCerrarModalInsertar()}
              className="btnSTSave"
            >
              <b>Nueva Sesion</b>
            </button>
          </div>
          <br />
          <div className="STbot">
            <div className="TablaST">
              <div className="col tableScrollST scrollST">
                {sesiones.map((obj) => (
                  <div className="sesion">
                    <Row className="w-100">
                      <Col className="col-6">
                        <b>Fecha</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Fecha"
                          value={obj.Fecha} readOnly
                        />
                      </Col>
                      <Col className="col-6">
                        <b>Semestre</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Semestre"
                          value={obj.Semestre}
                          readOnly
                        />
                      </Col>
                    </Row>
                    <Row className="w-100">
                      <Col className="col-6">
                        <b>Descripcion</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Descripcion"
                          value = {obj.Descripcion}
                          readOnly
                        />
                      </Col>
                      <Col className="col-6">
                        <b>Observaciones</b>
                        <input
                          type="text"
                          className="form-control"
                          name="Observaciones"
                          value = {obj.Observaciones} readOnly
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
                      <h6>Semestre: </h6>
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
                      <h6>Tipo Tutoria :</h6>
                    </Col>

                    <Col className="col-4">
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        onChange={(e) => setTipoTutoria(e.target.value)}
                      >
                        <option value="" selected>
                          {" "}
                        </option>
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
                  <h6>Fecha :</h6>
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
            <Row>
              <Col>
                <label for="exampleFormControlTextarea1" class="form-label">
                  <b>Descripcion :</b>
                </label>
                <textarea
                  onChange={(e) => setDescripcion(e.target.value)}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col>
                <label for="exampleFormControlTextarea1" class="form-label">
                  <b>Observaciones :</b>
                </label>
                <textarea
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
              peticionPost();;
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
    </div>
  );
};

export default TutorSesionTutorias;