import React from 'react'
import {useState,useEffect} from 'react';
import AdminBar from '../Administracion/AdminBar'
import * as XLSX from 'xlsx'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import * as ImIcons from "react-icons/im"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'

const AdminEstudiantes = () => {

    const baseUrl=`http://localhost:4000/estudiantes`;
    const baseUrlExcel=`http://localhost:4000/estudiantesLista`;
    const[modalInsertar,setModalInsertar]=useState(false);
    const [idEstudiante, setIdEstudiante] = React.useState("");
    const [nombres, setNombres] = React.useState("");
    const [apPaterno, setApPaterno] = React.useState("");
    const [apMaterno, setApMaterno] = React.useState("");
    const[email,setEmail]=React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const[warningView,setWarningview]=useState(false);
    const[excel,setExcel]=useState([{
        IDEstudiante:'',
        Nombres:'',
        ApPaterno:'',
        ApMaterno:'',
        Email:'',
        Celular:'',
        Direccion:''
      }]
      )
      //*metodos para el api*/
    const[data,setData]=useState([]);
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
          setData(response.data);
          
        }).catch(error=>{
          console.log(error);
        })
        
      } 
      const peticionPostExcel=async()=>{
        await axios.post(baseUrlExcel,excel)
        .then(response=>{
        setData(data.concat(response.data));
        limpiar();
        document.getElementById('inputGroupFile04').value ='';
        }).catch(error=>{
        console.log(error);
        })
      }
      const peticionPost=async()=>{
        if(!idEstudiante.trim()||!nombres.trim()||!apPaterno.trim()||!apMaterno.trim()||!email.trim()||!telefono.trim()||!direccion.trim()){
            setWarningview(true)
             return
         }     
        if(!(parseInt(telefono)<=999999999 &&parseInt(telefono)>=900000000)){
            setWarningview(true)
             return
        }
        // delete clienteSeleccionado.IdCliente;
        await axios.post(baseUrl,{IDEstudiante:idEstudiante,Nombres:nombres,ApPaterno:apPaterno,ApMaterno:apMaterno,Email:email,Direccion:direccion,Celular:telefono})
        .then(response=>{
            
          setData(data.concat(response.data));
          abrirCerrarModalInsertar();
            limpiar();
        }).catch(error=>{
          console.log(error);
        })
      }
        
    //const guardarExcel=()=>{
      //console.log(excel)
     //document.getElementById('inputGroupFile04').value =''; 
    //}
      const readExcel=(file)=>{
        const promise=new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader.readAsArrayBuffer(file)
            fileReader.onload=(e)=>{
                const bufferArray=e.target.result;
                const wb=XLSX.read(bufferArray,{type:'buffer'});

                const wsname=wb.SheetNames[0];

                const ws=wb.Sheets[wsname];
                const data=XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror=((error)=>{
                reject(error);
            })
        })
        promise.then((d)=>{
            setExcel(d);
        })
    }
    const abrirCerrarModalInsertar=()=>{
        setModalInsertar(!modalInsertar);
      }
      const abrirCerrarModalWarning=()=>{
        setWarningview(!warningView);
      }
    const limpiar=()=>{
        setIdEstudiante('')
        setNombres('')
        setApPaterno('')
        setApMaterno('')
        setEmail('')
        setTelefono('')
        setDireccion('')
        setExcel({
            IDEstudiante:'',
            Nombres:'',
            ApPaterno:'',
            ApMaterno:'',
            Email:'',
            Celular:'',
            Direccion:''
          }
          )
    }
    useEffect(()=>{
        peticionGet();
      })
    return (
        <div>
            <AdminBar/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                       <h5>Lista de estudiantes:</h5>
                        <div className="TablaDT">
                            <div className="col tableScrollDT scrollDT"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead className="colTable">
                                            <tr>
                                                <th>codigo</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Email</th>
                                                <th>Direccion</th>
                                                <th>Telefono</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((estudiante,index)=>(
                                                <tr key={index}>
                                                    <td>{estudiante.IDEstudiante}</td>
                                                    <td>{estudiante.Nombres}</td>
                                                    <td>{estudiante.ApPaterno},{estudiante.ApMaterno}</td>
                                                    <td>{estudiante.Email}</td>
                                                    <td>{estudiante.Direccion}</td>                                            
                                                    <td>{estudiante.Celular}</td>
                                                </tr>
                                            ))}                                        
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <button onClick={()=>abrirCerrarModalInsertar()} className="btnAddEst"> <b>Agregar estudiante</b></button> 
                    
                    <div class="input-group">
                       <input type="file"  className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                           onChange={(e)=>{
                                const file=e.target.files[0];
                                readExcel(file);}}
                       />
                       <button className="btnImportar" type="button" id="inputGroupFileAddon04" onClick={()=>{peticionPostExcel()}}>Importar</button>
                    </div>

                   </div>
                   <Modal isOpen={modalInsertar} size="lg">
                    <ModalHeader>Insertar estudiante de base de datos</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                        <br/> 
                        <input type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setIdEstudiante(e.target.value)}/>
                        <br/>
                        <label>Nombre: </label>
                        <br/> 
                        <input type="text" className="form-control" name="Nombres" onChange={ (e) => setNombres(e.target.value)}/>
                        <br/>
                        <label>Apellido Paterno: </label>
                        <br/>
                        <input type="text" className="form-control" name="ApPaterno"onChange={ (e) => setApPaterno(e.target.value)}/>
                        <br/>
                        <label>Apellido Materno: </label>
                        <br/> 
                        <input type="text" className="form-control" name="ApMaterno" onChange={ (e) => setApMaterno(e.target.value)}/>
                        <br/>       
                            
                            </Col>
                            <Col>
                            <label>Email: </label>
                        <br/>
                        <input type="email" className="form-control" name="Email" onChange={ (e) => setEmail(e.target.value)}/>
                        <br/>            
                            <label>Telefono/Celular: </label>
                        <br/>
                        <input type="text" className="form-control" name="Celular" onChange={ (e) => setTelefono(e.target.value)}/>
                        <br/>
                        <label>Direccion: </label>
                        <br/>
                        <input type="text" className="form-control" name="ireccion" onChange={ (e) => setDireccion(e.target.value)}/>
                        <br/>             
                            </Col>
                        </Row>
                                         
                              
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" onClick={()=>peticionPost()} >Insertar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                
                <Modal isOpen={warningView} centered>

                    <ModalHeader>
                        <ImIcons.ImWarning />               Debe de llenar el formulario correctamente 
                    </ModalHeader>
                 
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalWarning()}/>
                    </ModalFooter>
                </Modal>
                </div>
                

      
            </div>
            
        </div>
    )
}

export default AdminEstudiantes
