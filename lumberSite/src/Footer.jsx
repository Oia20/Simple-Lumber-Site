import React from 'react';
import './Footer.css';

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} CraftForte</p>
    </footer>
  );
};

export default Footer;
