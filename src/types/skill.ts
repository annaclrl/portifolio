export interface Skill {
  nome: string;
  tags: string[];
}

export interface SkillType {
  titulo: string;
  icon: string;
  skills: Skill[];
}