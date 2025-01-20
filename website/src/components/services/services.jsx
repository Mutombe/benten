import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import {  Cog, CheckCircle, Clock, ArrowRight, Wrench, Settings, Gauge, Thermometer, AlertCircle, CheckCircle2, 
    Timer, CarFront, Battery, Disc, Wifi  } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';


// MOT & Servicing Page
export const MOTService = () => {
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero
        title="MOT Testing & Servicing"
        description="Professional MOT testing and comprehensive servicing for all vehicle types"
        image="/mot.jpg"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Class 4 and 7 MOT Testing</h2>
            <p className="text-gray-600 mb-6">
              We offer comprehensive MOT testing for both Class 4 (cars and small vans) and Class 7 (larger vans up to 3,500kg) vehicles. Our experienced technicians use the latest testing equipment to ensure your vehicle meets all safety and environmental standards.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ServiceFeature
                icon={<Clock />}
                title="Quick Turnaround"
                description="Most MOTs completed within 45 minutes"
              />
              <ServiceFeature
                icon={<CheckCircle />}
                title="Expert Technicians"
                description="Fully qualified MOT testers"
              />
              <ServiceFeature
                icon={<Cog />}
                title="Modern Equipment"
                description="Latest MOT testing technology"
              />
              <ServiceFeature
                icon={<AlertCircle />}
                title="Free Retests"
                description="Within 10 working days"
              />
            </div>

            {/* Service Types */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Our Servicing Options</h3>
              <div className="space-y-4">
                <ServiceOption
                  title="Interim Service"
                  description="Every 6,000 miles or 6 months"
                  price="From £89"
                />
                <ServiceOption
                  title="Full Service"
                  description="Every 12,000 miles or 12 months"
                  price="From £169"
                />
                <ServiceOption
                  title="Major Service"
                  description="Every 24,000 miles or 24 months"
                  price="From £239"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Book Your MOT</h3>
              <Alert className="mb-4">
                <AlertDescription>
                  Book your MOT up to 30 days before it's due and keep your same renewal date
                </AlertDescription>
              </Alert>
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
                Book Online Now
              </button>
              <div className="text-gray-600 space-y-2">
                <p>✓ Free vehicle health check</p>
                <p>✓ Collection & delivery available</p>
                <p>✓ Courtesy car available</p>
                <p>✓ Expert technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FAQ
              question="When should I book my MOT?"
              answer="You can book your MOT up to 30 days before it's due while keeping the same renewal date. We recommend booking early to allow time for any necessary repairs."
            />
            <FAQ
              question="How long does an MOT take?"
              answer="A standard MOT test takes approximately 45-60 minutes. If repairs are needed, we'll provide an estimate of the additional time required."
            />
            <FAQ
              question="What happens if my vehicle fails?"
              answer="If your vehicle fails, we'll provide a detailed report of the issues and a quote for repairs. You can have the repairs done with us or take your vehicle elsewhere."
            />
            <FAQ
              question="Do you offer free retests?"
              answer="Yes, we offer free retests within 10 working days if you leave your vehicle with us for repairs."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const ServiceTab = ({ href, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <li className="mr-2">
      <Link
        to={href}
        className={`inline-block py-4 px-6 border-b-2 ${
          isActive
            ? 'border-blue-400 text-blue-400'
            : 'border-transparent hover:border-blue-300 hover:text-blue-300'
        } transition-colors`}
      >
        {label}
      </Link>
    </li>
  );
};

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

const ServiceFeature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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

const FAQ = ({ question, answer }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <h4 className="font-semibold mb-2">{question}</h4>
    <p className="text-gray-600">{answer}</p>
  </div>
);
