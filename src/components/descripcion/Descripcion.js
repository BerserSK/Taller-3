import logov from "./Hotelia negro vertical.svg";
import "./Descripcion.css"
function Descripcion(){
    return( 
      <section id="descripcion">
        <div className="text-descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui maxime minima iure, 
          ullam rerum similique itaque unde tenetur tempore natus. Reprehenderit, quaerat? Veniam
          consequatur quos magni molestias doloribus ratione ut cumque porro cum numquam, 
          praesentium, atque eos nobis sequi libero dicta doloremque ab ducimus alias beatae 
          maxime eum consectetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui maxime minima iure, 
          ullam rerum similique itaque unde tenetur tempore natus. Reprehenderit, quaerat? Veniam
          consequatur quos magni molestias doloribus ratione ut cumque porro cum numquam.
        </div>
        <div className="img-descripcion">
          <img src={logov} alt="Logo Hotelia"/>
        </div>
      </section>
    );
}

export default Descripcion