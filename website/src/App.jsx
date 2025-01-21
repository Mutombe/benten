import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { RepairsService } from './components/services/repairs';
import { DiagnosticsService } from './components/services/diagonistics';
import { AirConditioningService } from './components/services/conditioning';
import { MOTService } from './components/services/services';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// NavLinks Component for desktop navigation
export const NavLinks = ({ scrolled }) => {
  const links = [
    { path: "/", text: "Home" },
    { path: "/repairs", text: "General Car Repairs" },
    { path: "/mot-servicing", text: "MOT & Servicing" },
    { path: "/diagnostics", text: "Diagnostics" },
    { path: "/air-conditioning", text: "Air Conditioning" },
    { path: "/#", text: "Contact" }
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

// FooterLinks Component
export const FooterLinks = () => {
  const links = [
    { path: "/", text: "Home" },
    { path: "/repairs", text: "General Car Repairs" },
    { path: "/mot-servicing", text: "MOT & Servicing" },
    { path: "/diagnostics", text: "Diagnostics" },
    { path: "/air-conditioning", text: "Air Conditioning" },
    { path: "/contact", text: "Contact" }
  ];

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
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
            className="md:hidden text-gray-800"
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

// Home Page Component
const Home = () => {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/home.jpg" 
            alt="Mechanic working on car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Auto Service Partner
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Over 20 years of experience providing quality car repairs, MOT testing, and servicing in Reading
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors" onClick={()=>navigate("/")}>
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors" onClick={() => navigate("/air-conditioning")}>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="MOT & Servicing"
              description="Class 4 & 7 MOT testing with comprehensive vehicle servicing"
              icon="🔧"
              onLearnMore={()=>navigate('/mot-servicing')}
            />
            <ServiceCard 
              title="General Repairs"
              description="Expert repairs for all makes and models"
              icon="🚗"
              onLearnMore={()=>navigate('/repairs')}
            />
            <ServiceCard 
              title="Diagnostics"
              description="State-of-the-art diagnostic testing"
              icon="📊"
              onLearnMore={()=>navigate('/diagnostics')}
            />
            <ServiceCard 
              title="Air Conditioning"
              description="Complete A/C servicing and repairs"
              icon="❄️"
              onLearnMore={()=>navigate('/air-conditioning')}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Free Health Check"
              description="Comprehensive vehicle health check with every service"
            />
            <FeatureCard 
              title="Collection & Delivery"
              description="Free collection and delivery service in Reading"
            />
            <FeatureCard 
              title="Courtesy Car"
              description="Free courtesy car while we service your vehicle"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <ContactInfo 
                  icon={<Phone className="w-5 h-5" />}
                  text="0118 975 7999"
                />
                <ContactInfo 
                  icon={<Mail className="w-5 h-5" />}
                  text="bentenautoexperts@yahoo.com"
                />
                <ContactInfo 
                  icon={<MapPin className="w-5 h-5" />}
                  text="Unit 9 Tunbridge Jones Business Park, Reading, RG2 0JT"
                />
                <ContactInfo 
                  icon={<Clock className="w-5 h-5" />}
                  text="Mon-Fri: 9:00-18:00, Sat: 8:30-14:00"
                />
              </div>
            </div>
            <div>
              <img 
                src="/garage.jpeg" 
                alt="Benten Auto Experts Garage" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Benten Auto Experts</h3>
            <p className="text-gray-400">Your trusted auto service partner in Reading since 2011.</p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="w-5 h-5" />} />
              <SocialLink icon={<Instagram className="w-5 h-5" />} />
              <SocialLink icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <FooterLinks />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ServiceLinks />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <OpeningHours />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Benten Auto Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const ServiceCard = ({ title, description, icon, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 h-full flex flex-col justify-between"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <div className="text-4xl mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      <motion.button
        className="group flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        onClick={onLearnMore}
        animate={{
          x: isHovered ? 5 : 0,
        }}
      >
        Learn More
        <motion.div
          animate={{
            x: isHovered ? 5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const ServiceCard2 = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="text-center p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <span>{text}</span>
  </div>
);

const SocialLink = ({ icon }) => (
  <a href="#" className="hover:text-blue-400 transition-colors">
    {icon}
  </a>
);
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop/>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mot-servicing" element={<MOTService />} />
            <Route path="/repairs" element={<RepairsService />} />
            <Route path="/diagnostics" element={<DiagnosticsService />} />
            <Route path="/air-conditioning" element={<AirConditioningService />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
};

export default App;