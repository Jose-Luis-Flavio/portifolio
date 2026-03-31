import { motion } from "framer-motion";
import foto from "../assets/foto.png";
import "../styles/Sobre.css";

const redesSociais = [
  {
    nome: "GitHub",
    url: "https://github.com/Jose-Luis-Flavio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/josé-luis-flávio-482246211",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    nome: "Instagram",
    url: "https://www.instagram.com/jucalino_",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    nome: "WhatsApp",
    url: "https://wa.me/5534984204460?text=Olá José, vim pelo seu portfólio!",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },
];

function Sobre() {
  return (
    <section className="sobre">
      <motion.div
        className="sobre-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="sobre-foto">
          <img src={foto} alt="José Luis Flávio" />
        </div>

        <div className="sobre-conteudo">
          <h1>Sobre Mim</h1>
          <p>
            Desenvolvedor Front-end / Fullstack Júnior com experiência prática
            no desenvolvimento e manutenção de aplicações web corporativas
            utilizando Angular 10+, TypeScript, HTML e CSS. Forte foco em
            estabilidade de aplicação, arquitetura escalável de front-end e
            integração com APIs REST. Histórico comprovado na redução de falhas
            de interface por meio de correção proativa de bugs e melhorias
            contínuas em ambiente de produção.
          </p>

          <div className="sobre-redes">
            <h2>Me encontre em</h2>
            <div className="redes-grid">
              {redesSociais.map((rede, i) => (
                <motion.a
                  key={rede.nome}
                  href={rede.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rede-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <img src={rede.icon} alt={rede.nome} className="rede-icon" />
                  <span>{rede.nome}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Sobre;