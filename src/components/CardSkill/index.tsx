import { useEffect, useRef, useState } from 'react';
import type { SkillType as SkillType } from '../../types/types';

interface SkillProps {
  category: SkillType;
}

const CardSkill = ({ category }: SkillProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={skillRef}
      className="border border-solid rounded-lg p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-accent bg-bg-primary"
      style={{ 
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div 
          className="w-10 h-10 rounded-md flex items-center justify-center text-white text-xl"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--primary))'
          }}
        >
          {category.icone}
        </div>
        <h3 
          className="text-lg font-semibold"
          style={{ color: 'var(--primary)' }}
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
                style={{ color: 'var(--primary)' }}
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