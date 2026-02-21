import React from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <p>Free Shipping on orders above ₹1000 | Premium Return Gifts</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container nav-layout">
          <div className="logo-section">
            <a href="/">
              <img src={logo} alt="Aaraa Gift Shop" className="site-logo" />
            </a>
          </div>

          <div className="search-section">
            <div className="search-bar">
              <input type="text" placeholder="Search for premium return gifts..." />
              <Search size={20} className="search-icon" />
            </div>
          </div>

          <div className="actions-section">
            <div className="action-item"><User size={24} /><span>Account</span></div>
            <div className="action-item"><Heart size={24} /><span>Wishlist</span></div>
            <div className="action-item cart-btn">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/new-arrivals" className="nav-link highlight">New & Best Sellers</a>
            </li>
            <li className="nav-item has-dropdown">
              <a href="/category/return-gifts" className="nav-link">Return Gifts <ChevronDown size={14} /></a>
            </li>
            <li className="nav-item has-dropdown">
              <a href="/category/by-price" className="nav-link">By Price <ChevronDown size={14} /></a>
            </li>
            <li className="nav-item">
              <a href="/category/jute-bags" className="nav-link">Jute Bags</a>
            </li>
            <li className="nav-item">
              <a href="/category/brass" className="nav-link">Brass</a>
            </li>
            <li className="nav-item">
              <a href="/category/divine" className="nav-link">Divine Figurines</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <style>{`
                .header {
                    background: var(--white);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: var(--shadow);
                }

                .top-bar {
                    background: var(--primary);
                    color: white;
                    padding: 0.5rem 0;
                    text-align: center;
                    font-size: 0.8rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .main-header {
                    padding: 1.5rem 0;
                    border-bottom: 1px solid #f0f0f0;
                }

                .nav-layout {
                    display: grid;
                    grid-template-columns: 200px 1fr auto;
                    align-items: center;
                    gap: 3rem;
                }

                .site-logo {
                    height: 60px;
                    width: auto;
                    object-fit: contain;
                }

                .search-section {
                    max-width: 600px;
                    width: 100%;
                }

                .search-bar {
                    display: flex;
                    align-items: center;
                    background: #f5f5f5;
                    padding: 0.75rem 1.25rem;
                    border-radius: 50px;
                    border: 1px solid transparent;
                    transition: var(--transition);
                }

                .search-bar:focus-within {
                    background: white;
                    border-color: var(--secondary);
                }

                .search-bar input {
                    border: none;
                    background: transparent;
                    width: 100%;
                    outline: none;
                    font-size: 0.95rem;
                    color: var(--text-main);
                }

                .search-icon {
                    color: var(--text-muted);
                }

                .actions-section {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .action-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.25rem;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: var(--transition);
                }

                .action-item span {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .action-item:hover {
                    color: var(--primary);
                }

                .cart-btn {
                    position: relative;
                }

                .cart-count {
                    position: absolute;
                    top: -5px;
                    right: 25px;
                    background: var(--primary);
                    color: white;
                    font-size: 0.7rem;
                    width: 18px;
                    height: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                }

                .nav-menu {
                    background: var(--white);
                    padding: 0.75rem 0;
                }

                .nav-list {
                    display: flex;
                    list-style: none;
                    justify-content: center;
                    gap: 2.5rem;
                }

                .nav-link {
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .nav-link.highlight {
                    color: var(--primary);
                }

                .nav-link:hover {
                    color: var(--primary);
                }

                @media (max-width: 1024px) {
                    .nav-layout {
                        grid-template-columns: 1fr auto;
                        gap: 1.5rem;
                    }
                    .search-section {
                        display: none;
                    }
                    .nav-menu {
                        display: none;
                    }
                }
            `}</style>
    </header>
  );
};

export default Navbar;
