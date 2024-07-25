import Navbar from './components/Navigasi';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-16"> {/* Padding atas untuk menghindari konten tertutup oleh navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
