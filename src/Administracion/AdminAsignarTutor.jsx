import React ,{ useState}from 'react'
import axios from 'axios'
import AdminBar from '../Administracion/AdminBar'
import * as ImIcons from "react-icons/im"
import '../styles/AdminAsignarTutor.css'
import {Row,Col} from 'react-bootstrap'
import {Modal,ModalFooter,ModalHeader} from 'reactstrap'
const AdminAsignarTutor = () => {
    const baseUrlEstudiantes=`http://localhost:4000/estudiantes`;
    const baseUrlTutores=`http://localhost:4000/tutores`;
    const [estudiantesList,setEstudiantesList]=useState([])
    const [tutoresList,setTutoresList]=useState([])
    const [semestre, setSemestre] = React.useState('elija el semestre')
    const listaSemestres=["2017-I","2017-II","2018-I","2018-II","2019-I","2019-II","2020-I","2020-II"]
    const [warningView,setWarningview]=useState(false);
    const abrirCerrarModalWarning=()=>{
        setWarningview(!warningView);
      }
    const peticionGet=async()=>{
        await axios.get(baseUrlEstudiantes)
        .then(response=>{
          setEstudiantesList(response.data);
        }).catch(error=>{
          console.log(error);
        })
        
      } 
      const peticionGetTutores=async()=>{
        await axios.get(baseUrlTutores)
        .then(response=>{
          setTutoresList(response.data);
          
        }).catch(error=>{
          console.log(error);
        })
        
      } 
    const HallarAlumnosxCurso=()=>{
        peticionGet();
        peticionGetTutores();
    }
    const prueba=()=>{
        console.log(estudiantesList)
        console.log(tutoresList)
        var Est=estudiantesList.length 
        var Tut=tutoresList.length
        console.log(Est)
        console.log(Tut)
        var pos=0;
        for(var i=0;i<Est;i++){
            if(pos<Tut){
                console.log(estudiantesList[i].Nombres+" su tutores sera :"+tutoresList[pos].Nombres)
                pos++;
            }
            else{
                console.log(estudiantesList[i].Nombres+" su tutores sera :"+tutoresList[0].Nombres)
                pos=1;                
            }
        }
    }
    const comprobar=()=>{
        if(semestre==="elija el semestre")
        {
            abrirCerrarModalWarning()
        }
        else{
            prueba();
        }
    }
    return (
        <div>
            <AdminBar nombrePage={"Asignar tutor"}/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                        <h5>Lista de alumnos :</h5>
                        <Row>
                            <Col className="col-4">
                               
                                <select value={semestre} onChange={(e) => {setSemestre(e.target.value); HallarAlumnosxCurso();}}className="form-select form-select-sm">
                                    <option value="elija el semestre">elija el semestre</option>
                                    {
                                        listaSemestres.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>
                        <div className="TablaAsignarTutor">
                            <div className="col tableScrollAsignarTutor scrollAsignarTutor"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead className="colTable">
                                            <tr>
                                                <th>Nro</th>
                                                <th>Codigos</th>
                                                <th>Nombres y apellidos</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <button className="btnSaveAT" onClick={comprobar}>Repartir de forma aleatoria </button>

                    </div>
                </div>
                <Modal isOpen={warningView} centered>

                    <ModalHeader>
                        <ImIcons.ImWarning />              Debe de elegir un semestre para poder usar esta opcion 
                    </ModalHeader>
                 
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalWarning()}/>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default AdminAsignarTutor
