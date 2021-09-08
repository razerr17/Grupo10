import React from 'react'
import AdminBar from '../Administracion/AdminBar'
import { Col ,Row} from 'react-bootstrap'
import * as BiIcons from "react-icons/bi"

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const storage= firebase.storage();
const AdminPerfil = () => {
       
   let image="./imagenes/FondoTadoPerfil.JPG"; 
   let referencia="1425@asdada.com" 

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
        imgw.src=url;
        console.log(image)
      }).catch(function(error) {
        // Handle any errors
      });
       
   }
    
    return (
        <div>
            <AdminBar/>
            <div className="contenido">
                    <div className="Principal2 ">
                        <img className="portada"src="./imagenes/FondoTadoPerfil.JPG" alt="" />
                        <div>
            <img
              className="sizephoto"
              src="./imagenes/PerfilTutor.JPG"
              id='img'
              alt=""
            ></img>
            <input
              type="file"
             onChange={handlechange}
              style={{
                
              
                position: "relative",
                top: "50%",
                left: "50%",
                marginLeft: "0px",
                backgroundColor: "#ed9b40",
                borderRadius: "20px",
                transform: "translate(-10%,250%)",
                overflow:'hidden'
            
                //width:"90px"
              }
            }
            
            ></input>
          </div>
                        <div className ="contDatos">
                            <label className="lbldatos" htmlFor=""><b>Datos Personales :</b></label>
                            <Row className=" position-relative">
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Nombres :  </b></label>
                                        <label className="lbldat">  MELISSA BRIGGITE</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Apellidos :  </b></label>
                                        <label className="lbldat">  ESPEJO FRANCO</label>
                                    </div>
                                     <div>
                                        <label htmlFor=""><b>Email :  </b></label>
                                        <label className="lbldat"> 171258@unsaac.edu.pe</label>
                                    </div>
                                </Col>
                                <Col className="column1 ">
                                    <div>
                                        <label htmlFor=""><b>Direccion :  </b></label>
                                        <label className="lbldat"> JR. MICAELA BASTIDAS 221 - SANTIAGO</label>
                                    </div>
                                    <div>
                                        <label htmlFor=""><b>Celular :  </b></label>
                                        <label className="lbldat">  987654321</label>
                                    </div>

                                </Col>
                            </Row>
                            <button className="btnEditar">
                                Editar
                                <BiIcons.BiEdit className="iconSave"/>
                            </button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default AdminPerfil
