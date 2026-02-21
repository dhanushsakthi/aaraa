import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import flaskImg from '../assets/products/flask.png';
import penSet1Img from '../assets/products/pen_set_1.jpg';
import penSet2Img from '../assets/products/pen_set_2.png';
import notebookSetImg from '../assets/products/notebook_set.png';

const Home = () => {
  // Mock categories for "Shop by Budget"
  const budgetCategories = [
    { title: 'Under ₹249', range: '249' },
    { title: 'Under ₹499', range: '499' },
    { title: 'Under ₹999', range: '999' },
    { title: 'Premium Gifts', range: 'above' },
  ];

  // Mock featured products using user assets
  const featuredProducts = [
    { id: 1, name: 'LED Temperature Flask', price: 999, originalPrice: 1499, rating: 5, image: flaskImg },
    { id: 2, name: 'Premium Pen & Keychain Set', price: 499, originalPrice: 799, rating: 4, image: penSet1Img },
    { id: 3, name: 'Corporate Gift Notebook Set', price: 1249, originalPrice: 1899, rating: 5, image: notebookSetImg },
    { id: 4, name: 'Customized Pen Holder Set', price: 699, originalPrice: 999, rating: 4, image: penSet2Img },
  ];

  const testimonials = [
    { id: 1, name: 'Priya Sharma', text: 'The quality of the return gifts was exceptional. My guests loved the Ganesha idols!', location: 'Chennai' },
    { id: 2, name: 'Rahul V.', text: 'Fast delivery and premium packaging. Highly recommend for corporate gifting.', location: 'Bangalore' },
    { id: 3, name: 'Anitha R.', text: 'The jute bags are so eco-friendly and stylish. Perfect for my daughter\'s wedding.', location: 'Hyderabad' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="subtitle">Crafting Memories</span>
            <h1>Luxury Gifting Simplified</h1>
            <p>Explore our exclusive collection of return gifts designed to leave a lasting impression on your guests.</p>
            <div className="hero-btns">
              <button className="btn-primary">Shop Collection <ArrowRight size={18} /></button>
              <button className="btn-outline">Our Story</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Budget */}
      <section className="section-padding bg-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="centered-header"
          >
            <span className="section-subtitle">Discover</span>
            <h2 className="section-title">Shop by Budget</h2>
          </motion.div>
          <div className="budget-grid">
            {budgetCategories.map((cat, i) => (
              <motion.div
                key={i}
                className="budget-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="budget-circle">₹</div>
                <h3>{cat.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-subtitle">Most Loved</span>
              <h2 className="section-title">Trending Now</h2>
            </div>
            <a href="/shop" className="view-all">View All <ChevronRight size={16} /></a>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="product-badge">New Arrival</div>
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        fill={idx < product.rating ? "currentColor" : "none"}
                        stroke={idx < product.rating ? "none" : "currentColor"}
                      />
                    ))}
                  </div>
                  <div className="product-price">
                    <span className="price">₹{product.price}</span>
                    <span className="original-price">₹{product.originalPrice}</span>
                  </div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Hearts (Testimonials) */}
      <section className="section-padding bg-primary-faded">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="centered-header"
          >
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">Happy Hearts</h2>
          </motion.div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="quote-icon">"</div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
                <div className="verified-badge">Verified Gift Buyer</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Brand Section */}
      <section className="section-padding bg-white border-y">
        <div className="container story-layout">
          <div className="story-img">
            <img src="https://images.unsplash.com/photo-1513271922711-58b220b73c4d?auto=format&fit=crop&q=80&w=1000" alt="Gifting Story" />
          </div>
          <div className="story-content">
            <span className="section-subtitle">Aaraa's Journey</span>
            <h2 className="section-title">Crafting JOY with Tradition</h2>
            <p>Welcome to Aaraa Gift Shop, your ultimate destination for exquisite return gifts. We believe that every celebration deserves a memory that lasts forever. Our handpicked collections reflect the rich cultural heritage of India, combined with modern luxury.</p>
            <div className="story-stats">
              <div className="stat-item">
                <h3>5000+</h3>
                <span>Gifts Delivered</span>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <span>Unique Designs</span>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <span>Handcrafted</span>
              </div>
            </div>
            <button className="btn-primary">Learn More About Us</button>
          </div>
        </div>
      </section>

      <style>{`
                .home-page {
                    overflow-x: hidden;
                }

                .hero {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1549465220-1d8c9d9c67bc?auto=format&fit=crop&q=80&w=2000');
                    background-size: cover;
                    background-position: center;
                    height: 700px;
                    display: flex;
                    align-items: center;
                    color: white;
                }

                .hero-text {
                    max-width: 650px;
                }

                .subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.85rem;
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                    color: var(--secondary);
                }

                .hero h1 {
                    color: white;
                    font-size: 4.5rem;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                }

                .hero p {
                    font-size: 1.25rem;
                    opacity: 0.95;
                    margin-bottom: 3rem;
                    font-weight: 400;
                }

                .hero-btns {
                    display: flex;
                    gap: 1.5rem;
                }

                .btn-primary {
                    background: var(--primary);
                    color: white;
                    padding: 1.2rem 3rem;
                    font-weight: 700;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .btn-primary:hover {
                    background: var(--primary-light);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(139, 29, 29, 0.2);
                }

                .btn-outline {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                    padding: 1.2rem 3rem;
                    font-weight: 700;
                    border-radius: 4px;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .btn-outline:hover {
                    background: white;
                    color: var(--primary);
                }

                .bg-pattern {
                    background-image: radial-gradient(var(--secondary) 0.5px, transparent 0.5px);
                    background-size: 30px 30px;
                    background-color: var(--background);
                }

                .bg-primary-faded {
                    background-color: #FDF4F4;
                    border-top: 1px solid rgba(139, 29, 29, 0.05);
                    border-bottom: 1px solid rgba(139, 29, 29, 0.05);
                }

                .bg-white { background-color: #fff; }
                .border-y { border-top: 1px solid #eee; border-bottom: 1px solid #eee; }

                .centered-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-subtitle {
                    color: var(--secondary);
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    display: block;
                }

                .section-title {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .budget-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 2.5rem;
                }

                .budget-card {
                    background: #fff;
                    padding: 4rem 2rem;
                    text-align: center;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    cursor: pointer;
                    border: 1px solid rgba(0,0,0,0.02);
                }

                .budget-circle {
                    width: 70px;
                    height: 70px;
                    background: var(--accent);
                    color: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    font-size: 1.8rem;
                    font-weight: 700;
                }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                }

                .product-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    position: relative;
                }

                .product-img-wrapper {
                    aspect-ratio: 1;
                    padding: 2rem;
                    background: #fbfbfb;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .product-img-wrapper img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    transition: transform 0.5s ease;
                }

                .product-card:hover .product-img-wrapper img {
                    transform: scale(1.08);
                }

                .product-info {
                    padding: 2rem;
                    text-align: center;
                }

                .add-to-cart {
                    width: 100%;
                    padding: 1.1rem;
                    background: #fff;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    font-weight: 700;
                    border-radius: 4px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .add-to-cart:hover {
                    background: var(--primary);
                    color: #fff;
                }

                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                }

                .testimonial-card {
                    background: #fff;
                    padding: 3rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    position: relative;
                    text-align: center;
                }

                .quote-icon {
                    font-size: 5rem;
                    color: #fcebd0;
                    position: absolute;
                    top: -10px;
                    left: 20px;
                    font-family: serif;
                    line-height: 1;
                    opacity: 0.5;
                }

                .testimonial-card p {
                    font-size: 1.1rem;
                    font-style: italic;
                    margin-bottom: 2rem;
                    color: var(--text-main);
                }

                .testimonial-author {
                    display: flex;
                    flex-direction: column;
                }

                .verified-badge {
                    margin-top: 1.5rem;
                    font-size: 0.7rem;
                    color: #2e7d32;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .story-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }

                .story-img img {
                    width: 100%;
                    border-radius: 20px;
                    box-shadow: 20px 20px 0 var(--accent);
                }

                .story-content p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    margin-bottom: 3rem;
                    color: var(--text-muted);
                }

                .story-stats {
                    display: flex;
                    gap: 3rem;
                    margin-bottom: 3.5rem;
                }

                .stat-item h3 {
                    font-size: 2rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .stat-item span {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-muted);
                }

                @media (max-width: 900px) {
                    .story-layout {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .hero h1 { font-size: 3rem; }
                    .section-title { font-size: 2.2rem; }
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 4rem;
                }

                .view-all {
                    color: var(--primary);
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1rem;
                }

                .product-badge {
                  position: absolute;
                  top: 20px;
                  left: 20px;
                  background: var(--secondary);
                  color: #000;
                  padding: 0.4rem 1rem;
                  font-size: 0.75rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  border-radius: 4px;
                  z-index: 10;
                }

                .product-rating {
                    color: #FFD700;
                    margin-bottom: 1.25rem;
                    display: flex;
                    justify-content: center;
                    gap: 0.2rem;
                }

                .product-price {
                    display: flex;
                    justify-content: center;
                    gap: 1.25rem;
                    align-items: center;
                    margin-bottom: 2rem;
                }

                .price {
                    color: var(--primary);
                    font-weight: 700;
                    font-size: 1.4rem;
                }

                .original-price {
                    color: var(--text-muted);
                    text-decoration: line-through;
                    font-size: 1rem;
                }
            `}</style>
    </div>
  );
};

export default Home;
