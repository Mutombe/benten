import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Toaster } from 'sonner';

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
  
export default Footer;