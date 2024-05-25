import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <h2>Get In Touch</h2>

      <div className="contact-content">
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@lumberbusiness.com</p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/lumberbusiness" target="_blank" rel="noopener noreferrer">facebook.com/lumberbusiness</a></p>
      </div>
    </section>
  );
};

export default Contact;
