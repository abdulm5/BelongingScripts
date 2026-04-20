import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Workshops', path: '/workshops' },
        { name: 'Reflections', path: '/reflections' },
        { name: 'Guides', path: '/guides' },
    ];

    return (
        <header className="site-header">
            <div className="partner-banner" role="region" aria-label="Partnership announcement">
                <div className="container partner-banner-inner">
                    <p className="partner-banner-text">
                        We&apos;ve partnered with{' '}
                        <a
                            href="https://www.childfund.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ChildFund International
                        </a>
                        {' '}to expand our corpus to English learners globally.
                    </p>
                </div>
            </div>
            <nav className="editorial-navbar">
                <div className="container nav-border">
                    <div className="nav-wrapper">

                        {/* Logo */}
                        <Link to="/" className="nav-brand">
                            <span className="brand-primary">Belonging Scripts</span>
                            <span className="brand-secondary">Initiative .01</span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="nav-links desktop-only">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    <span className="nav-num">0{idx + 1}</span>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/share" className="nav-cta">
                                [ Share ]
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <X size={28} /> : <span>MENU</span>}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-inner container">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                <span className="mobile-num">0{idx + 1}</span> {link.name}
                            </Link>
                        ))}
                        <Link to="/share" className="mobile-link text-accent">
                            [ Share Your Story ]
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
