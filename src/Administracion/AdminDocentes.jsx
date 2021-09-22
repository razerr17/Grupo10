import React from 'react'
import {useState,useEffect} from 'react';
import AdminBar from '../Administracion/AdminBar'
import * as XLSX from 'xlsx'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import * as ImIcons from "react-icons/im"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import MaterialTable from "material-table";
import '../styles/AdminEstudiantes.css'
import { forwardRef } from 'react';
import Cookies from 'universal-cookie'

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

const AdminDocentes = (props) => {
  const cookie =new Cookies();
        const baseUrl=`https://backendtutorias.herokuapp.com/docentes`;
        const baseUrlExcel=`https://backendtutorias.herokuapp.com/docentesLista`;
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
        const [validate,setValidate]=useState([]);
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
          var a = [];
        if(!codDocente.trim()){
          a.push('Codigo docente |')
        }
        if(!nombres.trim()){
          a.push(' nombres |')
        }
        if(!apPaterno.trim()){
          a.push(' apellido paterno  |')
        }
        if(!apMaterno.trim()){
          a.push(' apellido materno  |')
        }
        if(!email.trim()){
          a.push(' email  |')
        }
        if(!direccion.trim()){
          a.push(' direccion |')
        }
        if(!(parseInt(celular)<=999999999 &&parseInt(celular)>=900000000) ||!celular.trim()){
          a.push(' celular |')
        }
        if( !(parseInt(dni)<=99999999 && parseInt(dni)>=10000000)||!dni.trim()){
          a.push(' dni ')
        }
        setValidate(a)
        if(a.length>0){
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
                        <div className="TablaE">
                        <div className="col tableScrollE scrollE"> 
                            <MaterialTable
                              fixedHeader={true}
                             columns={columnas} 
                             data={data} 
                             icons={tableIcons}
                             title="Docentes Tutores"
                             options={
                                  
                                 {
                                  
                                    headerStyle:{
                                backgroundColor:'#85b7e9',
                                color:'black',
                                fontSize: '15px',
                                textAlign:'center'
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
                    </div>
                   <Modal isOpen={modalInsertar} size="lg">
                    <ModalHeader>Insertar docente de base de datos</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                            <br/> 
                            <input placeholder="Ej. D00001" type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setCodDocente(e.target.value)}/>
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input placeholder="Ej. Cesar Augusto" type="text" className="form-control" name="Nombres" onChange={ (e) => setNombres(e.target.value)}/>
                            <br/>
                            <label>Apellido Paterno: </label>
                            <br/> 
                            <input  placeholder="Ej. Altamirano" type="text" className="form-control" name="ApPaterno" onChange={ (e) => setApPaterno(e.target.value)}/>
                            <br/>
                            <label>Apellido Materno: </label>
                            <br/> 
                            <input placeholder="Ej. Vega" type="text" className="form-control" name="ApMaterno" onChange={ (e) => setApMaterno(e.target.value)}/>
                            <br/>
                            <label>DNI: </label>
                            <br/>
                            <input placeholder="Ej. 12232212"  type="text" className="form-control" name="dni" onChange={ (e) => setDni(e.target.value)}/>
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
                            <input placeholder="Ej. prueba@prueba.com" type="email" className="form-control" name="correo" onChange={ (e) => setEmail(e.target.value)}/>
                            <br/>       
                            <label>Celular :</label>
                            <br />
                            <input placeholder="Ej. 983332131" type="text" className="form-control" name="telefono" onChange={(e)=>setCelular(e.target.value)} />
                            <br/>
                            <label htmlFor="">Direccion:</label>
                            <input  placeholder="Av. Abancay S/N" type="text" className="form-control" name="direccion" onChange={(e)=>setDireccion(e.target.value)}/>
                            <br/>
                            <label htmlFor="">Es Tutor:</label>
                            <select class="form-select"  id="esTutor" name="esTutor" value={esTutor} onChange={ (e) => setEsTutor(e.target.value)}>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
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
                            <input readonly=""  type="text" className="form-control" name="IDEstudiante" value={codDocente} onChange={ (e) => setCodDocente(e.target.value)}/>
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input readonly="" type="text" className="form-control" name="Nombres" value={nombres} onChange={ (e) => setNombres(e.target.value)} />
                            <br/>
                            <label>Apellido Paterno: </label>
                            <br/> 
                            <input readonly="" type="text" className="form-control" name="ApPaterno" value={apPaterno} onChange={ (e) => setApPaterno(e.target.value)} />
                            <br/>
                            <label>Apellido Materno: </label>
                            <br/> 
                            <input readonly="" type="text" className="form-control" name="ApMaterno"  value={apMaterno} onChange={ (e) => setApMaterno(e.target.value)}/>
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
                            <select class="form-select"  id="esTutor" name="esTutor" value={esTutor} onChange={ (e) => setEsTutor(e.target.value)}>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
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
                        <ImIcons.ImWarning />            El/los campo(s) : {validate} no esta(n) correctamente llenado(s) 
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
