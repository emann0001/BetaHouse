import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus/modals on route change
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setShowLogoutModal(false);
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
  
    if (token && userData && userData !== 'undefined') {
      try {
        const user = JSON.parse(userData);
        setIsLoggedIn(true);
        setUserName(`${user.firstName} ${user.lastName}`);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem('user'); // clean up invalid data
      }
    }
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    setShowLogoutModal(false);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="absolute w-full z-20 bg-transparent px-4 md:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
          BH
        </div>
        <span className="text-white text-xl font-semibold">BetaHouse</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-white font-medium">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <Link to="/properties" className="hover:text-green-400 transition">Properties</Link>
        <Link to="/about" className="hover:text-green-400 transition">About Us</Link>
        <Link to="/blog" className="hover:text-green-400 transition">Blog</Link>
        <Link to="/contact" className="hover:text-green-400 transition">Contact Us</Link>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex gap-4 items-center">
        {!isLoggedIn ? (
          <>
            <Link to="/signup" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">Sign up</Link>
            <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">Login</Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 text-white"
            >
              <FaUserCircle className="text-2xl" />
              <span>{userName}</span>
              <span className={`ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl z-30"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-6 z-20">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <nav className="flex flex-col items-center gap-6">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold">Home</Link>
            <Link to="/properties" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold">Properties</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold">About Us</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold">Blog</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold">Contact Us</Link>
          </nav>

          <div className="flex flex-col gap-4 w-[80%] max-w-xs">
            {!isLoggedIn ? (
              <>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="text-white border border-white px-4 py-2 text-center rounded hover:bg-white hover:text-black transition">Sign Up</Link>
                <Link to="/login" onClick={() => setIsOpen(false)} className="bg-green-500 text-white px-4 py-2 text-center rounded hover:bg-green-600 transition">Login</Link>
              </>
            ) : (
              <div className="text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaUserCircle className="text-xl" />
                  <span>{userName}</span>
                </div>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 hover:text-red-400 transition"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium text-center text-gray-900 mb-4">Are you sure you want to logout?</h3>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
