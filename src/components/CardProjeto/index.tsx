import { Link } from "react-router-dom";
import type { Projeto } from "../../types/types";

interface Props {
  project: Projeto;
}

const CardProjeto = ({ project }: Props) => {
  return (
    <div
      className="border border-solid rounded-lg overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg bg-bg-primary"
      style={{
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img
          src={project.imagem}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: 'var(--primary)' }}
        >
          {project.titulo}
        </h3>

        <p
          className="text-md mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.descricao}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-sm uppercase tracking-wider border"
              style={{
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                color: 'var(--accent)',
                borderColor: 'rgba(var(--accent-rgb), 0.2)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">

          {project.link && (
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-md border transition-all duration-150 hover:border-accent hover:text-accent"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              Link
            </Link>
          )}

          {project.codigo && (
            <Link
              to={project.codigo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-md border transition-all duration-150 hover:border-accent hover:text-accent"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              Código 
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default CardProjeto;
