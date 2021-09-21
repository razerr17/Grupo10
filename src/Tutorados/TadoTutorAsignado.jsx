import React,{useEffect, useState} from 'react'
import TutoradoBar from './TutoradoBar'
import '../styles/TadoTutorAsignado.css'
import { Col ,Row} from 'react-bootstrap'
import axios from 'axios'
import Cookies from 'universal-cookie'
const TadoTutorAsignado = () => {
    const cookie =new Cookies();
    const [data,setData]=useState([
        {
            CodDocente:"",
            Nombres:"",
            ApPaterno:"",
            ApMaterno: "",
            DNI: "",
            Categoria:"",
            Celular: "",
            Email: "",
            Direccion: "",
            EsTutor: ""
        }
    ])
    const baseUrlFoto=`http://localhost:4000/FotoPerfil`;
    const[direccionUrl,setDireccionUrl]=useState([{
        Foto:"./imagenes/carga.gif"
    
    }])
    const baseUrl=`http://localhost:4000/asignaciones`
    const peticionGetDatos=async()=>{
        await axios.get(baseUrl+`/${cookie.get('CodEstudiante')}`)
        .then(response=>{
            setData(response.data)
            if(response.data>0){
                console.log(response.data[0].Email)
                peticionGet(response.data[0].Email);
            }
            else{
                console.log("no tiene tutor p pulpin")
                setDireccionUrl([{Foto:"./imagenes/perfil_blanco.png"}])
            }
            
        }).catch(error=>{
            console.log(error)
        })
    }
    const peticionGet=async(email)=>{
        await axios.get(baseUrlFoto+`/${email}`)
      .then(response=>{
        setDireccionUrl(response.data);
        
      }).catch(error=>{
        console.log(error);
      })
    }
    useEffect(()=>{
        peticionGetDatos();        
    })
    return (
        <div>
            <TutoradoBar nombrePage={"Tutor Asignado"}/>
            <div className="contenido">
                <div className="Principal2">
                    <label className="lblTuAsignado"><b>Datos del Tutor :</b></label>
                    <div className="partTopTutor">
                        {
                            data.map((dato=>(
                                <Row className="">
                                <Col className="col-5 ">
                                    <div className="celda">
                                        <label htmlFor=""><b>Nombres :  </b></label>
                                        <label className="lblda"> {dato.Nombres}</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Apellidos :  </b></label>
                                        <label className="lblda">  {dato.ApPaterno} {dato.ApMaterno}</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Email :  </b></label>
                                        <label className="lblda"> {dato.Email}</label>
                                    </div>
                                </Col>
                                <Col className="col-7">
                                    <div className="celda">
                                        <label htmlFor=""><b>Direccion:  </b></label>
                                        <label className="lblda">   {dato.Direccion}</label>
                                    </div>
                                    <div className="celda">
                                        <label htmlFor=""><b>Celular :  </b></label>
                                        <label className="lblda">  {dato.Celular}</label>
                                    </div>
                                </Col>
                            </Row>
                            )))
                        }
                        {
                            direccionUrl.map((foto)=>(
                                <img className="cardImagenPerfil" src={foto.Foto} alt="" />
                            ))
                        }
                    </div>
                    <label className="lblTuAsignado"><b>Solicitar Cambio de Tutor :</b></label>
                    <div className="partBotTutor">
                        <div className="cardDatosTutor">
                            <div class="input-group " >
                                <span class="input-group-text">Ingrese el motivo :</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div> 
                        </div>
                    </div>
                    <div >
                        <button className="btnCambiarTutor"><b>Enviar</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default TadoTutorAsignado
