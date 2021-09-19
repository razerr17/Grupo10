
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
const main = () => {
    return (
        <div className="bod">
            <div className="Centrar">
                <h1 className="h1">SISTEMA DE TUTORIAS</h1>
                <h3 className="h3">Ingenieria informatica y de sistemas</h3>
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
    )
}

export default main
