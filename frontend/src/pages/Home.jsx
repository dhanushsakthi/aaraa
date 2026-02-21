import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';

const categories = [
  { name: "Jute Bags", image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400" },
  { name: "Brass Idols", image: "https://images.unsplash.com/photo-1608681534062-638706341257?auto=format&fit=crop&q=80&w=400" },
  { name: "Puja Utilites", image: "https://images.unsplash.com/photo-1577918894170-ebbcd9356262?auto=format&fit=crop&q=80&w=400" },
  { name: "Dry Fruit Boxes", image: "https://images.unsplash.com/photo-1590611357128-7a982c730d70?auto=format&fit=crop&q=80&w=400" },
  { name: "Meenakari Plate", image: "https://images.unsplash.com/photo-1513519107127-1bed33748e4c?auto=format&fit=crop&q=80&w=400" },
  { name: "Decorative Diyas", image: "https://images.unsplash.com/photo-1605342013849-078508f77372?auto=format&fit=crop&q=80&w=400" }
];

const budgetRanges = [
  { range: "99", icon: "💎" },
  { range: "149", icon: "✨" },
  { range: "249", icon: "🍱" },
  { range: "Premium", icon: "👑" }
];

const trendingProducts = [
  { id: 1, name: "Premium Brass Ganesha Idol", price: 1299, originalPrice: 1599, rating: 5, image: "https://images.unsplash.com/photo-1608681534062-638706341257?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Embroidered Return Gift Bag", price: 189, originalPrice: 249, rating: 4, image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Ornate Brass Diya Set", price: 299, originalPrice: 499, rating: 5, image: "https://images.unsplash.com/photo-1605342013849-078508f77372?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Traditional Meenakari Box", price: 449, originalPrice: 699, rating: 4, image: "https://images.unsplash.com/photo-1513519107127-1bed33748e4c?auto=format&fit=crop&q=80&w=400" }
];

const testimonials = [
  { id: 1, name: "Priya Sharma", text: "The quality of the return gifts was exceptional. My guests loved the Ganesha idols!", location: "Chennai" },
  { id: 2, name: "Rahul V.", text: "Fast delivery and premium packaging. Highly recommend Aaraa for corporate gifting.", location: "Bangalore" },
  { id: 3, name: "Anitha R.", text: "The jute bags are so eco-friendly and stylish. Perfect for our family celebration.", location: "Hyderabad" },
];

const Home = () => {
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
            <h1>Aaraa Gift Shop</h1>
            <p>Your one-stop destination for premium Indian return gifts and handcrafted treasures.</p>
            <div className="hero-btns">
              <button className="btn-primary">Shop Collection <ArrowRight size={18} /></button>
              <button className="btn-outline">Our Story</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Selling Categories */}
      <section className="top-selling section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="premium-title">Top Selling Return Gifts</h2>
            <p className="premium-subtitle">Quality gifts for your special moments</p>
          </motion.div>

          <div className="category-grid">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-img">
                  <template shadowroot="open">
                    <style>{`img { width: 100%; height: 100%; object-fit: cover; }`}</style>
                  </template>
                  <img src={cat.image} alt={cat.name} />
                </div>
                <h3>{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Gifts by Price */}
      <section className="shop-by-budget section-padding bg-pattern">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="premium-title">Return Gifts By Price</h2>
            <p className="premium-subtitle">Find the perfect gift within your budget</p>
          </div>
          <div className="budget-grid">
            {budgetRanges.map((budget, i) => (
              <motion.div
                key={i}
                className="budget-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="budget-icon">{budget.icon}</div>
                <h3>{budget.range === 'Premium' ? 'Premium' : `Under ₹${budget.range}`}</h3>
                <p>Premium selection of return gifts</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending section-padding">
        <div className="container">
          <div className="section-header flex-between">
            <div>
              <h2 className="premium-title">Trending Now</h2>
              <p className="premium-subtitle">Most loved gifts this season</p>
            </div>
            <button className="view-all">View All Products <ArrowRight size={16} /></button>
          </div>
          <div className="products-grid">
            {trendingProducts.map((product, i) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="product-badge">Top Choice</div>
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

      {/* Happy Hearts Section */}
      <section className="testimonials section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="premium-title">Customer Stories</h2>
            <p className="premium-subtitle">Real experiences from our celebrated shoppers</p>
          </div>
          <div className="testimonial-grid">
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

      <style>{`
                .home-page { overflow-x: hidden; }

                .premium-title {
                    font-size: 2.2rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                }

                .premium-subtitle {
                    font-size: 1.1rem;
                    color: #777;
                    margin-bottom: 3rem;
                }

                .category-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1.5rem;
                }

                .category-card {
                    background: #FDF8F0;
                    border-radius: 12px;
                    padding: 1.5rem 1rem;
                    text-align: center;
                    cursor: pointer;
                    transition: var(--transition);
                }

                .category-card:hover {
                    background: #F8F4EA;
                    box-shadow: 0 10px 20px rgba(139, 29, 29, 0.05);
                }

                .category-img {
                    aspect-ratio: 1;
                    border-radius: 8px;
                    overflow: hidden;
                    margin-bottom: 1.25rem;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .category-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .category-card h3 {
                    font-size: 0.95rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin: 0;
                    letter-spacing: 0.2px;
                }

                .hero {
                    height: 80vh;
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80');
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    color: white;
                }

                .hero-content {
                    max-width: 800px;
                }

                .hero-text h1 {
                    font-size: 4rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                .hero-text .subtitle {
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    display: block;
                    font-weight: 600;
                    color: var(--secondary);
                }

                .hero-text p {
                    font-size: 1.25rem;
                    margin-bottom: 2.5rem;
                    opacity: 0.9;
                }

                .hero-btns {
                    display: flex;
                    gap: 1.5rem;
                }

                .section-header { margin-bottom: 3.5rem; }
                .section-header h2 { font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary); }
                .text-center { text-align: center; }

                .bg-pattern {
                    background-image: radial-gradient(var(--secondary) 0.5px, transparent 0.5px);
                    background-size: 30px 30px;
                    background-color: #fafafa;
                }

                .budget-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }

                .budget-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: var(--shadow);
                    border: 1px solid #f0f0f0;
                    transition: var(--transition);
                }

                .budget-icon { 
                    font-size: 2.5rem; 
                    margin-bottom: 1.5rem;
                    color: var(--secondary);
                }

                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                }

                .product-card {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: var(--transition);
                    position: relative;
                }

                .product-badge {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: var(--primary);
                    color: white;
                    padding: 4px 12px;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    z-index: 10;
                }

                .product-img-wrapper {
                    aspect-ratio: 1;
                    overflow: hidden;
                    background: #fdfdfd;
                    padding: 1.5rem;
                }

                .product-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: transform 0.5s ease;
                }

                .product-card:hover .product-img-wrapper img {
                    transform: scale(1.1);
                }

                .product-info { padding: 1.5rem; text-align: center; }
                .product-rating { display: flex; gap: 2px; color: #ffc107; margin-bottom: 0.5rem; justify-content: center; }
                .product-price { display: flex; gap: 10px; align-items: center; margin-bottom: 1.5rem; justify-content: center; }
                .price { font-size: 1.4rem; font-weight: 700; color: var(--primary); }
                .original-price { text-decoration: line-through; color: #999; font-size: 0.9rem; }

                .add-to-cart {
                    width: 100%;
                    padding: 0.8rem;
                    background: white;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    border-radius: 8px;
                    font-weight: 700;
                    transition: var(--transition);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .add-to-cart:hover {
                    background: var(--primary);
                    color: white;
                }

                .testimonial-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .testimonial-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    text-align: center;
                }

                .quote-icon {
                    font-size: 4rem;
                    color: var(--secondary);
                    opacity: 0.2;
                    position: absolute;
                    top: 10px;
                    left: 20px;
                    font-family: serif;
                }

                .testimonial-card p {
                    font-style: italic;
                    margin-bottom: 1.5rem;
                    color: #555;
                    position: relative;
                    z-index: 1;
                    font-size: 1.05rem;
                }

                .testimonial-author strong { display: block; color: var(--primary); font-size: 1.1rem; }
                .testimonial-author span { color: #888; font-size: 0.9rem; }

                .flex-between { display: flex; justify-content: space-between; align-items: flex-end; }
                .view-all { background: none; border: none; color: var(--primary); font-weight: 700; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }

                @media (max-width: 1024px) {
                    .category-grid { grid-template-columns: repeat(3, 1fr); }
                }

                @media (max-width: 768px) {
                    .hero-text h1 { font-size: 2.5rem; }
                    .category-grid { grid-template-columns: repeat(2, 1fr); }
                    .hero { height: 60vh; }
                }
            `}</style>
    </div>
  );
};

export default Home;
