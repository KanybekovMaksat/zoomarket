import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './Header.css';

export default function Header() {
    const { cart, setCartOpen, user, logout } = useStore();
    const [scrolled, setScrolled] = useState(false);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
                <Link to="/" className="logo">
                    <span className="logo-icon">🐾</span>
                    <span className="logo-text">Zoo<span className="logo-accent">Market</span></span>
                </Link>

                <nav className="nav">
                    <a href="/#catalog" className="nav-link">Каталог</a>
                    <a href="/#about" className="nav-link">О нас</a>
                    <a href="/#contacts" className="nav-link">Контакты</a>
                </nav>

                <div className="header-actions">
                    <button className="btn-icon" onClick={() => setCartOpen(true)} title="Корзина">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span className={`cart-badge ${totalItems > 0 ? 'has-items' : ''}`}>{totalItems}</span>
                    </button>

                    {user ? (
                        <button className="btn-primary" onClick={logout}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>{user.name}</span>
                        </button>
                    ) : (
                        <Link to="/login" className="btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>Войти</span>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
