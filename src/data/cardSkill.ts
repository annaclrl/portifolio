import CodeIcon from "../assets/icon/icon-code.png";
import BackEnd from "../assets/icon/icon-back-end.png";
import FrontEnd from "../assets/icon/icon-front-end.png";
import Database from "../assets/icon/icon-banco-dados.png";

export const skills = [
  {
    titulo: "Linguagens",
    icon: CodeIcon,
    skills: [
      { nome: "Java", tags: ["POO", "Collections", "Streams"] },
      { nome: "JavaScript", tags: ["Async/Await", "DOM"] },
      { nome: "TypeScript", tags: ["Tipagem", "Interfaces", "Types"] }
    ]
  },
  {
    titulo: "Back-end",
    icon: BackEnd,
    skills: [
      { nome: "Spring Boot", tags: ["APIs REST", "JPA", "Validações"] },
      { nome: "Quarkus", tags: ["Config", "Dev Mode"] }
    ]
  },
  {
    titulo: "Front-end",
    icon: FrontEnd,
    skills: [
      { nome: "React", tags: ["Hooks", "Componentização", "Props"] },
      { nome: "Tailwind CSS", tags: ["Responsividade", "Dark Mode"] }
    ]
  },
  {
    titulo: "Banco de Dados",
    icon: Database,
    skills: [
      { nome: "SQL", tags: ["Modelagem", "DML", "DDL", "DRS", "Oracle"] }
    ]
  }
];
