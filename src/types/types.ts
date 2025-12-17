export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface Projeto {
  titulo: string;
  descricao: string;
  tech: string[];
  imagem: string;
  link?: string;    
  codigo: string;  
}

export interface Experiencia {
  data: string;
  titulo: string;
  descricao: string;
}

export interface Skill {
  nome: string;
  tags: string[];
}

export interface SkillType {
  titulo: string;
  icon: string;
  skills: Skill[];
}

export type ContatoItem = {
  icone: string;
  titulo: string;
  conteudo: string;
}