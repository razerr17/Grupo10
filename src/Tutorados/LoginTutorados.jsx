import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import * as ImIcons from "react-icons/im"
import {useState,useEffect} from 'react';
import axios from 'axios'
import {Modal,ModalFooter,ModalHeader} from 'reactstrap'
import Cookies from 'universal-cookie/es6';
import '../styles/LoginTutorados.css'
const LoginTutorados = (props) => {
    const baseURL="http://localhost:4000/loginEstudiantes";
    const cookies=new Cookies();
    const[user,setUser]=useState('')
    const[password,setPassword]=useState('')
    const [mostrar,setMostrar]=useState(false)
    const CambiarMostrar = () => setMostrar(!mostrar);
    const[warningView,setWarningview]=useState(false);
    const abrirCerrarModalWarning=()=>{
        setWarningview(!warningView);
      }
    const Login=async()=>{
        await axios.post(baseURL,{Usuario:user,Contrasenia:password})
        .then(response=>{
            return response.data;
        }).then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('CodEstudiante',respuesta.CodEstudiante,{path:'/'});
                cookies.set('Nombres',respuesta.Nombres,{path:'/'});
                cookies.set('ApPaterno',respuesta.ApPaterno,{path:'/'});
                cookies.set('ApMaterno',respuesta.ApMaterno,{path:'/'});       
                cookies.set('Celular',respuesta.Celular,{path:'/'});
                cookies.set('Email',respuesta.Email,{path:'/'});
                cookies.set('Direccion',respuesta.Direccion,{path:'/'});
                cookies.set('SemestreIngreso',respuesta.SemestreIngreso,{path:'/'});
                props.history.push('/Tutorado_Menu');
            }
            else{
                abrirCerrarModalWarning();
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const comprobar=()=>{
        if(user===''||password===''){
            abrirCerrarModalWarning();
        }
        else {
            Login()
        }
    }
    useEffect(()=>{
        if(cookies.get('CodEstudiante')){
            props.history.push('/Tutorado_Menu');
        }
    })
    return (
        <div className="fondoLog1 ">
            <div className="regresar">
                    <Link to="/LogMenu" style={{ textDecoration: 'none' }}>
                        <ImIcons.ImCross className="icono"/>
                    </Link>
                </div>
            <br />
            <div className="Principal" style={{backgroundColor:'white'}}>  
                <div className="containerLogin">
                    <h2 className="title">Tutorado</h2>
                    <img className="lo"src="../imagenes/Tutorado.JPG" alt=""/>
                    <hr />
                    <div className="form-group">
                        <label><b>Ingrese Usuario:</b> </label>
                        <br />
                        <input
                        type="text"
                        className="form-control"
                        name="username" 
                        onChange={ (e) => setUser(e.target.value)} 
                        placeholder="Usuario"
                        />
                        <br />
                        <label> <b>Ingrese Contraseña:</b>  </label>
                        <br />
                        <input
                        type={mostrar ? 'text' : 'password'}
                        className="form-control"
                        onChange={ (e) => setPassword(e.target.value)}
                        name="password"          
                        placeholder={mostrar ? 'ingrese aqui' : '****************'}
                        />
                        <Row>
                            <Col className="col-2 ">
                                <input  clasName="inputM" type="checkbox" onChange={CambiarMostrar}/>
                            </Col>
                            <Col className="col-5">
                               <p className="fst-italic">mostrar contraseña</p> 
                            </Col>
                        </Row>
                        <br />
                        <Link  style={{ textDecoration: 'none' }}>
                            <button style={{backgroundColor:'#ffc107'}} className="ingresar" onClick={comprobar} >Iniciar Sesión</button>
                        </Link>
                    </div>
                </div>
                <Modal  isOpen={warningView} centered>
                    <ModalHeader>
                        <ImIcons.ImWarning />   La contraseña o el usuario no son correctos
                    </ModalHeader>
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalWarning()}/>
                    </ModalFooter>
                </Modal>
            </div>
           
        </div>
    )
}

export default LoginTutorados
