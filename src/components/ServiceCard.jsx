import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="bg-blue-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        {IconComponent ? (
          <IconComponent className="w-8 h-8 text-blue-primary" />
        ) : (
          <span className="text-4xl">{service.icon}</span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-blue-primary mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="text-xl font-semibold text-orange-primary mb-4">
        {service.priceRange}
      </div>
      <Link
        to="/contact"
        className="btn-modern btn-gradient btn-shimmer block w-full text-white text-center py-3 rounded-xl font-semibold relative z-10 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <span className="relative z-10">Schedule Service</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
