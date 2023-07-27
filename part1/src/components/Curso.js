
const Header = ({ nombre }) => {
    
    return (
        <h1>{nombre}</h1>
    );
}

const Parte = ({ parte }) => {
    return (
        <p>
            {parte.nombre} - Ejercicios: {parte.ejercicios}
        </p>
    );
}

const Contenido = ({ partes }) => {
    
    return (
        <div>
            {
                partes.map(parte => (
                    <Parte key={parte.id} parte={parte} />
                ))
            }
        </div>
    );
}

const Total = ({ partes }) => {
    let suma = 0;
    partes.map(parte => (
        suma = suma + parte.ejercicios
    ))
    
    return (    
        <p>Cantidad total de ejercicios: {suma}</p>
    );
}

export const Curso = ({ curso }) => {
    
    return (
    <div>
        <Header nombre={curso.nombre} />
        <Contenido partes={curso.partes} />
        <Total partes={curso.partes}/>
    </div>
    )
}