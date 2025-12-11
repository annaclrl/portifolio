import type { Projeto } from "../types/types";
import imgJps from "../assets/imagem-jps.png";
import imgNeuron from "../assets/imagem-neuron.png";

export const projetos: Projeto[] = [
    {
      titulo: "Juntos Pela Saúde",
      descricao: "Juntos Pela Saúde é um sistema desenvolvido para auxiliar pacientes com baixa afinidade digital no agendamento e realização de teleconsultas.",
      tech: ["React", "TypeScript", "TailwindCSS", "Java", "Quarkus", "SQLOracle"],
      imagem: imgJps,
      link: "https://juntos-pela-saude-front-end.vercel.app/",
      codigo: "https://github.com/annaclrl/juntos-pela-saude-front-end",
    },
    {
      titulo: "Neuron",
      descricao: "Neuron é uma plataforma web desenvolvida para promover o bem-estar emocional de colaboradores no ambiente corporativo.",
      tech: ["React", "TypeScript", "TailwindCSS", "Java", "Quarkus", "SQLOracle"],
      imagem: imgNeuron,
      link:"https://neuron-front-end-nine.vercel.app/",
      codigo: "https://github.com/annaclrl/neuron-front-end",
    },
  ];