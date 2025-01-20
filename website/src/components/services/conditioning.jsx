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

// Air Conditioning Page
export const AirConditioningService = () => {
  return (
    <div>
      <ServiceHero
        title="Air Conditioning Service"
        description="Complete A/C servicing, repairs, and recharge to keep you cool year-round"
        image="/air.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Complete A/C Solutions</h2>
              <p className="text-gray-600 mb-6">
                Keep your vehicle's air conditioning system performing at its best with our comprehensive 
                service options. We recommend servicing your A/C system every 2 years to maintain optimal performance.
              </p>
            </div>

            <ACServiceOptions />
            <ACTroubleshooting />
          </div>

          <ACSidebar />
        </div>
      </div>
    </div>
  );
};

const ACServiceOptions = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h3 className="text-xl font-bold mb-4">Service Options</h3>
      <div className="space-y-4">
        <ServiceOption
          title="A/C Health Check"
          description="Basic system check and pressure test"
          price="From £39"
        />
        <ServiceOption
          title="A/C Recharge"
          description="Full system recharge with leak test"
          price="From £69"
        />
        <ServiceOption
          title="Complete Service"
          description="Full service including anti-bacterial clean"
          price="From £89"
        />
      </div>
    </div>
  );
  
  const ACTroubleshooting = () => (
    <div className="bg-gray-100 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Common A/C Issues We Fix</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Weak or no cold air",
          "Strange noises",
          "Bad odors",
          "Leaking refrigerant",
          "Electrical problems",
          "Blocked condensers"
        ].map((issue, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Cog className="w-5 h-5 text-blue-600" />
            <span className="text-gray-600">{issue}</span>
          </div>
        ))}
      </div>
    </div>
);
  
const ACSidebar = () => (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
        <h3 className="text-xl font-bold mb-4">A/C Service Special</h3>
        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-4">
          <p className="font-semibold">Summer Offer</p>
          <p className="text-sm">Get 20% off A/C services this month!</p>
        </div>
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
          Book Service
        </button>
        <div className="text-gray-600 space-y-2">
          <p>✓ No hidden charges</p>
          <p>✓ 30-minute recharge</p>
          <p>✓ 6-month guarantee</p>
          <p>✓ Environment friendly</p>
        </div>
      </div>
    </div>
  );

const ServiceOption = ({ title, description, price }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-blue-600">{price}</span>
        <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );