import React, {useState} from 'react'
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as ImIcons from "react-icons/im"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Prueba.css'

function Side() {

   
    const [dropdown,setDropdown]=useState(false)
    const abrirCerraDropdown=()=>{
        setDropdown(!dropdown);
      }
    return(
        <div className="body">
            <input type="checkbox"id="check" />
            <header className="row ">
                <label className="col" for="check">
                    <i id="sidebar_btn"><FaIcons.FaBars/></i>
                </label>
                <div className="logo col-9">
                  <img className="logo mx-auto" src="../logito.png" alt="Logo"/> 
                </div>
                <Link to='#' className='menu-bars'>
                <AiIcons.AiFillBell />
                </Link>
                <Dropdown className="" isOpen={dropdown} toggle={abrirCerraDropdown}direction="left">
                    <DropdownToggle  className="bg-dark">
                        <img className="perfil" src="../perfil.png" alt=""/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Ir a Perfil</DropdownItem>
                        <DropdownItem><Link to="/" className="text-dark" >Cerrar Sesion</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                
            </header>
            <div className="sidebar">
                <Link to="/Menu"  style={{ textDecoration: 'none' }} title="Inicio"><IoIcons.IoIosHome/><span>Inicio</span></Link>
                <Link to="/Menu/ventas"  style={{ textDecoration: 'none' }} title="Nuevas Ventas"><MdIcons.MdAddShoppingCart/><span>Nueva ventas</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Registro ventas"><BsIcons.BsReverseLayoutTextWindowReverse/><span>Registro ventas</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Inventario"><FaIcons.FaBoxes/><span>Inventario</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Compras"><FaIcons.FaShoppingBag/><span>Compras</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Proveedores"><FaIcons.FaTruckMoving/><span>Proveedores</span></Link>
                <Link to="/Menu/clientes" style={{ textDecoration: 'none' }} title="Clientes"><BsIcons.BsPersonLinesFill/><span>Clientes</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Reportes"><ImIcons.ImStatsBars/><span>Reportes</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Ingresos/gastos"><FaIcons.FaMoneyBillAlt/><span>Ingresos/Gastos</span></Link>
                <Link to="#" style={{ textDecoration: 'none' }} title="Agendas/tareas"><AiIcons.AiFillSchedule/><span>Agendas/Tareas</span></Link>

            </div>
            
        </div>
    )
}
export default Side