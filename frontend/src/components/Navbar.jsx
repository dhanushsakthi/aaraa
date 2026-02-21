import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Always show if at the very top
      if (currentScrollPos < 50) {
        setIsVisible(true);
      } else {
        // Hide if scrolling down, show if scrolling up
        setIsVisible(prevScrollPos > currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${!isVisible ? 'header-hidden' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <p>Free Shipping on orders above ₹1000 | Premium Return Gifts</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container nav-layout">
          {/* Left: Search */}
          <div className="search-section">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <Search size={20} className="search-icon" />
            </div>
          </div>

          {/* Center: Logo */}
          <div className="logo-section">
            <a href="/">
              <img src={logo} alt="Aaraa Gift Shop" className="site-logo" />
            </a>
          </div>

          {/* Right: Actions */}
          <div className="actions-section">
            <div className="action-item"><User size={24} /></div>
            <div className="action-item cart-btn">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
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
            <li className="nav-item">
              <a href="/category/return-gifts" className="nav-link">Return Gifts</a>
            </li>
            <li className="nav-item">
              <a href="/category/favour-bags" className="nav-link">Favour Bags</a>
            </li>
            <li className="nav-item">
              <a href="/category/personal-gifts" className="nav-link">Personal Gifts</a>
            </li>
            <li className="nav-item">
              <a href="/category/home-living" className="nav-link">Home & Living</a>
            </li>
            <li className="nav-item">
              <a href="/category/gifting-moments" className="nav-link">Gifting for Moments</a>
            </li>
            <li className="nav-item">
              <a href="/category/corporate" className="nav-link">Corporate Gifting</a>
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
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .header-hidden {
                    transform: translateY(-100%);
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
                    padding: 1rem 0;
                    border-bottom: 1px solid #f0f0f0;
                }

                .nav-layout {
                    display: grid;
                    grid-template-columns: 1fr 200px 1fr;
                    align-items: center;
                    gap: 1rem;
                }

                .logo-section {
                    display: flex;
                    justify-content: center;
                }

                .site-logo {
                    height: 60px;
                    width: auto;
                    object-fit: contain;
                }

                .search-section {
                    max-width: 400px;
                }

                .search-bar {
                    display: flex;
                    align-items: center;
                    background: #fff;
                    padding: 0.6rem 1rem;
                    border-radius: 50px;
                    border: 1px solid #ddd;
                    transition: var(--transition);
                }

                .search-bar:focus-within {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(139, 29, 29, 0.05);
                }

                .search-bar input {
                    border: none;
                    background: transparent;
                    width: 100%;
                    outline: none;
                    font-size: 0.9rem;
                    color: var(--text-main);
                }

                .search-icon {
                    color: var(--text-muted);
                }

                .actions-section {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                    justify-content: flex-end;
                }

                .action-item {
                    display: flex;
                    align-items: center;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: var(--transition);
                }

                .action-item:hover {
                    color: var(--primary);
                }

                .cart-btn {
                    position: relative;
                }

                .cart-count {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: var(--primary);
                    color: white;
                    font-size: 0.65rem;
                    width: 16px;
                    height: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                }

                .nav-menu {
                    background: var(--white);
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f0f0f0;
                }

                .nav-list {
                    display: flex;
                    list-style: none;
                    justify-content: center;
                    gap: 1.5rem;
                }

                .nav-link {
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    letter-spacing: 0.2px;
                    color: var(--text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.15rem;
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
                    }
                    .search-section, .nav-menu {
                        display: none;
                    }
                }
            `}</style>
    </header>
  );
};

export default Navbar;
