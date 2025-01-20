import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import {  Cog, CheckCircle, Clock, ArrowRight, Wrench, Settings, Gauge, Thermometer, AlertCircle, CheckCircle2, 
    Timer, CarFront, Battery, Disc, Wifi  } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

  const ServiceHero = ({ title, description, image }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[300px] md:h-[400px]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-blue-100">{description}</p>
        </div>
      </div>
    </motion.div>
  );

export const RepairsService = () => {
    return (
      <div>
        <ServiceHero
          title="General Car Repairs"
          description="Expert repairs for all makes and models, with specialist knowledge in Mercedes, BMW, Ford, and more"
          image="/repair.jpg"
        />
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Comprehensive Repair Services</h2>
              <p className="text-gray-600 mb-8">
                Our team of highly skilled technicians can handle all types of repairs, from minor fixes to major overhauls. 
                With state-of-the-art equipment and decades of experience, we ensure your vehicle gets the best care possible.
              </p>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <RepairService
                  icon={<Disc />}
                  title="Brake Services"
                  items={[
                    "Brake pad replacement",
                    "Disc resurfacing",
                    "Caliper repairs",
                    "Brake fluid change"
                  ]}
                />
                <RepairService
                  icon={<Settings />}
                  title="Engine Repairs"
                  items={[
                    "Engine diagnostics",
                    "Timing belt replacement",
                    "Head gasket repairs",
                    "Engine rebuilds"
                  ]}
                />
              </div>
  
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Specialist Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SpecialistBrand brand="Mercedes" experience="15+ years" />
                  <SpecialistBrand brand="BMW" experience="12+ years" />
                  <SpecialistBrand brand="Ford" experience="20+ years" />
                </div>
              </div>
            </div>
  
            <RepairsSidebar />
          </div>
        </div>
      </div>
    );
};
  
  
  // Helper Components
  const RepairService = ({ icon, title, items }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const SpecialistBrand = ({ brand, experience }) => (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">{brand} Specialists</h4>
      <p className="text-sm text-gray-600">{experience} experience</p>
    </div>
);
  
// Sidebars
const RepairsSidebar = () => (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
        <h3 className="text-xl font-bold mb-4">Book a Repair</h3>
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
          Get a Quote
        </button>
        <div className="text-gray-600 space-y-2">
          <p>✓ Free initial assessment</p>
          <p>✓ Competitive pricing</p>
          <p>✓ Genuine parts used</p>
          <p>✓ 12-month warranty</p>
        </div>
      </div>
    </div>
  );
  