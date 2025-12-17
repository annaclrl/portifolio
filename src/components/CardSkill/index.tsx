import type { SkillType as SkillType } from '../../types/skill';

interface SkillProps {
  category: SkillType;
}

const CardSkill = ({ category }: SkillProps) => {
  return (
    <div
      className="border border-solid rounded-lg p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-accent bg-bg-primary"
      style={{
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',

      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center"
          style={{
            background: 'var(--accent)'
          }}
        >
          <img
            src={category.icon}
            alt={`Ícone de ${category.titulo}`}
            className="w-6 h-6 object-contain"
          />
        </div>

        <h3
          className="text-3xl font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          {category.titulo}
        </h3>
      </div>

      <div className="space-y-6">
        {category.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {skill.nome}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {skill.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 rounded-sm border"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkill;