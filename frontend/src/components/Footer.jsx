import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <img src={logo} alt="Aaraa Logo" className="footer-logo" />
                    <p>India's premier destination for exquisite return gifts and traditional handicrafts. Spreading joy, one gift at a time.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/shop">All Products</a></li>
                        <li><a href="/category/return-gifts">Return Gifts</a></li>
                        <li><a href="/category/jute-bags">Jute Bags</a></li>
                        <li><a href="/category/brass">Brass Collection</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return & Refund</a></li>
                        <li><a href="#">Bulk Orders</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>123 Gifting Lane, Chennai, Tamil Nadu, India</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>hello@aaraagifts.com</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Aaraa Gift Shop. All Rights Reserved. | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
                </div>
            </div>

            <style>{`
                .site-footer {
                    background: #1A1A1A;
                    color: #fff;
                    padding: 5rem 0 0;
                    margin-top: 5rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
                    gap: 4rem;
                    padding-bottom: 5rem;
                }

                .footer-logo {
                    height: 80px;
                    margin-bottom: 1.5rem;
                    filter: brightness(0) invert(1);
                }

                .footer-brand p {
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }

                .social-links a {
                    color: var(--secondary);
                }

                .footer-links h3, .footer-contact h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.4rem;
                    margin-bottom: 2rem;
                    color: var(--secondary);
                }

                .footer-links ul {
                    list-style: none;
                }

                .footer-links li {
                    margin-bottom: 1rem;
                }

                .footer-links a {
                    color: rgba(255,255,255,0.7);
                    transition: var(--transition);
                }

                .footer-links a:hover {
                    color: var(--secondary);
                    padding-left: 5px;
                }

                .footer-contact {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .contact-item {
                    display: flex;
                    gap: 1rem;
                    color: rgba(255,255,255,0.7);
                    align-items: flex-start;
                }

                .contact-item span {
                    line-height: 1.4;
                }

                .footer-bottom {
                    background: #111;
                    padding: 1.5rem 0;
                    text-align: center;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.5);
                }

                .footer-bottom a {
                    color: rgba(255,255,255,0.5);
                    margin-left: 10px;
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 3rem;
                    }
                }

                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
