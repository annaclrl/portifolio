import type { Project } from "../../types/types";

const CardProjeto = (project: Project) => {

    return (
        <div>
            <div>
                <div>{project.imagem}</div>
            </div>

            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div>
                    {project.tech.map((tag, index) => (
                        <span key={index}> {tag} </span>
                    ))}
                </div>

                <div>
                    <button> Detalhes </button>
                    <button> Código </button>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;