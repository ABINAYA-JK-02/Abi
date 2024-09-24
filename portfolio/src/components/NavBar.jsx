import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Profile",
      path: "/"
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];

  return (
    <div className="w-full h-[7vh] bg-gray-100 text-gray-800 flex flex-row justify-center items-center gap-4">
      <div className="w-[80%] h-full flex flex-row justify-start items-center">
        <div className="w-1/2 font-serif text-3xl flex justify-start items-center">Dharshini R</div>

        <ul className="w-1/2 font-serif font-extrabold flex justify-end items-center space-x-4">
          {NavLinks.map((navdata, index) => (
            <NavLink key={index} to={navdata.path}>
              <li className="bg-teal-500 text-white font-bold py-2 px-4 rounded">{navdata.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
 
