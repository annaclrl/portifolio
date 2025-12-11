export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  imagem: string;
}
