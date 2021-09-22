
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import slide1 from '../images/slider1.jpg'
import slide2 from '../images/slider2.jpg'
import slide3 from '../images/slider3.jpg'

const main = () => {
    return (
        <div>
        
        
        <div className="bod1">
            
            
            
            
            <ul className="sl" >
                <li className="li1">  <img  className="img" src={slide3} alt=""    />
                   
                </li>

                <li className="li1">  <img  className="img" src={slide2} alt="" />
                </li>

                <li className="li1">  <img  className="img" src={slide1} alt="" /></li>


            </ul>
             
            <div className="Centrar">
                <h1 className="h1">SISTEMA DE TUTORIAS</h1>
                <h3 className="h3">Ingenieria Informatica y de Sistemas</h3>
                <p className="p">
                Integer elementum nisl volutpat mi convallis cursus. Donec mattis enim ut nisi posuere, at 
                mattis magna imperdiet. Mauris venenatis fringilla mi, a elementum magna vestibulum ut. 
                Etiam accumsan dignissim porta. Ut pretium sapien sit amet laoreet gravida. 
                </p>
                <Link to="/LogMenu" style={{ textDecoration: 'none' }}>
                    <button className="btna" >
                        Ingresar
                    </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default main
