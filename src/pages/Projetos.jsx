import { motion } from "framer-motion";

function Projetos() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>Projeto 1</motion.div>
      <motion.div variants={item}>Projeto 2</motion.div>
      <motion.div variants={item}>Projeto 3</motion.div>
    </motion.div>
  );
}

export default Projetos;
