import "../styles/Home.css";
import { motion, useScroll, useTransform } from "framer-motion";
import foto from "../assets/foto.png";

function Home() {
  const { scrollYProgress } = useScroll();
  const moveX = useTransform(scrollYProgress, [0, 0.3], [0, 500]);
  const moveY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);

  return (
    <div>
      <section className="home">
        <motion.div
          className="home-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ x: moveX, y: moveY }}
        >
          <div className="profile">
            <img src={foto} alt="Foto de perfil" />
          </div>

          <div className="info">
            <h1>José Luis Flávio</h1>
            <h3>Desenvolvedor Front-end</h3>

            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, focado em
              desenvolvimento web com React e Angular.
            </p>
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
        <p>penios</p>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
