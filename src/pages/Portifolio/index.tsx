import { Link } from "react-router-dom";
import Logo from '../../assets/image/logo.png'
import MinhaFoto from '../../assets/image/minha-foto.png'
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import CardProjeto from "../../components/CardProjeto";
import { projetos } from "../../data/cardProjeto";
import { experiencias } from "../../data/expericenica";
import CardSkill from "../../components/CardSkill";
import { skills } from "../../data/cardSkill";
import type { ContactItem } from "../../types/types";

  // Contatos
  const contactItems: ContactItem[] = [
    { icon: "✉️", title: "Email", content: "anna.clara@example.com" },
    { icon: "📍", title: "Localização", content: "São Paulo, Brasil" },
    { icon: "💼", title: "Disponibilidade", content: "Aberto a oportunidades" }
  ];

  // Social links
  const socialLinks = ["GitHub", "LinkedIn", "Instagram"];

const Portifolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full">
      <header
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${scrolled
          ? 'border-b backdrop-blur-sm'
          : 'border-b border-transparent'
          }`}
        style={{
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          backgroundColor: scrolled
            ? theme === 'light'
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(13, 13, 13, 0.95)'
            : 'transparent',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
        }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex justify-between items-center">
            <Link
              to="#"
              className="text-xl font-bold"
              style={{ color: 'var(--primary)' }}
            >
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden flex flex-col gap-1 w-6 h-6"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-full h-0.5 transition-all duration-150 ${mobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
                  }`}
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
              <span
                className={`w-full h-0.5 transition-all duration-150 ${mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
              <span
                className={`w-full h-0.5 transition-all duration-150 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
                  }`}
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
            </button>

            <nav
              className={`md:flex gap-8 ${mobileMenuOpen ? 'flex' : 'hidden'
                } fixed md:static top-16 left-0 w-full md:w-auto p-8 md:p-0 flex-col md:flex-row md:items-center transition-all duration-300 ${mobileMenuOpen
                  ? 'translate-y-0 opacity-100 visible'
                  : 'md:translate-y-0 md:opacity-100 md:visible -translate-y-full opacity-0 invisible'
                }`}
              style={{
                backgroundColor: 'var(--bg-primary)',
                boxShadow: mobileMenuOpen ? 'var(--shadow-md)' : 'none',
                borderBottom: mobileMenuOpen ? '1px solid var(--border)' : 'none'
              }}
            >
              <Link
                to="#work"
                className="relative py-1 text-md transition-colors duration-300 hover:text-accent"
                style={{ color: 'var(--text-secondary)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('work');
                }}
              >
                Projetos
              </Link>
              <Link
                to="#about"
                className="relative py-1 text-md transition-colors duration-300 hover:text-accent"
                style={{ color: 'var(--text-secondary)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                Sobre
              </Link>
              <Link
                to="#skills"
                className="relative py-1 text-md transition-colors duration-300 hover:text-accent"
                style={{ color: 'var(--text-secondary)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                Skills
              </Link>
              <Link
                to="#contact"
                className="relative py-1 text-md transition-colors duration-300 hover:text-accent"
                style={{ color: 'var(--text-secondary)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contato
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-md border transition-all duration-150 hover:border-accent hover:text-accent"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)'
                }}
                onClick={toggleTheme}
                aria-label="Alternar tema"
              >
                <span>{theme === 'dark' ? '☼' : '☾'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 min-h-screen flex items-center relative w-full">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-12">
              <img
                src={MinhaFoto}
                alt="Minha Foto"
                className="rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
              />

              <div className="lg:w-2/3 order-2 lg:order-2">
                <span
                  className="text-md mb-4 block "
                  style={{ color: 'var(--accent)' }}
                >
                  Olá, eu sou
                </span>

                <h1
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Anna Clara
                </h1>

                <p
                  className="text-lg md:text-xl mb-10 max-w-4xl"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Sou uma desenvolvedora em início de carreira, com foco em criar soluções eficientes e funcionais por meio de código limpo, organizado e orientado a boas práticas. Busco unir lógica, design e experiência do usuário para entregar aplicações que realmente resolvem problemas.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button
                    className="px-10 py-5 text-sm font-medium uppercase tracking-wider rounded-md border transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                      borderColor: 'var(--accent)'
                    }}
                    onClick={() => scrollToSection('work')}
                  >
                    Ver Projetos
                  </button>
                  <button
                    className="px-10 py-5 text-sm font-medium uppercase tracking-wider rounded-md border transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-lg"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-primary)',
                    }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="scroll-hint absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
          style={{ color: 'var(--text-secondary)' }}
        >
          Role para explorar
          <div className="w-px h-10" style={{ backgroundColor: 'var(--accent)' }} />
        </div>
      </section>

      <section
        id="work"
        className="py-24 w-full"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="mb-20">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Projetos Desenvolvidos
            </h2>
            <p
              className="text-lg max-w-8xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Desenvolvo projetos que combinam tecnologia, design e resolução de problemas reais. Busco criar soluções funcionais, organizadas e centradas no usuário, aplicando práticas de desenvolvimento modernas e mantendo sempre um olhar crítico sobre experiência, acessibilidade e desempenho.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10" >
            {projetos.map((projeto, index) => (
              <CardProjeto key={index} project={projeto} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 w-full">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 
                className="text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: 'var(--primary)' }}
              >
                Sobre Mim
              </h2>
              
              <div 
                className="text-lg space-y-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                <p>Sou estudante de Análise e Desenvolvimento de Sistemas. Encontrei na tecnologia um espaço onde posso unir raciocínio lógico, criatividade e a vontade de construir soluções que façam diferença. Atualmente, direciono meus estudos para o desenvolvimento fullstack, explorando tanto a construção das interfaces quanto a estrutura interna das aplicações.</p>
                <p>Gosto de entender como cada camada de um sistema se conecta, do front-end, que entrega a experiência ao usuário, ao back-end, onde a lógica, os dados e a arquitetura tornam tudo possível. Por isso, venho estudando React, TypeScript, Java e bancos de dados, além de aprofundar conceitos de Programação Orientada a Objetos, modelagem e boas práticas de desenvolvimento.</p>
                <p>Ao longo da minha jornada acadêmica, participei de projetos multidisciplinares que me permitiram atuar em diferentes partes do processo: prototipação, desenvolvimento, integração e análise. Cada novo projeto se torna uma oportunidade de evoluir tecnicamente, aprimorar meu código e entender melhor como criar soluções completas e bem estruturadas.</p>
                <p>Sou uma pessoa organizada, curiosa e sempre em busca de crescimento. Prezo por clareza, propósito e qualidade em tudo que construo. Meu objetivo é me desenvolver cada vez mais como fullstack, unindo conhecimento técnico, lógica e criatividade para entregar aplicações úteis, eficientes e com impacto real.</p>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <h3 
                className="text-2xl font-bold mb-8"
                style={{ color: 'var(--primary)' }}
              >
                Linha do Tempo
              </h3>
              
              <div className="space-y-8">
                {experiencias.map((exp, index) => (
                  <div 
                    key={index}
                    className="pb-8 border-l-2 pl-6 relative"
                    style={{ 
                      borderColor: 'var(--accent)',
                    }}
                  >
                    <div 
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                      style={{ 
                        backgroundColor: 'var(--accent)',
                        border: '2px solid var(--bg-primary)'
                      }}
                    />
                    <div 
                      className="text-sm mb-2"
                      style={{ color: 'var(--accent)' }}
                    >
                      {exp.data}
                    </div>
                    <h4 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--primary)' }}
                    >
                      {exp.titulo}
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {exp.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        className="py-24 w-full"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="mb-20">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Minhas Skills
            </h2>
            <p 
              className="text-lg max-w-4xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Competências técnicas organizadas por categoria. Dominio completo do ciclo de desenvolvimento back-end.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {skills.map((category, index) => (
              <CardSkill key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Portifolio;