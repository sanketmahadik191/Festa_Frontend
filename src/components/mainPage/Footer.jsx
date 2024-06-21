import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-50 lg:px-96 md:px-24 p-5 font-sans ">
      <div className="flex justify-between border-b border-gray-300 pb-4 mb-6">
        <div className="text-xl font-bold">FESTA</div>
        <div className="flex gap-4">
          <div>India</div>
          <div>English</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div>
          <h3 className="font-semibold mb-2">ABOUT Festa</h3>
          <ul className="space-y-1 cursor-pointer">
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">ZOMAVERSE</h3>
          <ul className="space-y-1 cursor-pointer">
            <li>Festa</li>
            <li>Zapya</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Festaland</li>
            <li>Weather Union</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">FOR RESTAURANTS</h3>
          <ul className="space-y-1 cursor-pointer">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">LEARN MORE</h3>
          <ul className="space-y-1 cursor-pointer">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social links</h3>
          <div className="flex gap-4 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
