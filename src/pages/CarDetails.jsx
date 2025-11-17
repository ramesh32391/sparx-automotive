import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Phone, Gauge, Settings, Award, MapPin } from 'lucide-react';
import carsData from '../data/cars.json';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find((c) => c.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate multiple images for carousel
  const carImages = [
    car?.image || 'https://picsum.photos/800/600?random=1',
    `https://picsum.photos/800/600?random=${car?.id}1`,
    `https://picsum.photos/800/600?random=${car?.id}2`,
    `https://picsum.photos/800/600?random=${car?.id}3`,
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Car Not Found</h2>
          <Link to="/cars" className="text-orange-primary hover:underline">
            Back to Car Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="btn-modern mb-6 text-white hover:text-orange-primary transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 rounded-lg px-4 py-2 hover:bg-white/10 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Listings</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{car.model}</h1>
          <div className="text-3xl md:text-4xl font-bold text-orange-primary">
            {formatPrice(car.price)}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-96 md:h-[600px] overflow-hidden bg-gray-200">
                <img
                  src={carImages[currentImageIndex]}
                  alt={car.model}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={prevImage}
                className="btn-modern absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 hover:shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" />
              </button>
              <button
                onClick={nextImage}
                className="btn-modern absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110 hover:shadow-lg"
              >
                <ChevronRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`btn-modern rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-orange-primary w-8 h-3 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75 w-3 h-3 hover:scale-125'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            {/* Key Specs Box */}
            <div className="bg-gradient-to-br from-blue-primary/10 to-orange-primary/10 rounded-xl p-6 border border-blue-primary/20">
              <h2 className="text-2xl font-bold text-blue-primary mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Key Specs
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-semibold">Year</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">{car.year}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Gauge className="w-5 h-5" />
                    <span className="text-sm font-semibold">Mileage</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">{formatMileage(car.mileage)} mi</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Settings className="w-5 h-5" />
                    <span className="text-sm font-semibold">Engine</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800">{car.engine}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">Condition</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">{car.condition}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-primary mb-4">Description</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{car.description}</p>
            </div>

            {/* Contact for Test Drive */}
            <div className="bg-gradient-to-r from-orange-primary to-orange-600 text-white rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Interested in this car?
              </h2>
              <p className="mb-6 text-lg">Contact us to schedule a test drive or get more information.</p>
              <div className="space-y-4">
                <a
                  href="tel:+19038168330"
                  className="btn-modern btn-shimmer flex items-center justify-center gap-2 w-full bg-white text-orange-primary py-4 rounded-xl font-bold shadow-lg hover:shadow-xl relative z-10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Call Now: (903) 816-8330</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-modern btn-shimmer flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-primary to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl relative z-10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Schedule Test Drive</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
