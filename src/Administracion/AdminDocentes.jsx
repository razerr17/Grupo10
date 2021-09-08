import React from 'react'
import {useState,useEffect} from 'react';
import AdminBar from '../Administracion/AdminBar'
import * as XLSX from 'xlsx'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import * as ImIcons from "react-icons/im"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import MaterialTable from "material-table";

import Edit from '@material-ui/icons/Edit';

const columnas = [
    {
      title:'Codigo',
      field:'CodDocente',
      width:'6%'
    },
    {
        title:'DNI',
        field:'DNI',
        width:'7%'
    },
    {
      title:'Nombres',
      field:'Nombres',
      width:'8%'
    },
    {
      title:'ApPaterno',
      field:'ApPaterno',
      width:'8%'
    },
    {
      title:'ApMaterno',
      field:'ApMaterno',
      width:'8%'
    },
    {
      title:'Categoria',
      field:'Categoria',
      width:'7%'
    },
    {
        title:'Celular',
        field:'Celular',
        width:'7%'
    },
    {
      title:'Email',
      field:'Email',
      
    },
    {
      title:'Direccion',
      field:'Direccion'
      ,
      width:'8%'
    },
    {
      title:'EsTutor',
      field:'EsTutor',
      width:'4%'
    },
  ]

const AdminDocentes = () => {
        const baseUrl=`http://localhost:4000/docentes`;
        const baseUrlExcel=`http://localhost:4000/docentesLista`;
        const[excel,setExcel]=useState([{
          CodDocente:'',
          Nombres:'',
          DNI:'',
          ApPaterno:'',
          ApMaterno :'',
          Categoria:'',
          Celular:'',
          Email:'',
          Direccion:'',
          EsTutor:'',
        }]);
        const[modalInsertar,setModalInsertar]=useState(false);
        const[modalActualizar,setModalActualizar]=useState(false);
        const[codDocente,setCodDocente]=useState('')
        const[nombres,setNombres]=useState('')
        const[dni,setDni]=useState('')
        const[apPaterno,setApPaterno]=useState('')
        const[apMaterno,setApMaterno]=useState('')
        const[categoria,setCategoria]=useState('')
        const[celular,setCelular]=useState('')
        const[email,setEmail]=useState('')
        const[direccion,setDireccion]=useState('')
        const[esTutor,setEsTutor]=useState('')
        const[warningView,setWarningview]=useState(false);
        //*metodos para el api*
        const[data,setData]=useState([]);
        const limpiar=()=>{
            setCodDocente('')
            setNombres('')
            setDni('')
            setApPaterno('')
            setApMaterno('')
            setCategoria('')
            setCelular('')
            setEmail('')
            setDireccion('')
            setEsTutor('')
            setExcel([{
                CodDocente:'',
                Nombres:'',
                DNI:'',
                ApPaterno:'',
                ApMaterno :'',
                Categoria:'',
                Celular:'',
                Email:'',
                Direccion:'',
                EsTutor:'',
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
        const Actualizar=(id)=>{
          data.forEach(elemento => {
            if(elemento.CodDocente===id){
                setCodDocente(elemento.CodDocente)
                setNombres(elemento.Nombres)
                setApPaterno(elemento.ApPaterno)
                setApMaterno(elemento.ApMaterno)
                setDni(elemento.DNI)
                setCategoria(elemento.Categoria)
                setCelular(elemento.Celular)
                setEmail(elemento.Email)
                setDireccion(elemento.Direccion)
                setEsTutor(elemento.EsTutor)
              }
          },
          );
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
          if(!codDocente.trim()||!nombres.trim()||!dni.trim()||!apPaterno.trim()||!apMaterno.trim()||!celular.trim()||!email.trim()||!direccion.trim()||!esTutor.trim()){
              setWarningview(true)
              return
          }     
          if(!(parseInt(celular)<=999999999 &&parseInt(celular)>=900000000)|| !(parseInt(dni)<=99999999 && parseInt(dni)>=10000000)){
              setWarningview(true)
              return
          }
          await axios.post(baseUrl,{
              CodDocente:codDocente,
              Nombres:nombres,
              DNI:dni,
              ApPaterno:apPaterno,
              ApMaterno :apMaterno,
              Categoria:categoria,
              Celular:celular,
              Email:email,
              Direccion:direccion,
              EsTutor:esTutor,
          })
          .then(response=>{
            setData(data.concat(response.data));
            limpiar();
            abrirCerrarModalInsertar();
          }).catch(error=>{
            console.log(error);
          })
        }
        const peticionPut=async()=>{
          if(!categoria.trim()||!email.trim()||!celular.trim()||!direccion.trim()||!esTutor.trim()){
            setWarningview(true)
            return
          }     
          if(!(parseInt(celular)<=999999999 &&parseInt(celular)>=900000000)|| !(parseInt(dni)<=99999999 && parseInt(dni)>=10000000)){
            setWarningview(true)
            return
          }
          await axios.put(baseUrl+`/${codDocente}`,{
            CodDocente:codDocente,
            Categoria:categoria,
            Celular:celular,
            Email:email,
            Direccion:direccion,
            EsTutor:esTutor,
          }).then(response=>{
            setData(data.concat(response.data));
            limpiar();
            abrirCerrarModalActualizar();
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
          limpiar();
          setModalInsertar(!modalInsertar);
        }
      const abrirCerrarModalActualizar=()=>{
          limpiar();
          setModalActualizar(!modalActualizar);
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
            <AdminBar nombrePage={"Docentes"}/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                       <h5>Lista de docentes:</h5>
                        <div className="TablaDT">
                        <div className="col tableScrollDT scrollDT"> 
                            <MaterialTable
                              fixedHeader={true}
                             columns={columnas} 
                             data={data} 
                             title="Docentes Tutores"
                             options={
                                  
                                 {
                                  
                                    headerStyle:{
                                backgroundColor:'#ed9b40',
                                color:'black'
                             },
                             tableLayout: "auto"
                                 }
                             }
                             actions = {[{   
                              icon:Edit,
                              tooltip:'Actualizar datos de docente',
                              onClick: (e,rowData)=>{alert("¿Deseas actualizar los datos del docente "+rowData.CodDocente+"?")
                              abrirCerrarModalActualizar()
                              let id = rowData.CodDocente
                              Actualizar(id)
                              }}]}
                              localization={{
                                header:{
                                actions:"Acciones",
                                
                                },
                              }}
                            />
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
                            <input type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setCodDocente(e.target.value)}/>
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input type="text" className="form-control" name="Nombres" onChange={ (e) => setNombres(e.target.value)}/>
                            <br/>
                            <label>Apellido Paterno: </label>
                            <br/> 
                            <input type="text" className="form-control" name="ApPaterno" onChange={ (e) => setApPaterno(e.target.value)}/>
                            <br/>
                            <label>Apellido Materno: </label>
                            <br/> 
                            <input type="text" className="form-control" name="ApMaterno" onChange={ (e) => setApMaterno(e.target.value)}/>
                            <br/>
                            <label>DNI: </label>
                            <br/>
                            <input type="text" className="form-control" name="dni" onChange={ (e) => setDni(e.target.value)}/>
                            <br/>
                            </Col>
                            <Col>
                            <label>Categoria: </label>
                            <br/> 
                            <select class="form-select"  id="categoria" name="categoria" onChange={ (e) => setCategoria(e.target.value)}>
                                <option value="ASOCIADO">ASOCIADO</option>
                                <option value="AUXILIAR">AUXILIAR</option>
                                <option value="CONTRATADO">CONTRATADO</option>
                            </select>
                            <br/>
                            <label>Email: </label>
                            <br/> 
                            <input type="email" className="form-control" name="correo" onChange={ (e) => setEmail(e.target.value)}/>
                            <br/>       
                            <label>Celular :</label>
                            <br />
                            <input type="text" className="form-control" name="telefono" onChange={(e)=>setCelular(e.target.value)} />
                            <br/>
                            <label htmlFor="">Direccion:</label>
                            <input type="text" className="form-control" name="direccion" onChange={(e)=>setDireccion(e.target.value)}/>
                            <br/>
                            <label htmlFor="">Es Tutor:</label>
                            <input type="text" className="form-control" name="esTutor" onChange={(e)=>setEsTutor(e.target.value)}/>
                            </Col>
                        </Row>
                                         
                              
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" onClick={()=>peticionPost()} >Insertar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={modalActualizar} size="lg">
                    <ModalHeader>Actualizar datos de docente</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                            <br/> 
                            <input type="text" className="form-control" name="IDEstudiante" value={codDocente} onChange={ (e) => setCodDocente(e.target.value)} readonly/>
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input type="text" className="form-control" name="Nombres" value={nombres} onChange={ (e) => setNombres(e.target.value)} readonly/>
                            <br/>
                            <label>Apellido Paterno: </label>
                            <br/> 
                            <input type="text" className="form-control" name="ApPaterno" value={apPaterno} onChange={ (e) => setApPaterno(e.target.value)} readonly/>
                            <br/>
                            <label>Apellido Materno: </label>
                            <br/> 
                            <input type="text" className="form-control" name="ApMaterno"  value={apMaterno} onChange={ (e) => setApMaterno(e.target.value)} readonly/>
                            <br/>
                            </Col>
                            <Col>
                            <label>Categoria: </label>
                            <br/> 
                            <select class="form-select"  id="categoria" name="categoria" value={categoria} onChange={ (e) => setCategoria(e.target.value)}>
                                <option value="ASOCIADO">ASOCIADO</option>
                                <option value="AUXILIAR">AUXILIAR</option>
                                <option value="CONTRATADO">CONTRATADO</option>
                            </select>
                            <br/>
                            <label htmlFor="">Es Tutor:</label>
                            <input type="text" className="form-control" name="esTutor" value={esTutor} onChange={(e)=>setEsTutor(e.target.value)}/>
                            </Col>
                        </Row>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" onClick={()=>peticionPut()} >Guardar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalActualizar()}>Cancelar</button>
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
