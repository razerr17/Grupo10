import React from "react";
import Tutorbar from "../Tutor/Tutorbar";
import Cookies from "universal-cookie";
import "../styles/TutorFIchaTutor.css";
import MaterialTable from "material-table";
import Edit from "@material-ui/icons/Edit";
import axios from "axios";
import * as ImIcons from "react-icons/im"
import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Row, Col } from "react-bootstrap";

const columnas = [
  {
    title: "CodEstudiante",
    field: "CodEstudiante",
    width: "10%",
  },
  {
    title: "Nombres",
    field: "Nombres",
    width: "15%",
  },
  {
    title: "ApPaterno",
    field: "ApPaterno",
    width: "15%",
  },
  {
    title: "ApMaterno",
    field: "ApMaterno",
    width: "15%",
  },
  {
    title: "Persona de Referencia",
    field: "PersonaReferenciaTutorando",
    width: "25%",
  },
  {
    title: "Celular de Referencia",
    field: "CelularReferenciaTutorando",
    width: "15%",
  },
];

const TutorRegistrarFichaTutoria = (props) => {
  const cookie = new Cookies();
  const [data, setData] = useState([]);
  const [idFichaTutoria, setIdFichaTutoria] = useState("");
  const [codEstudiante, setCodEstudiante] = useState("");
  const [codDocente, setCodDocente] = useState(cookie.get("CodDocente"));
  const [nombres, setNombres] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [celularRef, setCelularReferencia] = useState("");
  const [personaRef, setPersonaReferencia] = useState("");
  const [modalActualizar, setModalActualizar] = useState(false);
  const abrirCerrarModalActualizar = () => {
    limpiar();
    setModalActualizar(!modalActualizar);
  };
  const abrirCerrarModalWarning=()=>{
    setWarningview(!warningView);
}
  const [warningView, setWarningview] = useState(false);

  const baseUrl = `http://localhost:4000/fichas/asignacion/${codDocente}`;

  console.log(baseUrl);
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
  useEffect(() => {
    peticionGet();
    if (!cookie.get("CodDocente")) {
      props.history.push("/LoginTutor");
    }
  });
  const Actualizar = (id) => {
    data.forEach((elemento) => {
      if (elemento.CodEstudiante === id) {
        setIdFichaTutoria(elemento.IdFichaTutoria);
        setCodEstudiante(elemento.CodEstudiante);
        setNombres(elemento.Nombres);
        setApPaterno(elemento.ApPaterno);
        setApMaterno(elemento.ApMaterno);
        setPersonaReferencia(elemento.PersonaReferenciaTutorando);
        setCelularReferencia(elemento.CelularReferenciaTutorando);
      }
    });
  };
  const limpiar = () => {
    setIdFichaTutoria("");
    setCodEstudiante("");
    setNombres("");
    setApPaterno("");
    setApMaterno("");
    setPersonaReferencia("");
    setCelularReferencia("");
  };
  const baseUrl2 = `http://localhost:4000/fichas`;
  const peticionPut = async () => {
    if (
      !(parseInt(celularRef) <= 999999999 && parseInt(celularRef) >= 900000000)
    ) {
      setWarningview(true);
      return;
    }
    await axios
      .put(baseUrl2 + `/${idFichaTutoria}`, {
        IdFichaTutoria: idFichaTutoria,
        CelularReferenciaTutorando: celularRef,
        PersonaReferenciaTutorando: personaRef,
      })
      .then((response) => {
        setData(data.concat(response.data));
        limpiar();
        abrirCerrarModalActualizar();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Tutorbar />
      <div className="contenido">
        <div className="Principal2">
          <div className="cont">
            <div className="TablaDT">
              <div className="col tableScrollDT scrollDT">
                <MaterialTable
                  fixedHeader={true}
                  columns={columnas}
                  data={data}
                  title="Tutorados"
                  options={{
                    actionsColumnIndex: -1,
                    paging: true,
                    pageSizeOptions: [8],
                    pageSize: 9,
                    headerStyle: {
                      backgroundColor: "#ed9b40",
                      color: "black",
                    },
                  }}
                  actions={[
                    {
                      icon: Edit,
                      tooltip: "Actualizar datos de ficha",
                      onClick: (e, rowData) => {
                        alert(
                          "¿Deseas actualizar los datos del tutorado " +
                            rowData.Nombres +
                            " " +
                            rowData.ApPaterno +
                            " " +
                            rowData.ApMaterno +
                            "?"
                        );
                        abrirCerrarModalActualizar();
                        let id = rowData.CodEstudiante;
                        Actualizar(id);
                      },
                    },
                  ]}
                  localization={{
                    header: {
                      actions: "Acciones",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <Modal centered={true} isOpen={modalActualizar} size="lg">
            <ModalHeader>Actualizar datos de docente</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <label>Tutorado: </label>
                  <input
                    readonly=""
                    type="text"
                    value={nombres + " " + apPaterno + " " + apMaterno}
                    className="form-control"
                    name="IDEstudiante"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <label>Persona de Referencia: </label>
                  <br />
                  <input
                    type="text"
                    value={personaRef}
                    className="form-control"
                    name="IDEstudiante"
                    onChange={(e) => setPersonaReferencia(e.target.value)}
                  />
                  <br />
                </Col>
                <Col>
                  <label>Celular de Referencia: </label>
                  <br />
                  <input
                    type="text"
                    value={celularRef}
                    className="form-control"
                    name="Nombres"
                    onChange={(e) => setCelularReferencia(e.target.value)}
                  />
                  <br />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <button className="btnColoG" onClick={() => peticionPut()}>
                Guardar
              </button>
              <button
                className="btnColoC "
                onClick={() => abrirCerrarModalActualizar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={warningView} centered>
            <ModalHeader>
              <ImIcons.ImWarning /> Debe de llenar el formulario correctamente
            </ModalHeader>

            <ModalFooter>
              <ImIcons.ImCross onClick={() => abrirCerrarModalWarning()} />
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TutorRegistrarFichaTutoria;