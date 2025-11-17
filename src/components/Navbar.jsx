import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Sparx Automotive Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/cars" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Used Cars
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <Link
            to="/contact"
            className="btn-modern btn-gradient btn-shimmer text-white px-6 py-2 rounded-xl font-semibold relative z-10 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">Book Appointment</span>
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/cars" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Used Cars
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-primary text-white shadow-md' 
                    : 'bg-blue-primary/10 text-blue-primary hover:bg-blue-primary hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

