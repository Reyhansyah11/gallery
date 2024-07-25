import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">BrandName</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black hover:text-gray-300">Home</Link>
          <Link to="/login" className="text-black hover:text-gray-300">Login</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-100 shadow-md mt-2">
          <Link to="/" className="block text-black hover:text-gray-300 px-2 py-1">Home</Link>
          <Link to="/login" className="text-black hover:text-gray-300">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
