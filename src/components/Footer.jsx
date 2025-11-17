import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/logo.png" 
              alt="Sparx Automotive Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400">
              Your trusted partner for auto repair services and quality used cars.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-orange-primary transition-colors">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400">📞 (903) 816-8330</p>
            <p className="text-gray-400">📧 info@sparxautomotives.com</p>
            <p className="text-gray-400">📍 1504 W Houston St, Sherman, TX 75092</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sparx Automotives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

