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

