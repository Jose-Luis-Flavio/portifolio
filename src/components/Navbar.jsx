import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../styles/NavBar.css";

const menuLinks = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/profissional", label: "Profissional", icon: "💼" },
  { to: "/projetos", label: "Projetos", icon: "🚀" },
  { to: "/sobre", label: "Sobre Mim", icon: "👤" },
];

function Navbar() {
  const [aberto, setAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickFora(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setAberto(false);
      }
    }
    if (aberto) document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, [aberto]);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={menuRef}
    >
      <Link to="/">
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo" />
      </Link>

      {/* Desktop */}
      <div className="links">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Stack direction="row" spacing={2}>
            {menuLinks.map((link) => (
              <Link to={link.to} key={link.to}>
                <Button variant="contained" color="success">{link.label}</Button>
              </Link>
            ))}
          </Stack>
        </motion.div>
      </div>

      {/* Hamburguer */}
      <button className="hamburger" onClick={() => setAberto(!aberto)}>
        <span className={`hamburger-linha ${aberto ? "aberto-1" : ""}`}></span>
        <span className={`hamburger-linha ${aberto ? "aberto-2" : ""}`}></span>
        <span className={`hamburger-linha ${aberto ? "aberto-3" : ""}`}></span>
      </button>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            className="menu-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={link.to} onClick={() => setAberto(false)}>
                  <span className="menu-icon">{link.icon}</span>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;