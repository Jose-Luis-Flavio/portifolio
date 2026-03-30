import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projetos.css";

const projetos = [
  {
    id: 1,
    nome: "Pirate Translate",
    descricao:
      "Tradução do inglês para a língua dos piratas utilizando API externa.",
    detalhes:
      "Projeto de estudo feito em Angular consumindo uma API de tradução. Simples mas criativo — transforma qualquer texto em linguagem pirata. Boa prática de consumo de APIs e componentização no Angular.",
    tecnologias: ["Angular", "TypeScript", "API REST"],
    link: "https://github.com/Jose-Luis-Flavio/pirate-language",
    emoji: "🏴‍☠️",
  },
  {
    id: 2,
    nome: "Instagram Copy",
    descricao: "Recriação do Instagram utilizando Angular.",
    detalhes:
      "Clone do Instagram desenvolvido em Angular. Projeto que exercitou muito a criação de componentes reutilizáveis, layout responsivo e organização de código em um projeto maior.",
    tecnologias: ["Angular", "TypeScript", "CSS"],
    link: "https://github.com/Jose-Luis-Flavio/instagram-copy",
    emoji: "📸",
  },
  {
    id: 3,
    nome: "Meu Primeiro Site",
    descricao: "O início da jornada — feito apenas com HTML e CSS.",
    detalhes:
      "Primeiro projeto web desenvolvido do zero. Importante marco na trajetória, mostrando a evolução desde o começo até hoje. Feito apenas com HTML e CSS puro, sem frameworks.",
    tecnologias: ["HTML", "CSS"],
    link: "https://github.com/Jose-Luis-Flavio/Meu-primeiro-site",
    emoji: "🌱",
  },
  {
    id: 4,
    nome: "React Studies",
    descricao: "Repositório de estudos em React.",
    detalhes:
      "Projetos desenvolvidos durante curso na Udemy e estudos pessoais de React. Repositório em crescimento constante, com experimentos, componentes e projetos práticos.",
    tecnologias: ["React", "JavaScript", "Framer Motion"],
    link: "https://github.com/Jose-Luis-Flavio/React-Studies",
    emoji: "⚛️",
  },
];

function Projetos() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section className="projetos">
      <motion.div
        className="projetos-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Projetos</h1>
        <p>Uma seleção dos projetos que mais representam minha trajetória.</p>
      </motion.div>
      <div className="projetos-grid">
        {projetos.map((projeto, i) => (
          <motion.div
            key={projeto.id}
            className="projeto-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={() => setSelecionado(projeto)}
          >
            <span className="projeto-emoji">{projeto.emoji}</span>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <div className="projeto-techs">
              {projeto.tecnologias.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="github-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>Quer ver mais?</p>
        <a
          href="https://github.com/Jose-Luis-Flavio"
          target="_blank"
          rel="noreferrer"
        >
          Ver meu GitHub
        </a>
      </motion.div>
      <AnimatePresence>
        {selecionado && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileTap={{ cursor: "grabbing", scale: 0.98 }}
              style={{ cursor: "grab" }}
              drag
              dragElastic={0.2}
              dragMomentum={false}
            >
              <button
                className="modal-fechar"
                onClick={() => setSelecionado(null)}
              >
                ✕
              </button>
              <span className="projeto-emoji grande">{selecionado.emoji}</span>
              <h2>{selecionado.nome}</h2>
              <p>{selecionado.detalhes}</p>
              <div className="projeto-techs">
                {selecionado.tecnologias.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selecionado.link}
                target="_blank"
                rel="noreferrer"
                className="modal-link"
              >
                Ver repositório no GitHub ↗
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projetos;
