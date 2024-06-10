import React from 'react';
import "./footer.css";
import FooterNavItem from "../components/FooterNavItem.jsx";

function Footer() {
    const usefulLinks = ["Home", "About Us", "Services", "Terms of Service", "Privacy Policy"];
    const locations = ["Location 1", "Location 2", "Location 3", "Location 4", "Location 5"];

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 footer-info">
                        <h3>CENTURY CINEMAX</h3>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <span>CENTURY CINEMA</span>
                    </div>
                </div>
                <div className="row social-links mt-3">
                    <a href="#" className="twitter"><i className="icon ion-logo-twitter"></i></a>
                    <a href="#" className="facebook"><i className="icon ion-logo-facebook"></i></a>
                    <a href="#" className="instagram"><i className="icon ion-logo-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="icon ion-logo-googleplus"></i></a>
                    <a href="#" className="linkedin"><i className="icon ion-logo-linkedin"></i></a>
                    <a href="#" className="youtube"><i className="icon ion-logo-youtube"></i></a>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        {usefulLinks.map(link => (
                            <FooterNavItem key={link} name={link} />
                        ))}
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Century Cinemax </h4>
                        {locations.map(link => (
                            <FooterNavItem key={link} name={link} />
                        ))}
                    </div>
                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br />
                            City Name, State 123456 <br />
                            Uganda <br />
                            Phone: +1 2345 6789 00 <br />
                            Email: info@example.com
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; <strong><span>CENTURY CINEMAX</span></strong> All rights reserved
                    </div>
                    <div>
                        Designed by <a href="https://www.centurycinema.com">CENTURY CINEMAX</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
