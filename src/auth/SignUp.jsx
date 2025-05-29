import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Show password requirements message on focus
  const handlePasswordFocus = () => {
    toast.info(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      {
        autoClose: 7000,
        pauseOnHover: true,
        pauseOnFocusLoss: false,
        closeOnClick: true,
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      toast.error('You must agree to the terms and conditions');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Password validation regex
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    console.log('Submitting:', { firstName, lastName, email, password, confirmPassword });

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          passwordConfirm: confirmPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      localStorage.setItem('token', data.token);
      setShowSuccessModal(true);

    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalLogin = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-cover bg-center md:bg-none"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqqectes0/image/upload/v1748531328/Frame_1000002379_czyuxy.png')",
      }}
    >
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-gray-700 hover:text-green-600 flex items-center z-20 cursor-pointer"
      >
        <HiArrowLeft className="text-2xl" />
        <span className="ml-1 text-sm font-medium">Back</span>
      </button>

      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-12 md:px-10 bg-white bg-opacity-90 md:bg-opacity-100">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 text-center md:text-left">
            Join our community of home seekers and explore the possibilities that await.
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Let's get started by filling out the information below
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full sm:w-1/2 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full sm:w-1/2 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              onFocus={handlePasswordFocus}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
              minLength={8}
            />

            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
              minLength={8}
            />

            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(prev => !prev)}
                className="mt-1 focus:ring-green-500 h-4 w-4 text-green-600 rounded cursor-pointer"
              />
              I agree to{' '}
              <a href="#" className="text-green-600 font-medium hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-green-600 font-medium hover:underline">Privacy Policies</a>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isLoading ? 'Processing...' : 'Sign up'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-green-600 font-medium hover:underline">Sign in</a>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <img
          src="https://res.cloudinary.com/dqqectes0/image/upload/v1748531328/Frame_1000002379_czyuxy.png"
          alt="Modern home interior with comfortable furniture"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mt-3">Signup Successful!</h3>
              <p className="text-gray-500 mt-2">Your account has been created successfully.</p>
              <div className="mt-6">
                <button
                  onClick={handleModalLogin}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
