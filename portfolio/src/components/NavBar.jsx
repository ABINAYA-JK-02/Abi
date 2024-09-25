import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = ['gradient-theme-1', 'gradient-theme-2', 'gradient-theme-3', 'gradient-theme-4'];

  useEffect(() => {
    document.body.classList.remove(...themes); // Remove all previous themes
    document.body.classList.add(themes[themeIndex]); // Apply the current theme
  }, [themeIndex]);

  const toggleTheme = () => {
    setThemeIndex((prevThemeIndex) => (prevThemeIndex + 1) % themes.length);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">MyPortfolio</a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
