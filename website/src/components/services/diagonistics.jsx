// Diagnostics Page
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import {  Cog, CheckCircle, Clock, ArrowRight, Wrench, Settings, Gauge, Thermometer, AlertCircle, CheckCircle2, 
    Timer, CarFront, Battery, Disc, Wifi  } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DiagnosticFeature = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  const DiagnosticProcess = () => (
    <div className="bg-gray-100 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Our Diagnostic Process</h3>
      <div className="space-y-4">
        {[
          { step: 1, title: "Initial Scan", description: "Complete vehicle system scan" },
          { step: 2, title: "Analysis", description: "Expert interpretation of diagnostic data" },
          { step: 3, title: "Testing", description: "Specific component testing if required" },
          { step: 4, title: "Solution", description: "Detailed report and repair recommendations" }
        ].map((item) => (
          <div key={item.step} className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
              {item.step}
            </div>
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
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
  
  const DiagnosticsSidebar = () => (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
        <h3 className="text-xl font-bold mb-4">Diagnostic Check</h3>
        <div className="text-2xl font-bold text-blue-600 mb-4">£49.99</div>
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
          Book Now
        </button>
        <div className="text-gray-600 space-y-2">
          <p>✓ Full system scan</p>
          <p>✓ Expert analysis</p>
          <p>✓ Detailed report</p>
          <p>✓ No obligation quotes</p>
        </div>
      </div>
    </div>
  );
  

export const DiagnosticsService = () => {
    return (
      <div>
        <ServiceHero
          title="Advanced Diagnostics"
          description="State-of-the-art diagnostic testing to identify and resolve vehicle issues quickly"
          image="/dia.jpg"
        />
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Professional Diagnostic Services</h2>
                <p className="text-gray-600">
                  Our advanced diagnostic equipment can quickly identify issues with your vehicle's systems, 
                  helping to save you time and money on unnecessary repairs.
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <DiagnosticFeature
                  icon={<Wifi />}
                  title="Computer Diagnostics"
                  description="Latest OBD scanning technology for accurate fault detection"
                />
                <DiagnosticFeature
                  icon={<Gauge />}
                  title="Performance Testing"
                  description="Comprehensive system performance analysis"
                />
                <DiagnosticFeature
                  icon={<Battery />}
                  title="Electrical Diagnostics"
                  description="Advanced electrical system testing"
                />
                <DiagnosticFeature
                  icon={<CarFront />}
                  title="Emissions Testing"
                  description="Complete emissions system diagnostics"
                />
              </div>
  
              <DiagnosticProcess />
            </div>
  
            <DiagnosticsSidebar />
          </div>
        </div>
      </div>
    );
  };