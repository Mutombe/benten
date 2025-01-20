import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Toaster } from 'sonner';

// NavLinks Component for desktop navigation
export const NavLinks = ({ scrolled }) => {
  const links = [
    { path: "/", text: "Home" },
    { path: "/repairs", text: "General Car Repairs" },
    { path: "/mot-servicing", text: "MOT & Servicing" },
    { path: "/diagnostics", text: "Diagnostics" },
    { path: "/air-conditioning", text: "Air Conditioning" },
    { path: "/contact", text: "Contact" }
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`hover:text-blue-600 transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

// MobileNavLinks Component for mobile menu
export const MobileNavLinks = ({ setIsOpen }) => {
  const links = [
    { path: "/", text: "Home" },
    { path: "/repairs", text: "General Car Repairs" },
    { path: "/mot-servicing", text: "MOT & Servicing" },
    { path: "/diagnostics", text: "Diagnostics" },
    { path: "/air-conditioning", text: "Air Conditioning" },
    { path: "/contact", text: "Contact" },
    { path: "/book", text: "Book Online" }
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};



// ServiceLinks Component for footer
export const ServiceLinks = () => {
  const services = [
    "MOT Testing",
    "Vehicle Servicing",
    "General Repairs",
    "Diagnostics",
    "Air Conditioning",
    "Brake Services",
    "Clutch Repairs",
    "Wheel Alignment"
  ];

  return (
    <ul className="space-y-2">
      {services.map((service) => (
        <li key={service}>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {service}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// OpeningHours Component for footer
export const OpeningHours = () => {
  return (
    <div className="text-gray-400 space-y-2">
      <p>Monday - Friday: 9:00 - 18:00</p>
      <p>Saturday: 8:30 - 14:00</p>
      <p>Sunday: CLOSED</p>
    </div>
  );
};

// NavBar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Benten Auto
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrolled={scrolled} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLinks setIsOpen={setIsOpen} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;