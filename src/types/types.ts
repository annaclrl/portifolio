export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tech: string[];
  imagem: string;
  link: string;    
  codigo: string;  
}

export interface Experiencia {
  data: string;
  titulo: string;
  descricao: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
  tags: string[];
}

export interface SkillType {
  titulo: string;
  icone: string;
  skills: Skill[];
}