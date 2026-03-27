import "../styles/Home.css";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import foto from "../assets/foto.png";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(8px)", "blur(0px)"],
  );

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 100% 100% 100%)", "inset(0% 0% 0% 0%)"],
  );
  return (
    <div>
      <section className="home">
        <motion.div
          className="home-inner"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile">
            <img src={foto} alt="Foto de perfil" />
          </div>
          <div className="info">
            <h1>José Luis Flávio</h1>
            <h3>Desenvolvedor Fullstack</h3>
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, focado em
              desenvolvimento web com React e Angular.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="biografia">
        <motion.div ref={ref} style={{ clipPath, filter: blur }}>
          <h1 className="titulo">
            Desenvolvedor Front-end / Fullstack Júnior{" "}
          </h1>
          <p className="biografia">
            Com experiência prática no desenvolvimento e manutenção de
            aplicações web corporativas utilizando Angular 10+, TypeScript, HTML
            e CSS. Forte foco em estabilidade de aplicação, arquitetura
            escalável de front-end e integração com APIs REST. Experiência
            comprovada na redução de falhas de interface por meio de correção
            proativa de bugs e melhorias contínuas em ambiente de produção
          </p>
        </motion.div>
      </section>
      <section className="skills">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Tecnologias</h2>
          <div className="skills-grid">
            {[
              { nome: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> },
              { nome: "Angular", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" /> },
              { nome: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /> },
              { nome: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
              { nome: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /> },
              { nome: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /> },
              { nome: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> },
              { nome: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> },
              { nome: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> },
              { nome: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> },
            ].map((skill, i) => (
              <motion.div
                key={skill.nome}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                <span style={{ height: "50px", width: "50px" }} className="skill-icon">{skill.icon}</span>
                <span className="skill-nome">{skill.nome}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
