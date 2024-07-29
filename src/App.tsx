import Navbar from './components/Navigasi';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/Login/index';
import Dashboard from './pages/dashboard/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-16"> {/* Padding atas untuk menghindari konten tertutup oleh navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
