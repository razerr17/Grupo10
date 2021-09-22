import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import * as ImIcons from "react-icons/im"
import {useState,useEffect} from 'react';
import axios from 'axios'
import {Modal,ModalFooter,ModalHeader} from 'reactstrap'
import Cookies from 'universal-cookie/es6';
import '../styles/LoginTutorados.css'
const LoginTutor = (props)=>{
    const baseURL="https://backendtutorias.herokuapp.com/loginDocente";
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
                cookies.set('CodDocente',respuesta.CodDocente,{path:'/'});
                cookies.set('Nombres',respuesta.Nombres,{path:'/'});
                cookies.set('ApPaterno',respuesta.ApPaterno,{path:'/'});
                cookies.set('ApMaterno',respuesta.ApMaterno,{path:'/'});
                cookies.set('DNI',respuesta.DNI,{path:'/'});
                cookies.set('Categoria',respuesta.Categoria,{path:'/'});
                cookies.set('Celular',respuesta.Celular,{path:'/'});
                cookies.set('Email',respuesta.Email,{path:'/'});
                cookies.set('Direccion',respuesta.Direccion,{path:'/'});
                cookies.set('Estutor',respuesta.EsTutor,{path:'/'});
                props.history.push('/Tutor_Menu');
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
        console.log(user)
        console.log(password)
        if(user===''||password===''){
            abrirCerrarModalWarning();
        }
        else {
            Login()
        }
    }
    useEffect(()=>{
        if(cookies.get('CodDocente')){
            props.history.push('/Tutor_Menu');
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
            <div className="Principal">  
                <div className="containerLogin">
                    <h2 className="title">Tutor</h2>
                    <img className="lo"src="../imagenes/education.png" alt=""/>
                    <hr />
                    <div className="form-group">
                        <label className="inputM"><b>Ingrese Usuario:</b> </label>
                        <br />
                        <input
                        type="text"
                        className="form-control"
                        name="username" 
                        onChange={ (e) => setUser(e.target.value)} 
                        placeholder="Usuario"
                        />
                        <br />
                        <label className="inputM"> <b>Ingrese Contraseña:</b>  </label>
                        <br />
                        <input
                        type={mostrar ? 'text' : 'password'}
                        className="form-control"
                        onChange={ (e) => setPassword(e.target.value)}
                        name="password"          
                        placeholder={mostrar ? 'Ingrese su contraseña' : '***********'}
                        />
                        <Row >
                        <label className="inputM" >
                        <input type="checkbox" onChange={CambiarMostrar} value="remember-me"/> Mostrar contraseña
                        </label>
                        </Row>
                        <br />
                        <Link  style={{ textDecoration: 'none' }}>
                            <button className="ingresar" onClick={comprobar} >Iniciar Sesión</button>
                        </Link>
                    </div>
                </div>
                <Modal  isOpen={warningView} centered>
                    <ModalHeader>
                        <ImIcons.ImWarning /> La contraseña o el usuario no son correctos
                    </ModalHeader>
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalWarning()}/>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default LoginTutor
