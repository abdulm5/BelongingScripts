import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Printer } from 'lucide-react';
import { getGuideBySlug, guides } from '../data/guides';
import './GuideDetail.css';

const GuideDetail = () => {
    const { slug } = useParams();
    const guide = getGuideBySlug(slug);

    const revealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    if (!guide) {
        return (
            <div className="guide-not-found pt-24 pb-24 container">
                <h1 className="font-serif">Guide not found.</h1>
                <p className="text-muted mt-4">The guide you are looking for does not exist.</p>
                <Link to="/guides" className="btn btn-solid mt-8">Back to All Guides</Link>
            </div>
        );
    }

    const currentIndex = guides.findIndex(g => g.slug === slug);
    const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
    const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

    const handlePrint = () => window.print();

    return (
        <div className="guide-detail pt-20 pb-24">

            {/* Back nav */}
            <div className="guide-back-bar container">
                <Link to="/guides" className="back-link">
                    <ArrowLeft size={16} /> All Guides
                </Link>
                <button className="print-btn" onClick={handlePrint}>
                    <Printer size={16} /> Print / Save PDF
                </button>
            </div>

            {/* Header */}
            <header className="guide-header container border-bottom-thick pb-10 mt-8">
                <motion.div initial="hidden" animate="visible" variants={revealVariants}>
                    <div className="guide-header-meta">
                        <span className="sm-badge">{guide.badge}</span>
                        <span className="guide-meta-category text-muted">{guide.category}</span>
                    </div>
                    <h1 className="font-serif guide-page-title mt-4">{guide.title}</h1>
                    <p className="guide-page-subtitle mt-4 text-muted">{guide.subtitle}</p>
                </motion.div>
            </header>

            {/* Intro */}
            <motion.div
                className="guide-intro container border-bottom pt-10 pb-10"
                initial="hidden" animate="visible" variants={revealVariants}
            >
                <p className="guide-intro-text font-serif">{guide.intro}</p>
            </motion.div>

            {/* Sections */}
            <motion.div
                className="guide-sections container mt-12"
                initial="hidden" animate="visible" variants={staggerContainer}
            >
                {guide.sections.map((section, i) => (
                    <motion.div key={i} className="guide-section mb-12" variants={revealVariants}>

                        <h2 className="font-serif guide-section-heading border-top pt-8">{section.heading}</h2>

                        {section.body && (
                            <p className="guide-body-text mt-4">{section.body}</p>
                        )}

                        {section.tips && (
                            <ul className="guide-tip-list mt-6">
                                {section.tips.map((tip, j) => (
                                    <li key={j} className="guide-tip-item">{tip}</li>
                                ))}
                            </ul>
                        )}

                        {section.examples && (
                            <div className="guide-examples mt-6">
                                {section.examples.map((ex, j) => (
                                    <div key={j} className="guide-example-row">
                                        <div className="example-label text-muted">{ex.label}</div>
                                        <blockquote className="example-text font-serif">{ex.text}</blockquote>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.templates && (
                            <div className="guide-templates mt-6">
                                {section.templates.map((tmpl, j) => (
                                    <div key={j} className="guide-template-block">
                                        <div className="template-label">{tmpl.label}</div>
                                        {tmpl.subject && (
                                            <div className="template-subject">
                                                <span className="template-field-label">Subject:</span>
                                                <span className="template-field-value">{tmpl.subject}</span>
                                            </div>
                                        )}
                                        <pre className="template-body">{tmpl.body}</pre>
                                    </div>
                                ))}
                            </div>
                        )}

                    </motion.div>
                ))}
            </motion.div>

            {/* Print note */}
            <div className="guide-print-note container border-top mt-8 pt-8">
                <p className="text-muted text-sm">
                    To save or print this guide, use your browser&apos;s print function (Ctrl/Cmd + P) and choose &quot;Save as PDF.&quot;
                </p>
            </div>

            {/* Prev / Next Navigation */}
            <nav className="guide-nav container border-top mt-12 pt-10">
                <div className="guide-nav-inner">
                    {prevGuide ? (
                        <Link to={`/guides/${prevGuide.slug}`} className="guide-nav-link guide-nav-prev">
                            <span className="guide-nav-dir">← Previous</span>
                            <span className="guide-nav-title font-serif">{prevGuide.title}</span>
                        </Link>
                    ) : <div />}
                    {nextGuide ? (
                        <Link to={`/guides/${nextGuide.slug}`} className="guide-nav-link guide-nav-next">
                            <span className="guide-nav-dir">Next →</span>
                            <span className="guide-nav-title font-serif">{nextGuide.title}</span>
                        </Link>
                    ) : <div />}
                </div>
            </nav>

        </div>
    );
};

export default GuideDetail;
