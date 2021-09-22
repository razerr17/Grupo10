import React from 'react'
import TutorBar from './Tutorbar'
import * as AiIcons from "react-icons/ai"
const TutorEstudiantesAyudantes = () => {
    return (
        <div>
            <TutorBar nombrePage={"Estudiantes Ayudantes"} />
            <div className="contenido">
                <div className="Principal2">
                    <div className="tops">
                        <label className="lblBuscar"> <b>Buscar estudiante ayudante :</b></label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Ingrese Nombre" aria-label="Ingrese Nombre" aria-describedby="button-addon2"/>
                            <button className="btnBuscarNombre" type="button" id="button-addon2">
                                <b>Buscar</b>
                                <AiIcons.AiOutlineFileSearch className="IconoBuscar"/>
                            </button>
                        </div>
                    </div>  
                    <div className="bots">
                    <div className="col table-scroll scrollbar"> 
                                    <table className="table table-bordered bg-light ">
                                        <thead style={{backgroundColor:'#85b7e9'}}> 
                                            <tr>
                                                <th>Nro</th>
                                                <th>Curso</th>
                                                <th>Estudiante</th>
                                                <th>Detalles</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>NUCLEO</td>
                                                <td>1200.00</td>
                                                <td><button>ver</button></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorEstudiantesAyudantes
