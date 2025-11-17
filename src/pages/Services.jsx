import { Link } from 'react-router-dom';
import { Droplet, Settings, Wrench, RotateCcw, Shield, Search, CheckCircle, Zap, DollarSign } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      name: 'Oil Change',
      description: 'Quick and professional oil change service to keep your engine running smoothly. We use high-quality motor oil and filters to ensure optimal engine performance.',
      priceRange: '$29 - $59',
      icon: Droplet,
    },
    {
      name: 'Wheel Alignment',
      description: 'Precise wheel alignment to improve handling and extend tire life. Our state-of-the-art equipment ensures your wheels are perfectly aligned.',
      priceRange: '$79 - $149',
      icon: Settings,
    },
    {
      name: 'Auto Repair & Diagnostics',
      description: 'Expert diagnostics and repair for all makes and models. Our certified technicians use advanced diagnostic tools to identify and fix issues quickly.',
      priceRange: '$99 - $299',
      icon: Wrench,
    },
    {
      name: 'Tire Rotation',
      description: 'Regular tire rotation to ensure even wear and maximize tire lifespan. This simple service can save you money on premature tire replacement.',
      priceRange: '$39 - $79',
      icon: RotateCcw,
    },
    {
      name: 'Brake Service',
      description: 'Complete brake inspection and service for your safety. We check pads, rotors, calipers, and brake fluid to ensure your brakes are in top condition.',
      priceRange: '$149 - $399',
      icon: Shield,
    },
    {
      name: 'Full Car Inspection',
      description: 'Comprehensive vehicle inspection to identify any issues early. Perfect before a long trip or when buying a used car.',
      priceRange: '$99 - $199',
      icon: Search,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with Background Image */}
      <section className="relative bg-cover bg-center py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 to-blue-primary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional auto repair services to keep your vehicle in perfect condition
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-primary/5 to-orange-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-primary mb-6">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Our team is certified and experienced</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-600">Fast turnaround times without compromising quality</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
