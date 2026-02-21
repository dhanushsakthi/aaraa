import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        enquiryType: 'Return Gifts',
        name: '',
        phone: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enquiry Submitted:', formData);
        alert('Thank you for your enquiry! We will get back to you soon.');
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="modal-overlay" onClick={onClose}>
                <motion.div
                    className="enquiry-modal"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-modal" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className="modal-header">
                        <h2>Gifting someone? Let us help you.</h2>
                        <p className="modal-subtitle">
                            Looking for return gifts, corporate gifts or one to one gifts? Let us know more details to help you better.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="enquiry-form">
                        <div className="form-group">
                            <label className="radio-label">What are you looking for <span className="required">*</span></label>
                            <div className="radio-options">
                                <label className="radio-item">
                                    <input
                                        type="radio"
                                        name="enquiryType"
                                        value="Return Gifts"
                                        checked={formData.enquiryType === 'Return Gifts'}
                                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                                    />
                                    <span className="radio-text">Return Gifts ( Bulk gifting | Min 20 pcs )</span>
                                </label>
                                <label className="radio-item">
                                    <input
                                        type="radio"
                                        name="enquiryType"
                                        value="Corporate gifts"
                                        checked={formData.enquiryType === 'Corporate gifts'}
                                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                                    />
                                    <span className="radio-text">Corporate gifts</span>
                                </label>
                                <label className="radio-item">
                                    <input
                                        type="radio"
                                        name="enquiryType"
                                        value="One to One gifts"
                                        checked={formData.enquiryType === 'One to One gifts'}
                                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                                    />
                                    <span className="radio-text">One to One gifts ( Premium gifts )</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                required
                                className="modal-input"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                required
                                className="modal-input"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                required
                                className="modal-input"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="modal-submit-btn">
                            Submit
                        </button>
                    </form>
                </motion.div>

                <style>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 1rem;
          }

          .enquiry-modal {
            background: white;
            width: 100%;
            max-width: 500px;
            border-radius: 20px;
            padding: 2.5rem;
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          }

          .close-modal {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            color: #333;
            transition: var(--transition);
          }

          .close-modal:hover {
            color: var(--primary);
            transform: rotate(90deg);
          }

          .modal-header h2 {
            font-size: 1.8rem;
            color: #000;
            margin-bottom: 1rem;
            line-height: 1.2;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
          }

          .modal-subtitle {
            font-size: 1rem;
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.5;
          }

          .enquiry-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-group label {
            font-size: 1rem;
            font-weight: 600;
            color: #333;
          }

          .required { color: #e91e63; }

          .radio-options {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 0.5rem;
          }

          .radio-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            cursor: pointer;
            font-size: 0.95rem;
            color: #444;
          }

          .radio-item input[type="radio"] {
            margin-top: 0.25rem;
            accent-color: #e91e63;
            width: 18px;
            height: 18px;
          }

          .modal-input {
            width: 100%;
            padding: 0.8rem 1.25rem;
            background: #f0f0f0;
            border: 1px solid transparent;
            border-radius: 50px;
            font-size: 1rem;
            transition: var(--transition);
          }

          .modal-input:focus {
            background: white;
            border-color: #e91e63;
            outline: none;
            box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
          }

          .modal-submit-btn {
            background: #e91e63;
            color: white;
            padding: 1rem;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            margin-top: 1rem;
            transition: var(--transition);
          }

          .modal-submit-btn:hover {
            background: #d81b60;
            transform: scale(1.02);
            box-shadow: 0 10px 20px rgba(233, 30, 99, 0.2);
          }

          @media (max-width: 480px) {
            .enquiry-modal {
              padding: 1.5rem;
            }
            .modal-header h2 { font-size: 1.5rem; }
          }
        `}</style>
            </div>
        </AnimatePresence>
    );
};

export default EnquiryModal;
