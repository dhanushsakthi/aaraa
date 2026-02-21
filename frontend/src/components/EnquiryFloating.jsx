import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Star } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

const EnquiryFloating = () => {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [showTestimonial, setShowTestimonial] = useState(false);

    useEffect(() => {
        // Show testimonial after a short delay
        const timer = setTimeout(() => {
            setShowTestimonial(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="enquiry-floating-container">
            {/* Floating Testimonial Popup */}
            <AnimatePresence>
                {showTestimonial && (
                    <motion.div
                        className="floating-testimonial"
                        initial={{ opacity: 0, x: -20, y: 0 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <button className="close-popup" onClick={() => setShowTestimonial(false)}>
                            <X size={12} />
                        </button>
                        <div className="testimonial-content">
                            <div className="product-thumb">
                                <img src="https://www.wedtree.com/cdn/shop/files/Brass-Murugan-Idol-WL4147-1.jpg?v=1708422453&width=100" alt="Murugan Idol" />
                            </div>
                            <div className="review-details">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#FFD700" stroke="none" />)}
                                </div>
                                <p>"Nothing else is needed to be said about wedtree products. The idol is stunning..."</p>
                                <span className="product-name">Brass Murugan Idol - WL4147</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Enquire Button */}
            <motion.button
                className="floating-enquire-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEnquiryOpen(true)}
            >
                <div className="btn-icon">
                    <FileText size={20} fill="white" />
                </div>
                <span>ENQUIRE</span>
            </motion.button>

            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
            />

            <style>{`
                .enquiry-floating-container {
                    position: fixed;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2000;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    align-items: flex-start;
                }

                .floating-enquire-btn {
                    background: #e91e63;
                    color: white;
                    border: none;
                    border-radius: 50px;
                    padding: 8px 15px 8px 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    box-shadow: 0 10px 25px rgba(233, 30, 99, 0.3);
                    cursor: pointer;
                }

                .btn-icon {
                    background: rgba(255, 255, 255, 0.2);
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .floating-testimonial {
                    background: white;
                    width: 280px;
                    padding: 15px;
                    border-radius: 12px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                    position: relative;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .close-popup {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    background: none;
                    border: none;
                    color: #999;
                    cursor: pointer;
                }

                .testimonial-content {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }

                .product-thumb {
                    width: 60px;
                    height: 60px;
                    background: #fdfaf5;
                    border-radius: 8px;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .product-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .review-details {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .review-details p {
                    font-size: 0.75rem;
                    line-height: 1.3;
                    color: #444;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .product-name {
                    font-size: 0.65rem;
                    color: #888;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .stars {
                    display: flex;
                    gap: 2px;
                    margin-bottom: 2px;
                }

                @media (max-width: 768px) {
                    .enquiry-floating-container {
                        bottom: 20px;
                        left: 20px;
                    }
                    .floating-testimonial {
                        width: 240px;
                    }
                }
            `}</style>
        </div>
    );
};

export default EnquiryFloating;
