import Navbar from "./Navbar.jsx";
import { motion } from "framer-motion";
import "../styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <motion.div className="bg-orbs">
        <motion.div
          animate={{
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="orb orb-1"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="orb orb-2"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="orb orb-3"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="orb orb-4"
        ></motion.div>
      </motion.div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
