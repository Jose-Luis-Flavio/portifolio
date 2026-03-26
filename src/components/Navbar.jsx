import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/NavBar.css";

function Navbar() {
    return (
        <motion.nav
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
                <Link to="/"><img src="../logo.svg" alt="Logo" /></Link>
            <div className="links">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Link to="/">Home</Link>  
                <Link to="/formacao">Formação</Link>
                <Link to="/profissional">Profissional</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/sobre">Sobre Mim</Link>
              </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar;