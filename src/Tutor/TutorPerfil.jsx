import React ,{useState,useEffect}from 'react'
import TutorBar from './Tutorbar'
import { Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import * as MdIcons from "react-icons/md"
import * as ImIcons from "react-icons/im"
import * as BiIcons from "react-icons/bi"
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import '../styles/TadoPerfil.css'
import Cookies from 'universal-cookie'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyCfKFX7pT4MbEqB4nyEI8ggR0G_MgTMWDY",
    authDomain: "tutoria-20626.firebaseapp.com",
    projectId: "tutoria-20626",
    storageBucket: "tutoria-20626.appspot.com",
    messagingSenderId: "937165411476",
    appId: "1:937165411476:web:98a591d8e8364ac51bd081",
    measurementId: "G-1D480E6ZDQ"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const TutorPerfil = (props) => {
    const[successView,setSuccessView]=useState(false);
    const abrirCerrarModalSuccess=()=>{
        setSuccessView(!successView);
    }
    const[errorView,setErrorview]=useState(false);
    const abrirCerrarModalError=()=>{
        setErrorview(!errorView);
      }
        
    const urlPass=`http://localhost:4000/UpPass`
    const [passNow,setPassNow]=useState('')
    const [passNew,setPassNew]=useState('')
    const putPass=async()=>{
        await axios.put(urlPass+`/${cookie.get('Email')}`,{ContraseniaAnt:passNow,ContraseniaNew:passNew})
        .then(response=>{
            return response.data;
        }).then(response=>{
            if(response.length>0){
               abrirCerrarModalError()
            }
            else{
                abrirCerrarModalSuccess()
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const baseUrl=`http://localhost:4000/FotoPerfil`;
    const[direccionUrl,setDireccionUrl]=useState([{
        Foto:"./imagenes/carga.gif"
    }])
    const[aux,setAux]=useState([{
        Foto:"./imagenes/FondoTadoPerfil.JPG"
    }])
    const[modalEditar,setModalEditar]=useState(false);
    const[modalEditarFoto,setModalEditarFoto]=useState(false);
    const abrirCerrarModalEditarFoto=()=>{
        setModalEditarFoto(!modalEditarFoto);
      }
    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar);
      }
      const[modalEditarContra,setModalEditarContra]=useState(false);
      const abrirCerrarModalEditarContra=()=>{
          setModalEditarContra(!modalEditarContra);
        }
    // const prueba=()=>{
    //     console.log(aux)
    //     console.log(cookie.get('Email'))
    // }
    const peticionPut=async()=>{      
        await axios.put(baseUrl+`/${cookie.get('Email')}`,{
            Foto:aux
        }).then(response=>{
            abrirCerrarModalEditarFoto()
            console.log(aux)
        }).catch(error=>{
            console.log(error);
        })  
    }
    const cookie =new Cookies();
    const peticionGet=async()=>{
        await axios.get(baseUrl+`/${cookie.get('Email')}`)
      .then(response=>{
        setDireccionUrl(response.data);
        
      }).catch(error=>{
        console.log(error);
      })
    }
    let image=direccionUrl; 
    let referencia=cookie.get('Email')
    const handlechange=(e)=>{
        const file=e.target.files[0];
        const refe=firebase.storage().ref(`/profilephotos/${referencia}`);
        const task=refe.put(file);

        task.on('state_changed',snapshot =>{
            let porcentaje=(snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(porcentaje)
        image=task.snapshot.getDownloadURL;
    
    })
    firebase.storage().ref(`/profilephotos/${referencia}`).getDownloadURL().then((url)=> {
        // `url` is the download URL for 'images/stars.jpg'
        // Or inserted into an <img> element:
        console.log("logro entrar")
        var imgw=document.getElementById('img')
        image=url;
        console.log(url)
        setAux(image)
        imgw.src=url;
      }).catch(function(error) {
        // Handle any errors
      });
       
   }
    useEffect(()=>{
        peticionGet();
        if(!cookie.get('CodDocente')){
            props.history.push('/LoginAdministracion');
        }
    })
    return (
        <div>
            <TutorBar nombrePage={"Perfil"} />
            <div className="contenido">
                    <div className="Principal2 ">
                        <img className="portada"src="./imagenes/FondoTadoPerfil.JPG" alt="" />                       
                        <div className ="contDatos">
                            <Row className=" position-relative">
                                <Col className=" col-3 ">
                                <img className="sizephoto"src={direccionUrl[0].Foto} alt='some value'/>
                                <AiIcons.AiFillCamera className="btnFoto" onClick={()=>abrirCerrarModalEditarFoto()}/>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <hr />
                                    <div className="name">
                                   
                                        <label >  {cookie.get('Nombres')} {cookie.get('ApPaterno')+" "+cookie.get('ApMaterno')}</label>
                                    </div>
                                 
                                     <div className="email">                                    
                                        <label > {cookie.get('Email')}</label>
                                    </div>
                                    <div className="email">
                                        <label className="email">categoria : {cookie.get('Categoria')}</label>
                                    </div>
                                   
                                </Col>
                                <Col className="col-8 mt-4 column1 ">
                                    <Row className="mt-4 mb-2">
                                        <Col>
                                            <div className="cardDatos mx-auto">
                                                <Row>
                                                    <Col className=" col-3 ">
                                                        <AiIcons.AiOutlinePhone className="mx-auto iconCard"/>
                                                    </Col>
                                                    <Col className="col-9 pt-3 ">
                                                        <label className="lblCard"> <h6>{cookie.get('Celular')}</h6></label>    
                                                    </Col>
                                                </Row>
                                                
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="cardDatos mx-auto">
                                                <Row>
                                                    <Col className=" col-3 ">
                                                        <AiIcons.AiOutlineIdcard className="mx-auto iconCard"/>
                                                    </Col>
                                                    <Col className="col-9 pt-3 ">
                                                         <label className="lblCard">  (dni)-{cookie.get('DNI')}</label>   
                                                    </Col>
                                                </Row>
                                               
                                               
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="cardDatos mx-auto">
                                                <Row>
                                                    <Col className=" col-1 pt-2">
                                                     <BsIcons.BsGeoAlt className="iconCard1"/>
                                                    </Col>
                                                    <Col className="col-9 mt-3 mx-auto" >
                                                         <label className="direccion"> {cookie.get('Direccion')}</label>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="cardDatos mx-auto">
                                                <Row>
                                                    <Col className="col-5 mt-3">
                                                    <label ><b>Es tutor :  </b></label>
                                                    </Col>
                                                    <Col className="col-2 pt-3 ">
                                                    <label className=""> {cookie.get('Estutor')}</label>
                                                    </Col>
                                                </Row>
                                                
                                              
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                   
                                    <Row className="mt-3">
                                        <Col>
                                        <button onClick={()=>abrirCerrarModalEditarContra()} className="btnEditarContra">
                                        Editar contraseña 
                                        <RiIcons.RiLockPasswordFill className="iconSave"/>
                                    </button>
                                        </Col>
                                        <Col>
                                        <button onClick={()=>abrirCerrarModalEditar()} className="btnEditar">
                                        Editar
                                        <BiIcons.BiEdit className="iconSave"/>
                                    </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                        </div>
                    </div>
                <Modal isOpen={modalEditar} size="lg">
                    <ModalHeader>Editar datos</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Row>
                            <Col>
                            <label>Codigo: </label>
                            <br/> 
                            <input type="text" className="form-control" value={cookie.get('CodAdmin')} name="IDEstudiante" readOnly />
                            <br/>
                            <label>Nombres: </label>
                            <br/> 
                            <input type="text" className="form-control"  value={cookie.get('Nombres')+cookie.get('ApPaterno')+" "+cookie.get('ApMaterno')} name="Nombres" readOnly />
                            <br/>
                            <label>DNI: </label>
                            <br/>
                            <input type="text" className="form-control" value={cookie.get('DNI')} name="dni" readOnly/>
                            <br/>
                
                            
              
                            </Col>
                            <Col>
                            
                            <label>Correo: </label>
                            <br/> 
                            <input type="email" className="form-control" value={cookie.get('Categoria')} name="correo" />
                            <br/>       
                            <label>Celular :</label>
                            <br />
                            <input type="text" className="form-control" value={cookie.get('Celular')} name="telefono" />
                            <br/>
                            <label htmlFor="">Direccion</label>
                            <input type="text" className="form-control" value={cookie.get('Direccion')} name="direccion"/>
                            </Col>
                        </Row>
                                         
                              
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" >Editar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEditarContra} centered>
                    <ModalHeader>Editar contraseña</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Col>
                            <Row>
                            <label> Ingrese contraseña actual</label>
                            <br/> 
                            <input type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setPassNow(e.target.value)}/>
                            <br/>
                            </Row>
                            <Row>
                            <label>Ingrese contraseña nueva</label>
                            <br/> 
                            <input type="text" className="form-control" name="IDEstudiante" onChange={ (e) => setPassNew(e.target.value)}/>
                            <br/>
                            </Row>
                        </Col>  
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" onClick={()=>putPass()}>Editar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalEditarContra()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEditarFoto} centered>
                    <ModalHeader>Elija la fotografia</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <Col>
                            <Row>
                            
                            <br/> 
                            <input type="file" onChange={handlechange}
                                        
                                    />
                            <br/>
                            </Row>
                        </Col>  
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btnColoG" onClick={()=>peticionPut()} >Editar</button>{""}
                    <button className="btnColoC " onClick={()=>abrirCerrarModalEditarFoto()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal  isOpen={successView} centered>
                    <ModalHeader>
                        <div className="text-center">
                            <FaIcons.FaCheckCircle className="logoEditContra1 "/>
                        </div>
                        <div className="text-center lblModalContra1">
                            <b> la contraseña se actualizo correctamente</b>
                        </div>
                    </ModalHeader>
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>{abrirCerrarModalSuccess();abrirCerrarModalEditarContra();}}/>
                    </ModalFooter>
                </Modal>
                <Modal  isOpen={errorView} centered>
                    <ModalHeader>
                    <div className="text-center">
                            <MdIcons.MdError className="logoEditContra text-danger"/>
                        </div>
                        <div className="text-center lblModalContra">
                            <b> la contraseña actual no es correcta</b>
                        </div>
                    </ModalHeader>
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalError()}/>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default TutorPerfil

