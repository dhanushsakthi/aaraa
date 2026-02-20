import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>Exquisite Return Gifts</h1>
                    <p>Handpicked treasures for your most cherished moments.</p>
                    <button className="cta-btn">Explore Collection</button>
                </motion.div>
            </section>

            {/* Featured Categories */}
            <section className="featured-sections">
                <div className="container">
                    <h2>Our Collections</h2>
                    <div className="grid">
                        <div className="category-card">
                            <h3>Wedding Favors</h3>
                        </div>
                        <div className="category-card">
                            <h3>Corporate Gifts</h3>
                        </div>
                        <div className="category-card">
                            <h3>Traditional Returns</h3>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero {
          height: 80vh;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero h1 {
          font-size: 4rem;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 2rem;
          transition: var(--transition);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(197, 160, 89, 0.3);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1rem;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .category-card {
          height: 400px;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          cursor: pointer;
        }

        .category-card:hover {
          transform: scale(1.02);
        }
      `}</style>
        </div>
    );
};

export default Home;
