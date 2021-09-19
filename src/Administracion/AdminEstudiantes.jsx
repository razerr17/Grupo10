import React from 'react'
import {useState,useEffect} from 'react';
import AdminBar from '../Administracion/AdminBar'
import * as XLSX from 'xlsx'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';
import * as ImIcons from "react-icons/im"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import MaterialTable from "material-table";

const columnas = [
    {
      title:'Codigo',
      field:'CodEstudiante',
      width: "6%"
    },
    {
      title:'Nombres',
      field:'Nombres',
      width: "10%"
    },
    {
      title:'Ap_Paterno',
      field:'ApPaterno',
      width: "8%"
    },
    {
      title:'Ap_Materno',
      field:'ApMaterno',
      width: "7%"
    },
    {
      title:'Email',
      field:'Email',
      width: "12%"
    },
    {
      title:'Direccion',
      field:'Direccion',
      width: "10%"
    },
    {
        title:'Celular',
        field:'Celular',
        width: "7%"
    },
    {
      title:'Semestre',
      field:'SemestreIngreso',
      width: "5%"
    },
  ]


const AdminEstudiantes = () => {

    const baseUrl=`http://localhost:4000/estudiantes`;
    const baseUrlExcel=`http://localhost:4000/estudiantesLista`;
    const[modalInsertar,setModalInsertar]=useState(false);
    const [codEstudiante, setCodEstudiante] = React.useState("");
    const [nombres, setNombres] = React.useState("");
    const [apPaterno, setApPaterno] = React.useState("");
    const [apMaterno, setApMaterno] = React.useState("");
    const [email,setEmail]=React.useState("");
    const [celular, setCelular] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const [semestreIngreso, setSemestreIngreso]= React.useState("");
    const [warningView,setWarningview]=useState(false);
    const [excel,setExcel]=useState([{
        CodEstudiante:'',
        Nombres:'',
        ApPaterno:'',
        ApMaterno:'',
        Email:'',
        Direccion:'',
        Celular:'',
        SemestreIngreso:''
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
        if(!codEstudiante.trim()||!nombres.trim()||!apPaterno.trim()||!apMaterno.trim()||!email.trim()||!direccion.trim()||!celular.trim()|| !semestreIngreso.trim()){
            setWarningview(true)
             return
         }     
        if(!(parseInt(celular)<=999999999 &&parseInt(celular)>=900000000)){
            setWarningview(true)
             return
        }
        // delete clienteSeleccionado.IdCliente;
        await axios.post(baseUrl,{CodEstudiante:codEstudiante,Nombres:nombres,ApPaterno:apPaterno,ApMaterno:apMaterno,Email:email,Direccion:direccion,Celular:celular, SemestreIngreso:semestreIngreso})
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
        setCodEstudiante('')
        setNombres('')
        setApPaterno('')
        setApMaterno('')
        setEmail('')
        setDireccion('')
        setCelular('')
        setSemestreIngreso('')
        setExcel([{
            CodEstudiante:'',
            Nombres:'',
            ApPaterno:'',
            ApMaterno:'',
            Email:'',
            Direccion:'',
            Celular:'',
            SemestreIngreso:''
          }])
    }
    useEffect(()=>{
        peticionGet();
      })
    return (
        <div>
            <AdminBar nombrePage={"Estudiantes"}/>
            <div className="contenido">
                <div className="Principal2">
                <div className="cont">
                       <h5>Lista de estudiantes:</h5>
                        <div className="TablaDT">
                            <div className="col tableScrollDT scrollDT"> 
                            <MaterialTable
                             columns={columnas} 
                             data={data} 
                             title="Estudiantes"
                             options={{
                              headerStyle:{
                                backgroundColor:'#ed9b40',
                                color:'black'
                             },
                              tableLayout: "fixed"
                            }}
                        />
                                </div>
                        </div>
                    <button style={{backgroundColor:'#000a25',color:'white'}} onClick={()=>abrirCerrarModalInsertar()} className="btnAddEst"> <b>Agregar estudiante</b></button> 
                    
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
                        <input type="text" className="form-control" name="CodEstudiante" onChange={ (e) => setCodEstudiante(e.target.value)}/>
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
                        <input type="text" className="form-control" name="Email" onChange={ (e) => setEmail(e.target.value)}/>
                        <br/>
                        <label>Direccion: </label>
                        <br/> 
                        <input type="text" className="form-control" name="Direccion" onChange={ (e) => setDireccion(e.target.value)}/>
                        <br/>
                        <label>Celular: </label>
                        <br/> 
                        <input type="text" className="form-control" name="Celular" onChange={ (e) => setCelular(e.target.value)}/>
                        <br/>
                        <label>Semestre de Ingreso: </label>
                        <br/> 
                        <input type="text" className="form-control" name="SemestreIngreso" onChange={ (e) => setSemestreIngreso(e.target.value)}/>
                        <br/>           
                            </Col>
                        </Row>
                                         
                              
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button style={{backgroundColor:'#000a25',color:'white'}} className="btnColoG" onClick={()=>peticionPost()} >Insertar</button>{""}
                    <button  style={{backgroundColor:'#000a25',color:'white'}} className="btnColoC " onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
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
