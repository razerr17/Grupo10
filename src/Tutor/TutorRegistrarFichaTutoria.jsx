import React from "react";
import Tutorbar from "../Tutor/Tutorbar";
import Cookies from "universal-cookie";
import "../styles/TutorFIchaTutor.css";
import MaterialTable from "material-table";
import axios from "axios";
import * as ImIcons from "react-icons/im"
import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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

  const baseUrl = `https://backendtutorias.herokuapp.com/fichas/asignacion/${codDocente}`;

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
      props.history.push('/LoginTutor');
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
  const baseUrl2 = `https://backendtutorias.herokuapp.com/fichas`;
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
      <Tutorbar  nombrePage={"Fichas de Tutoria"}/>
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
                  icons={tableIcons}
                  options={{
                    actionsColumnIndex: -1,
                    paging: true,
                    pageSizeOptions: [8],
                    pageSize: 9,
                    headerStyle: {
                      backgroundColor: "#85b7e9",
                      color: "black",
                      fontSize: '15px',
                      textAlign:'center'
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
                  <label className="tituloss">Tutorado: </label>
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
                  <label className="tituloss">Persona de Referencia: </label>
                  <br />
                  <input
                    placeholder="Ingrese una persona de referencia"
                    type="text"
                    value={personaRef}
                    className="form-control"
                    name="IDEstudiante"
                    onChange={(e) => setPersonaReferencia(e.target.value)}
                  />
                  <br />
                </Col>
                <Col>
                  <label className="tituloss">Celular de Referencia: </label>
                  <br />
                  <input
                    placeholder="Ingrese un celular de referencia"
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