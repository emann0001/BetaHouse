import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save token and user data to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Dispatch event so Navbar or other components know login status changed
      window.dispatchEvent(new Event('loginStatusChanged'));

      toast.success('Login successful! Redirecting...');

      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Background Image for Mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dqqectes0/image/upload/v1748531328/Frame_1000002379_czyuxy.png"
          alt="BetaHouse building"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-8 md:px-8 lg:px-20 relative z-10">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 md:top-6 md:left-6 text-gray-600 hover:text-green-600 flex items-center cursor-pointer"
        >
          <HiArrowLeft className="text-2xl" />
          <span className="ml-1 text-sm font-medium">Back</span>
        </button>

        <div className="w-full max-w-md bg-white md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back to BetaHouse!</h2>
          <p className="text-gray-600 mb-6">Let's get started by filling out the information below</p>

          <form onSubmit={handleLogin} className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                minLength="8"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox text-green-600 cursor-pointer" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition-colors ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="flex items-center my-3 md:my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FcGoogle className="text-xl mr-2" />
              Continue with Google
            </button>

            <p className="text-sm text-center mt-4 md:mt-6 text-gray-600">
              New User?{' '}
              <a href="/signup" className="text-green-600 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Image Section for Desktop */}
      <div className="hidden md:block w-1/2 relative">
        <img
          src="https://res.cloudinary.com/dqqectes0/image/upload/v1748531328/Frame_1000002379_czyuxy.png"
          alt="BetaHouse building"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
