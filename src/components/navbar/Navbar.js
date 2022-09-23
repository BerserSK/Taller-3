import { Link } from "react-router-dom";
import logoh from "./Hoteliahorizontalblanco.svg";
import "./Navbar.css"
function Navbar(){
    return(
        <header>
            <div className="logo">
                <img src={logoh} alt="Logo hotelia blanco"></img>
                <i class="fa-solid fa-bars"></i>
            </div>
            <nav>
                <Link to="/" className="menu-item">Inicio</Link>
                <Link to="/habitaciones" className="menu-item">Habitaciones</Link>
                <Link to="/habitacion/1" className="menu-item">Habitacion XXX</Link>
                <hr class="menu-hr" noshade=""/>
                <Link to="/login" className="btn-azul">
                    <i class="fa-solid fa-user"></i>
                    Iniciar Sesion
                </Link>
            </nav>
        </header>
    )
}
export default Navbar;