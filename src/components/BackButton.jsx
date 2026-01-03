import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ to = "/", showText = false }) => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  const handleBack = () => {
    navigate(-1); // Go back one page in history
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      <button
        onClick={handleBack}
        className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 backdrop-blur-sm"
        aria-label="Go back"
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {showText && (
          <span className={`${isMobile ? 'text-sm' : 'font-medium'}`}>
            Back
          </span>
        )}
      </button>
    </div>
  );
};

// Alternative version with Link instead of navigate
const BackButtonWithLink = ({ to = "/", showText = false }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="fixed top-6 left-6 z-50">
      <Link
        to={to}
        className="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 backdrop-blur-sm"
        aria-label="Go back"
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {showText && (
          <span className={`${isMobile ? 'text-sm' : 'font-medium'}`}>
            Back
          </span>
        )}
      </Link>
    </div>
  );
};

export default BackButton;
export { BackButtonWithLink };