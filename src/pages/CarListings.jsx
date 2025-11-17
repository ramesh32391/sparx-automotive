import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import CarCard from '../components/CarCard';
import carsData from '../data/cars.json';

const CarListings = () => {
  const [cars, setCars] = useState(carsData);
  const [searchTerm, setSearchTerm] = useState('');

  // Assign badges to some cars
  const getBadgeForCar = (car) => {
    if (car.id === 3) return 'New Arrival';
    if (car.id === 5) return 'Best Deal';
    if (car.mileage < 35000) return 'Low Mileage';
    return null;
  };

  useEffect(() => {
    if (searchTerm === '') {
      setCars(carsData);
    } else {
      const filtered = carsData.filter(
        (car) =>
          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.year.toString().includes(searchTerm)
      );
      setCars(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-cover bg-center py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 to-blue-primary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Used Car Inventory</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Quality pre-owned vehicles at great prices
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search by model or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none text-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="container mx-auto px-4">
          {cars.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No cars found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} badge={getBadgeForCar(car)} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarListings;
