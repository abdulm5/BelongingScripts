import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="editorial-footer bg-ink">
            <div className="container">
                <div className="footer-top grid-2 border-bottom">
                    <div className="footer-manifesto">
                        <h2 className="footer-title font-serif">Belonging Scripts<br />Initiative.</h2>
                        <p className="footer-desc mt-4">
                            A student-led initiative helping multilingual, first-generation, and underrepresented students navigate the unwritten communication expectations of college and professional life.
                        </p>
                    </div>

                    <div className="footer-nav grid-2">
                        <div>
                            <h4 className="footer-heading">Initiative</h4>
                            <nav className="footer-links">
                                <Link to="/about">About</Link>
                                <Link to="/workshops">Workshops</Link>
                                <Link to="/reflections">Reflections</Link>
                            </nav>
                        </div>
                        <div>
                            <h4 className="footer-heading">Resources</h4>
                            <nav className="footer-links">
                                <Link to="/guides">Guides</Link>
                                <Link to="/share" className="text-accent">Share Your Story</Link>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom flex-between">
                    <div className="footer-brandcaps">
                        <span>Vol 1.</span>
                        <span>Issue 01</span>
                        <span>Est. 2026</span>
                    </div>
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Belonging Scripts Initiative.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
