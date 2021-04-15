import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (

        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Newsletter Sign-up
                    </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at any time
                    </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="your email" className="footer-input" />
                        <Button buttonStyle='btn--outline'> Subscribe </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> Customer Care </h2>
                        <Link to='/sign-up'> Newsletter Sign-up </Link>
                        <Link to='/sign-up'> Careers </Link>
                        <Link to='/sign-up'> Shipping Policy </Link>
                        <Link to='/sign-up'> Refund Policy </Link>
                        <Link to='/sign-up'> FAQs </Link>
                        <Link to='/sign-up'> Privacy Policy </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Social Media </h2>
                        <Link to='/sign-up'> Instagram </Link>
                        <Link to='/sign-up'> Reddit </Link>
                        <Link to='/sign-up'> Facebook </Link>
                        <Link to='/sign-up'> Twitter </Link>
                        <Link to='/sign-up'> Youtube </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> COVID-19 Policies </h2>
                        <Link to='/sign-up'> Shipping Policy </Link>
                        <Link to='/sign-up'> Refund Policy </Link>
                        <Link to='/sign-up'> FAQs </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> About Us</h2>
                        <Link to='/sign-up'> Locations </Link>
                        <Link to='/sign-up'> Careers </Link>
                        <Link to='/sign-up'> Shipping Policy </Link>
                        <Link to='/sign-up'> Refund Policy </Link>
                        <Link to='/sign-up'> FAQs </Link>
                        <Link to='/sign-up'> Privacy Policy </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Treval <i className="fas fa-compass"></i>
                        </Link>
                    </div>
                    <small className="website-rights"> Treval © 2021</small>
                    <div className="social-icon">
                        <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link facebook">
                        <i className="fab fa-instagram"></i>
                        </Link><Link to="/" target="_blank" aria-label="Twitter" className="social-icon-link facebook">
                        <i className="fab fa-twitter-square"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Snapchat" className="social-icon-link facebook">
                        <i className="fab fa-snapchat-square"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Linkedin" className="social-icon-link facebook">
                        <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Footer
