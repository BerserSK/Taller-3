import "./Error404.css";
import error from "./img1.svg";
import { Link } from "react-router-dom";
function Er404(){
    return(
        <div className="container">
            <img src={error} alt="Imgaen error404"/>
            <h1>La pagina que ha solicitado no se encuentra disponible</h1>
            <div className="boton">
                <button><Link to="/" className="menu-item">Volver atras</Link></button>
            </div>
        </div>
    );
}
export default Er404;