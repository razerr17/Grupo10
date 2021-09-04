import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import AdminBar from '../Administracion/AdminBar'
import '../styles/AdminAsignarTutor.css'
import {Row,Col} from 'react-bootstrap'
const AdminAsignarTutor = () => {
    const baseUrl=`http://localhost:4000/estudiantes`;
//    const[idEstudiante,setIdEstudiante]=useState([''])
    const[data,setData]=useState([])
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
          setData(response.data);
          
        }).catch(error=>{
          console.log(error);
        })
        
      } 
      useEffect(()=>{
        peticionGet();
      })
    return (
        <div>
            <AdminBar nombrePage={"Asignar tutor"}/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                        <h5>Lista de alumnos :</h5>
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
                                            {data.map((estudiante,index)=>(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{estudiante.IDEstudiante }</td>
                                                    <td>{estudiante.Nombres +"   "+ estudiante.ApPaterno +"   "+estudiante.ApMaterno}</td>
                                                </tr>
                                            ))}                   

                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <button className="btnGua"> Guardar</button>
                    <br />
                    <br />
                    
                    <Row>
                        <Col className="col-2">
                            <b>Buscar :</b>
                        </Col>
                        <Col className="col-8">
                            <input className="inpuT" type="text" />
                        </Col>
                        <Col className="col-2">
                        <button className="btnG"> Buscar</button>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <Row>
                        <Col className="col-1">
                            <b>Nombre :</b>
                        </Col>
                        <Col className="col-4">
                            <label htmlFor=""> nombre usuario</label>
                        </Col>
                        <Col className="col-1">
                            <b>Tutor :</b>
                        </Col>
                        <Col className="col-4">
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                        <Col className="col-2">
                        <button className="btnG"> Guardar</button>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAsignarTutor
