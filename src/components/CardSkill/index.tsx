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
    <div ref={skillRef} data-visible={isVisible}>
      <div>
        <div>
          {category.icone}
        </div>
        <h3>{category.titulo}</h3>
      </div>

      <div>
        {category.skills.map((skill, index) => (
          <div key={index}>
            <span>{skill.name}</span>

            <div>
              {skill.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
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
