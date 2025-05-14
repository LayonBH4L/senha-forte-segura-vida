
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0a192f] text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0 text-[#64ffda]">
          SecurePassEdu
        </Link>
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Link to="/" className="hover:text-[#64ffda] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/password-strength" className="hover:text-[#64ffda] transition-colors">
              Password Strength
            </Link>
          </li>
          <li>
            <Link to="/brute-force" className="hover:text-[#64ffda] transition-colors">
              Brute Force
            </Link>
          </li>
          <li>
            <Link to="/password-security" className="hover:text-[#64ffda] transition-colors">
              Password Security
            </Link>
          </li>
          <li>
            <Link to="/password-cracker" className="hover:text-[#64ffda] transition-colors">
              Password Cracker Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
