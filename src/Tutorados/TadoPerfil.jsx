import React ,{useEffect}from 'react'
import TutoradoBar from './TutoradoBar'
import '../styles/TadoPerfil.css'
import * as BiIcons from "react-icons/bi"
import Cookies from 'universal-cookie'
import { Col ,Row} from 'react-bootstrap'
const TadoPerfil = (props) => {
    
    const cookie =new Cookies();
    useEffect(()=>{
        if(!cookie.get('CodEstudiante')){
            props.history.push('/LoginTutorados');
        }
    })
    return (
        <div >
            <TutoradoBar nombrePage={"Perfil"}/>
            <div className="contenido">
                    <div className="Principal2 ">
                        <img className="portada"src="./imagenes/FondoTadoPerfil.JPG" alt="" />
                        <img className="sizephoto" src="./imagenes/PerfilPrueba.JPG" alt="" />
                        <div className ="contDatos">
                            <label className="lbldatos" htmlFor=""><b>Datos Personales :</b></label>
                            <Row className=" position-relative">
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Nombres :  </b></label>
                                        <label className="lbldat">   {cookie.get('Nombres')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Apellidos :  </b></label>
                                        <label className="lbldat">  {cookie.get('ApPaterno')+" "+cookie.get('ApMaterno')}</label>
                                    </div>
                                     <div>
                                        <label htmlFor=""><b>Email :  </b></label>
                                        <label className="lbldat"> {cookie.get('Email')}</label>
                                    </div>
                                </Col>
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Direccion :  </b></label>
                                        <label className="lbldat"> {cookie.get('Direccion')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Celular :  </b></label>
                                        <label className="lbldat">  {cookie.get('Celular')}</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Semestre de ingreso:  </b></label>
                                        <label className="lbldat">  {cookie.get('SemestreIngreso')}</label>
                                    </div>

                                </Col>
                            </Row>
                            <button style={{backgroundColor:'#000a25',color:'white'}} className="btnEditar">
                                Editar
                                <BiIcons.BiEdit className="iconSave"/>
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default TadoPerfil
