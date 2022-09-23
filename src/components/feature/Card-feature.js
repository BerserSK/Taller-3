import "./Card-feature.css"
function CardFeature({texto, background, icono}){
    return(
        <article>
            <div className={background? "feature-box box-blue":"feature-box box-dark"}>
                <i className={icono}></i>
                <h3>{texto}</h3>
            </div>
        </article>
    )
}

export default CardFeature;