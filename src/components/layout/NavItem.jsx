import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-gray-800 hover:text-blue-600 ${isActive ? 'border-b-2 border-blue-600 font-semibold' : ''} transition-all duration-300`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
