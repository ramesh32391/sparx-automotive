import { Link } from 'react-router-dom';
import { Wrench, Droplet, Settings, Shield, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';

const Home = () => {
  // Get first 4 cars for featured section
  const featuredCars = carsData.slice(0, 4);

  const services = [
    {
      name: 'Oil Change',
      description: 'Quick and professional oil change service',
      icon: Droplet,
    },
    {
      name: 'Wheel Alignment',
      description: 'Precise wheel alignment to improve handling',
      icon: Settings,
    },
    {
      name: 'Auto Repair & Diagnostics',
      description: 'Expert diagnostics and repair for all makes',
      icon: Wrench,
    },
    {
      name: 'Brake Service',
      description: 'Complete brake inspection and service',
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      review: 'Best auto shop in town! Fast service and honest pricing.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      review: 'Found my perfect car here. Great selection and friendly staff.',
      rating: 5,
    },
    {
      name: 'Mike Davis',
      review: 'They fixed my car same day. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* A. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 via-blue-primary/80 to-orange-primary/70"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Complete Auto Repair & Quality Used Cars in One Place
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Expert oil changes, wheel alignment, auto repair, diagnostics, and a wide selection of quality pre-owned vehicles. Your trusted automotive partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="btn-modern btn-gradient btn-glow btn-shimmer text-white px-8 py-4 rounded-xl text-xl font-bold shadow-xl relative z-10"
            >
              <span className="relative z-10">Book a Service</span>
            </Link>
            <Link
              to="/cars"
              className="btn-modern bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-white/20 backdrop-blur-sm relative z-10 transition-all duration-300 hover:border-white/80"
            >
              <span className="relative z-10">View Cars for Sale</span>
            </Link>
          </div>

          {/* Stats Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">24/7 Roadside Support</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                <span className="font-semibold">500+ Cars Serviced</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.8★ Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Services Strip with Icons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-blue-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-primary mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-orange-primary font-semibold text-sm inline-flex items-center gap-1 group transition-all duration-300 hover:gap-2"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* C. Featured Cars Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-primary mb-4">
              Featured Cars for Sale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of quality pre-owned vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cars"
              className="btn-modern btn-shimmer inline-block bg-gradient-to-r from-blue-primary to-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl relative z-10 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">View All Listings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* D. Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-primary/5 via-orange-primary/5 to-blue-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,87,255,0.1) 10px, rgba(0,87,255,0.1) 20px)'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&q=80"
                  alt="Auto repair shop"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* Right: Bullet Points */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-primary mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary rounded-full p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Honest, upfront pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprises. We provide transparent quotes before any work begins.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary rounded-full p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Same-day oil change & repairs</h3>
                    <p className="text-gray-600">Fast turnaround times for most services. Get back on the road quickly.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary rounded-full p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Quality inspected used cars</h3>
                    <p className="text-gray-600">Every vehicle undergoes thorough inspection. Drive with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. Testimonial / Review Strip */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-primary text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.review}"
                </p>
                <p className="font-bold text-gray-800">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Final Call-To-Action Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-primary to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a repair or ready for your next car?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get in touch with us today. We're here to help with all your automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-modern btn-shimmer bg-white text-orange-primary px-8 py-4 rounded-xl text-xl font-bold shadow-xl inline-flex items-center justify-center gap-2 relative z-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Schedule Appointment</span>
            </Link>
            <a
              href="tel:+19038168330"
              className="btn-modern bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-white/20 backdrop-blur-sm relative z-10 transition-all duration-300 hover:border-white/80 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
