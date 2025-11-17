import { Link } from 'react-router-dom';

const CarCard = ({ car, badge }) => {
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

  const getBadgeColor = (badgeType) => {
    switch (badgeType) {
      case 'New Arrival':
        return 'bg-green-500';
      case 'Best Deal':
        return 'bg-orange-primary';
      case 'Low Mileage':
        return 'bg-blue-primary';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <Link to={`/cars/${car.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          {badge && (
            <div className={`absolute top-4 right-4 ${getBadgeColor(badge)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
              {badge}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-blue-primary mb-2">{car.model}</h3>
          <div className="text-3xl font-bold text-orange-primary mb-3">
            {formatPrice(car.price)}
          </div>
          <div className="space-y-1 text-gray-600 mb-4">
            <p><span className="font-semibold">Year:</span> {car.year}</p>
            <p><span className="font-semibold">Mileage:</span> {formatMileage(car.mileage)} miles</p>
          </div>
          <p className="text-gray-700 line-clamp-2 mb-4">{car.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <span className="text-orange-primary font-semibold inline-flex items-center gap-1 group transition-all duration-300 hover:gap-2">
              <span className="relative">
                View Details
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
