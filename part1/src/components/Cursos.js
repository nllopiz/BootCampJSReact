import { Curso } from "./Curso"

export const Cursos = ({cursos}) => {
    
    return (
        <div>
            {
                cursos.map(curso => (
                    <Curso key={curso.id} curso={curso} />
                ))
                
            }
            
        </div>
    )
}