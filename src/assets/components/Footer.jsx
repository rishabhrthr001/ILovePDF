import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="footer-links">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-black hover:text-red-500 uppercase">Home</a></li>
                        <li><a href="#" className="text-black hover:text-red-500 uppercase">About Us</a></li>
                        <li><a href="#" className="text-black hover:text-red-500 uppercase">Services</a></li>
                        <li><a href="#" className="text-black hover:text-red-500 uppercase">Contact</a></li>
                    </ul>
                </div>
                <div className="social-icons space-x-10"> 
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="contact-info text-black">
                    <p>123 Main Street, City, Country</p>
                    <p>Email: Rishabh.rthr001@gmail.com</p>
                    <p>Phone: +91-0000000000</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
