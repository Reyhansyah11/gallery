import Navbar from './components/Navigasi';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/Login/index';
import Dashboard from './pages/dashboard/index';

const App: React.FC = () => {
  const location = useLocation();
  const pathNames = location.pathname.split('/').filter(path => path);

  const isDashboard = pathNames[0] === "dashboard";

  const showNavbar = !isDashboard;

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Tambahkan rute lainnya di sini */}
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;