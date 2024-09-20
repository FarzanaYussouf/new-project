
import React from 'react';
import './Footer.css'; // Assuming you save your CSS in Footer.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="contact-info "id='Contact'>
                <h3>Contact Us</h3>
                <p className='fw-light fs-5'>If you have any questions, feel free to reach out!</p>
                <p className='fs-5'>Email: info@example.com</p>
              
                
                <p className='fs-5'>We look forward to hearing from you!</p>
            </div>
            <hr />
            <div className="social-media">
                <a href="https://facebook.com" className="icon facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="icon twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="icon instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="icon linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#" className="icon youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#" className="icon pinterest">
                    <FontAwesomeIcon icon={faPinterestP} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
