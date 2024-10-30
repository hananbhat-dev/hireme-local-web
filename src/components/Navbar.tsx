import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <MapPin
              className={`h-8 w-8 ${
                isScrolled ? 'text-indigo-600' : 'text-white'
              }`}
            />
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              HireMe Local
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`nav-link ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Browse Services
            </a>
            <a
              href="#"
              className={`nav-link ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Become a Provider
            </a>
            <a
              href="#"
              className={`nav-link ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              How it Works
            </a>
            <button className="btn-primary">Sign Up</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isScrolled ? 'text-gray-600' : 'text-white'
              } hover:text-gray-300`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Browse Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Become a Provider
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              How it Works
            </a>
            <button className="w-full mt-2 btn-primary">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
