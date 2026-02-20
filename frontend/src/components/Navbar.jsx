const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">AARAA GIFT SHOP</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="nav-actions">
                    <span>Search</span>
                    <span>Cart (0)</span>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          background: white;
          padding: 1.5rem 0;
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 3rem;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          gap: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
