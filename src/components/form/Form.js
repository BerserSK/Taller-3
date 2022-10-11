import "./Form.css";
function Form(){
    return(
        <section className="body-form">
            <div className="container">
                <form class="login-form">
                    <img src="img/login/vector-login.svg" class="blanco"/>
                    <img src="img/login/Hotelia horizontal negro.svg" class="hotel"/>
                    <i class="fa-solid fa-user"></i>
                    <label for="text">Usuario</label>
                    <input type="text" name="Usuario" class="box"/>
                    <label for="password">Contraseña</label>
                    <input type="password" name="Contraseña" class="box"/>
                    <input type="submit" value="Ingresar" id="submit"/>
                </form>
            </div>  
        </section>
    );
}
export default Form;