import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import  "../styles/NavBar.css";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <img src="../logo.svg" alt="Logo" />
      </Link>
      <div className="links">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Stack direction="row" spacing={2}>
            <Link to="/">
              <Button variant="contained" color="success">
                Home
              </Button>
            </Link>
            <Link to="/profissional">
              <Button variant="contained" color="success">
                Profissional
              </Button>
            </Link>
            <Link to="/projetos">
              <Button variant="contained" color="success">
                Projetos
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="contained" color="success">
                Sobre Mim
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
