import Navbar from "./Navbar.jsx";

function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;