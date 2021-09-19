import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import AdminBar from '../Administracion/AdminBar'
import {Col,Row} from 'react-bootstrap'
import '../styles/AdminDocentes.css'

const AdminDocentesTutores = () => {
    const baseUrl=`http://localhost:4000/tutores`;
    const[data,setData]=useState([]);
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
            <AdminBar  nombrePage={"Docentes tutores"}/>
            <div className="contenido">
                <div className="Principal2">
                    <div className="datTop">
                            <Row  >
                                <Col className="col-3">
                                    <b>Semestre :</b>
                                </Col>
                                <Col className="col-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </Col>
                            </Row>
                    </div>
                    <div className="TablaDT">
                    <div className="col tableScrollDT scrollDT"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead style={{backgroundColor:'#85b7e9'}} className="colTable">
                                            <tr>
                                                <th>CodDocente</th>
                                                <th>DNI</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Categoria</th>
                                                <th>Celular</th>
                                                <th>Email</th>
                                                <th>Direccion</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((docente,index)=>(
                                                <tr key={index}>
                                                    <td>{docente.CodDocente}</td>
                                                    <td>{docente.DNI}</td>
                                                    <td>{docente.Nombres}</td>
                                                    <td>{docente.ApPaterno + " "+docente.ApMaterno}</td>
                                                    <td>{docente.Categoria}</td>                        
                                                    <td>{docente.Celular}</td>
                                                    <td>{docente.Email}</td>
                                                    <td>{docente.Direccion}</td>
                                                </tr>
                                            ))}                                        
                                        </tbody>
                                    </table>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDocentesTutores
