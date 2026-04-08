import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonalPage from './pages/PersonalPage';
import AllGroups from './pages/AllGroupsPage';
import Home from './pages/HomePage';





export default function App() {

  return (
    <>
<Router>
    <div className="mobile-container">
        <main className="content">
          {/* 3. Aquí es donde React decide qué componente mostrar según la URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/allgroups" element={<AllGroups/>} />
          </Routes>
        </main>
        {/* 2. Estos son tus tres botones */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }} className='bottom-nav'>
          <Link to="/" className='nav-link'>
            <span>🏠</span>
            <small>Inicio</small>
          </Link>
          <Link to="/personal" className='nav-link'>
            <span>👤</span>
            <small>Personal</small>
          </Link>
          <Link to="/allgroups" className='nav-link'>
            <span>👥</span>
            <small>All Groups</small>
          </Link>
        </nav>
      </div>
    </Router>
     
    </>
  )
}


