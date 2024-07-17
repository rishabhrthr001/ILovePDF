
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-white ">
            <div className="container mx-auto flex justify-between items-center p-5">

                <div className="social-icons space-x-10">
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://leetcode.com/u/Rishabh_rthr001/" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="#" className="text-black hover:text-red-500"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="contact-info font-extralight text-black">
                    <p>123 Main Street, New Delhi, India</p>
                    <p>Email: Rishabh.rthr001@gmail.com</p>
                    <p>Phone: +91-0000000000</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
