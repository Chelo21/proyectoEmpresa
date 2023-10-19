import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom"
import './Cabecera.css';

const Cabecera = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <header className="Cabecera">
                <h1 className="Cabecera-h1">
                    <a href="#" className="Cabecera-a">
                        Suscríbete
                    </a>
                </h1>

                <button
                    onClick={toggleMenu}
                    className="Cabecera-button">
                    <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                    <ul className="Cabecera-ul">
                        <li className="Cabecera-li"><NavLink to="/">Inicio</NavLink></li>
                        <li className="Cabecera-li"><NavLink to="empleados">Empleados</NavLink></li>
                        <li className="Cabecera-li"><NavLink to="/">Empleados</NavLink></li>
                        <li className="Cabecera-li"><NavLink to="/">Empleados</NavLink></li>


{/* 
                        <li className="Cabecera-li"><a href="!#" className="Cabecera-a">Haberes</a></li>
                        <li className="Cabecera-li"><a href="!#" className="Cabecera-a">Descuentos</a></li>
                        <li className="Cabecera-li"><a href="!#" className="Cabecera-a">Listados</a></li>
                        <li className="Cabecera-li"><a href="!#" className="Cabecera-a">IMP. Suedos</a></li> */}
                    </ul>
                </nav>

            </header>
            <Outlet />
        </div>
    )
}

export default Cabecera