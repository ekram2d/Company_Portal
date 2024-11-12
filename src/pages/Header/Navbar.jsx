import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation

const Header = () => {
  return (
    <header className="bg-white shadow-md rounded-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* ABC Company Logo */}
          <img
            src="path/to/abc-company-logo.svg"
            alt="ABC Company Logo"
            className="w-10 h-10 mr-2"
          />

          {/* Website Title */}
          <Link to="/" className="text-xl font-bold text-primary">
            ABC Company
          </Link>
        </div>

        <div className="hidden md:flex">
          {/* Navigation Links */}
          <ul className="flex items-center space-x-4 text-gray-700">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/nid-verification">NID Verification</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center md:hidden">
          {/* Hamburger Menu for Mobile Navigation */}
          <button className="btn btn-sm btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
