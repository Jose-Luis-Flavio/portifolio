import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Profissional.css";

const experiencias = [
  {
    id: 1,
    empresa: "Oficina5 - Soluções Inteligentes",
    cargo: "Estágio em Desenvolvimento Web",
    periodo: "2025 - Atualmente",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFhrqWVeABRdQ/company-logo_100_100/B56ZtGWXoSG8AU-/0/1766411830359?e=2147483647&v=beta&t=Jb45oRwth5DinxJ_4MKUeg6RqYrDaNZzw8sG6Wb5ANM",
    tecnologias: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Git",
      "Node.js",
      "REST APIs",
      "Docker",
      "PostgreSQL",
    ],
    descricao: `Atuo no desenvolvimento e manutenção de aplicações web corporativas utilizando Angular
10+, TypeScript, RxJS e Angular Material. Contribuí para o aumento da estabilidade das
aplicações ao identificar e corrigir bugs críticos de interface, reduzindo recorrência de
chamados relacionados ao front-end e melhorando a experiência do usuário.
Realizo integração com APIs REST para comunicação eficiente com serviços de back-end,
garantindo validação e manipulação adequada de dados. Também atuo com consultas e
validações em PostgreSQL, além de trabalhar em ambientes baseados em Docker para
manter padronização no desenvolvimento e manutenção das aplicações. Participo
ativamente da colaboração entre equipes, seguindo requisitos técnicos e prazos de entrega.`,
  },
  {
    id: 2,
    empresa: "Unitecne - Incubadora de Empresas da Uniube",
    cargo: "Bolsista (VUEI)",
    periodo: "2023 - 2023",
    logo: "https://sga.uniube.br/conteudosMidias/2078.jpg",
    tecnologias: [
      "Organização de eventos",
      "Elaboração de relatórios",
      "Criação de materiais visuais",
      "Divulgação de projetos",
    ],
    descricao: `Atuei no suporte a iniciativas de inovação e empreendedorismo, auxiliando na organização de
eventos e no gerenciamento de dados operacionais. Contribuí na elaboração de relatórios e
análises por meio de planilhas, melhorando a visibilidade de métricas e processos internos.
Também colaborei na criação de materiais visuais e conteúdos de divulgação para projetos
incubados.`,
  },
];

function Profissional() {
  const [aberto, setAberto] = useState(null);

  const toggle = (id) => {
    setAberto(aberto === id ? null : id);
  };

  return (
    <section className="profissional">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiência Profissional
      </motion.h1>

      <div className="cards-container">
        {experiencias.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`exp-card ${aberto === exp.id ? "aberto" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => toggle(exp.id)}
          >
            <div className="exp-header">
              <img src={exp.logo} alt={exp.empresa} className="exp-logo" />
              <div className="exp-info">
                <h2>{exp.empresa}</h2>
                <h3>{exp.cargo}</h3>
                <span className="exp-periodo">{exp.periodo}</span>
              </div>
              <motion.span
                className="exp-arrow"
                animate={{ rotate: aberto === exp.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {aberto === exp.id && (
                <motion.div
                  className="exp-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{exp.descricao}</p>
                  <div className="exp-techs">
                    {exp.tecnologias.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Profissional;
