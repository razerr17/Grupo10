import React from 'react'
import {useState,useEffect} from 'react';
import AdminBar from '../Administracion/AdminBar'
import * as XLSX from 'xlsx'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import * as ImIcons from "react-icons/im"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'

const AdminDocentes = () => {

    const baseUrl=`http://localhost:4000/docentes`;
    const baseUrlExcel=`http://localhost:4000/docentesLista`;
    const[excel,setExcel]=useState([{
        IDDocente:'',
        Nombre:'',
        DNI:'',
        Correo:'',
        Celular :'',
        Direccion:''
    }]);
    const[modalInsertar,setModalInsertar]=useState(false);
    const[idDocente,setIdDocente]=useState('')
    const[nombres,setNombres]=useState('')
    const[dni,setDni]=useState('')
    const[correo,setCorreo]=useState('')
    const[celular,setCelular]=useState('')
    const[direccion,setDireccion]=useState('')
    const[warningView,setWarningview]=useState(false);
    //*metodos para el api*
    const[data,setData]=useState([]);
    const limpiar=()=>{
        setIdDocente('')
        setNombres('')
        setDni('')
        setCorreo('')
        setCelular('')
        setDireccion('')
        setExcel([{
            IDDocente:'',
            Nombre:'',
            DNI:'',
            Correo:'',
            Celular :'',
            Direccion:''
        }])
    }
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
        if(!idDocente.trim()||!nombres.trim()||!dni.trim()||!correo.trim()||!celular.trim()||!direccion.trim()){
            setWarningview(true)
             return
         }     
        if(!(parseInt(celular)<=999999999 &&parseInt(celular)>=900000000)|| !(parseInt(dni)<=99999999 && parseInt(dni)>=10000000)){
            setWarningview(true)
             return
        }
        await axios.post(baseUrl,{
                IDDocente:idDocente,
                Nombre:nombres,
                DNI:dni,
                Correo:correo,
                Celular:celular,
                Direccion:direccion
        })
        .then(response=>{
          setData(data.concat(response.data));
          limpiar();
          abrirCerrarModalInsertar();
        }).catch(error=>{
          console.log(error);
        })
      }
        
      
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
    //const guardarExcel=()=>{
     //   console.log(excel)
       // document.getElementById('inputGroupFile04').value =''; 
    //}
    useEffect(()=>{
        peticionGet();
      })
    return (
        <div>
            <AdminBar/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                       <h5>Lista de docentes:</h5>
                        <div className="TablaDT">
                            <div className="col tableScrollDT scrollDT"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead className="colTable">
                                            <tr>
                                                <th>Id docente</th>
                                                <th>Nombres</th>
                                                <th>DNI</th>
                                                <th>Correo</th>
                                                <th>Celular</th>
                                                <th>Direccion</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((docente,index)=>(
                                                <tr key={index}>
                                                    <td>{docente.IDDocente}</td>
                                                    <td>{docente.Nombre}</td>
                                                    <td>{docente.DNI}</td>
                                                    <td>{docente.Correo}</td>                                                                                 
                                                    <td>{docente.Celular}</td>
                                                    <td>{docente.Direccion}</td>
                                                </tr>
                                            ))}                                        
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <button onClick={()=>abrirCerrarModalInsertar()} className="btnAddEst"> <b>Agregar docente</b></button> 
                    
                    <div class="input-group">
                       <input type="file"  className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                           onChange={(e)=>{
                                const file=e.target.files[0];
                                readExcel(file);}}
                       />
                       <button  className="btnImportar" type="button" id="inputGroupFileAddon04" onClick={()=>peticionPostExcel()}>Importar</button>
                    </div>

                   </div>
                   <Modal isOpen={modalInsertar} size="lg">
                    <ModalHeader>Insertar docente de base de datos</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                            <br/> 
                            <input type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setIdDocente(e.target.value)}/>
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input type="text" className="form-control" name="Nombres" onChange={ (e) => setNombres(e.target.value)}/>
                            <br/>
                            <label>DNI: </label>
                            <br/>
                            <input type="text" className="form-control" name="dni" onChange={ (e) => setDni(e.target.value)}/>
                            <br/>
                            </Col>
                            <Col>
                            
                            <label>Correo: </label>
                            <br/> 
                            <input type="email" className="form-control" name="correo" onChange={ (e) => setCorreo(e.target.value)}/>
                            <br/>       
                            <label>Celular :</label>
                            <br />
                            <input type="text" className="form-control" name="telefono" onChange={(e)=>setCelular(e.target.value)} />
                            <br/>
                            <label htmlFor="">Direccion</label>
                            <input type="text" className="form-control" name="direccion" onChange={(e)=>setDireccion(e.target.value)}/>
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

export default AdminDocentes
