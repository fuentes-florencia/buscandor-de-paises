export const MostrarResultado = ({ resultado }) => {

    return <div className="row">
        {resultado.map((element, index) => {
            console.log (element.flags.svg)
            
            return <div className="col-4" key={index}>
                <h3>Nombre del pais: {element.name.common}</h3>
                <p>Población: {element.population}</p>
                <p></p>
                <img src={element.flags.svg} height={30} alt="" />
            </div>

        })}

    </div>
}