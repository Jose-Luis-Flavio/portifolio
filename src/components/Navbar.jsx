import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <Link to="/">Juca</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/formacao">Formação</Link></li>
                <li><Link to="/profissional">Profissional</Link></li> 
                <li><Link to="/projetos">Projetos</Link></li> 
                <li><Link to="/sobre">Sobre Mim</Link></li> 
            </ul>
        </nav>
    )
}

export default Navbar;