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
      <section className="section bg-light">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Shop by Budget
          </motion.h2>
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

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Aaraa's Best Sellers</h2>
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

      <style>{`
                .home-page {
                    overflow-x: hidden;
                }

                .hero {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1549465220-1d8c9d9c67bc?auto=format&fit=crop&q=80&w=2000');
                    background-size: cover;
                    background-position: center;
                    height: 650px;
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
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                }

                .hero p {
                    font-size: 1.2rem;
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
                    padding: 1.1rem 2.8rem;
                    font-weight: 700;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1rem;
                }

                .btn-primary:hover {
                    background: var(--primary-light);
                    transform: translateY(-2px);
                }

                .btn-outline {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                    padding: 1.1rem 2.8rem;
                    font-weight: 700;
                    border-radius: 4px;
                    font-size: 1rem;
                }

                .btn-outline:hover {
                    background: white;
                    color: var(--primary);
                }

                .section {
                    padding: 6rem 0;
                }

                .bg-light {
                    background-color: var(--background);
                }

                .section-title {
                    text-align: center;
                    font-size: 2.8rem;
                    margin-bottom: 4.5rem;
                    position: relative;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 3px;
                    background: var(--secondary);
                }

                .budget-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 2.5rem;
                }

                .budget-card {
                    background: var(--surface);
                    padding: 3.5rem 2rem;
                    text-align: center;
                    border-radius: 12px;
                    box-shadow: var(--shadow);
                    cursor: pointer;
                    border: 1px solid rgba(0,0,0,0.03);
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
                    box-shadow: 0 4px 10px rgba(139, 29, 29, 0.1);
                }

                .budget-card h3 {
                    font-family: 'Inter', sans-serif;
                    font-size: 1.1rem;
                    color: var(--text-main);
                }

                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                }

                .product-card {
                    background: var(--surface);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: var(--shadow);
                    position: relative;
                    border: 1px solid rgba(0,0,0,0.03);
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

                .product-img-wrapper {
                    aspect-ratio: 1;
                    background: #fbfbfb;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 3rem;
                }

                .product-img-wrapper img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                .product-info {
                    padding: 2rem;
                    text-align: center;
                }

                .product-info h3 {
                    font-family: 'Inter', sans-serif;
                    font-size: 1.2rem;
                    margin-bottom: 0.75rem;
                    color: var(--text-main);
                    font-weight: 600;
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

                .add-to-cart {
                    width: 100%;
                    padding: 1rem;
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    font-weight: 700;
                    border-radius: 4px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.85rem;
                }

                .add-to-cart:hover {
                    background: var(--primary);
                    color: white;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 4.5rem;
                }

                .section-header .section-title {
                    margin-bottom: 0;
                    text-align: left;
                }

                .section-header .section-title::after {
                    left: 0;
                    transform: none;
                }

                .view-all {
                    color: var(--primary);
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1rem;
                }

                @media (max-width: 768px) {
                    .hero h1 {
                        font-size: 2.5rem;
                    }
                    .hero {
                        height: 550px;
                    }
                    .section-title {
                        font-size: 2.2rem;
                    }
                }
            `}</style>
    </div>
  );
};

export default Home;
