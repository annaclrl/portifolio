import type { Projeto } from "../types/projeto";
import imgJps from "../assets/image/imagem-jps.png";
import imgNeuron from "../assets/image/imagem-neuron.png";
import imgJpsBack from "../assets/image/imagem-jps-back.png";
import imgNeuronBack from "../assets/image/imagem-neuron-back.png";

export const projetos: Projeto[] = [
  {
    titulo: "Juntos Pela Saúde - Front-end",
    descricao: "Juntos Pela Saúde é um sistema desenvolvido para auxiliar pacientes com baixa afinidade digital no agendamento e realização de teleconsultas.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    imagem: imgJps,
    link: "https://juntos-pela-saude-front-end.vercel.app/",
    codigo: "https://github.com/annaclrl/juntos-pela-saude-front-end",
  },
  {
    titulo: "Juntos Pela Saúde - Back-end",
    descricao: "Juntos Pela Saúde é um sistema desenvolvido para auxiliar pacientes com baixa afinidade digital no agendamento e realização de teleconsultas.",
    tech: ["Java", "Quarkus", "SQLOracle"],
    imagem: imgJpsBack,
    codigo: "https://github.com/annaclrl/juntos-pela-saude-java-api"
  },
  {
    titulo: "Neuron - Front-end",
    descricao: "Neuron é uma plataforma web desenvolvida para promover o bem-estar emocional de colaboradores no ambiente corporativo.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    imagem: imgNeuron,
    link: "https://neuron-front-end-nine.vercel.app/",
    codigo: "https://github.com/annaclrl/neuron-front-end",
  },
  {
    titulo: "Neuron - Back-end",
    descricao: "Neuron é uma plataforma web desenvolvida para promover o bem-estar emocional de colaboradores no ambiente corporativo.",
    tech: ["Java", "Quarkus", "SQLOracle"],
    imagem: imgNeuronBack,
    codigo: "https://github.com/Duartegdm/NeuronAPI",
  },
];