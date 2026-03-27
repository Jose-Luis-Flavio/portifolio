import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Profissional from './pages/Profissional.jsx'
import Projetos from './pages/Projetos.jsx'
import Sobre from './pages/Sobre.jsx'
import Formacao from './pages/Formacao.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/profissional" element={<Profissional />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  )
}

export default App
