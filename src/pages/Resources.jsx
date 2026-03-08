import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { guides } from '../data/guides';
import './Resources.css';

const Guides = () => {
    const revealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const primaryGuides = guides.slice(0, 6);
    const bonusGuides = guides.slice(6);

    return (
        <div className="ed-resources pt-24 pb-24">
            <div className="container">

                {/* Header */}
                <div className="resources-header border-bottom-thick pb-12">
                    <motion.span
                        className="label-accent"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        04 // Guides
                    </motion.span>
                    <motion.h1
                        className="font-serif index-title text-ink mt-2"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        Eight Practical <br /> Guides.
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-muted max-w-lg text-lg"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        Practical resources for navigating common communication situations in college and professional settings. Each guide is readable in full on this site and printable from your browser.
                    </motion.p>
                </div>

                {/* Primary Guides */}
                <motion.div
                    className="guides-list mt-12"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {primaryGuides.map((guide) => (
                        <motion.div key={guide.slug} className="guide-row border-bottom-thin" variants={revealVariants}>
                            <div className="guide-badge-col">
                                <span className="sm-badge">{guide.badge}</span>
                                <span className="guide-category text-muted">{guide.category}</span>
                            </div>
                            <div className="guide-info">
                                <h2 className="font-serif guide-title">{guide.title}</h2>
                                <p className="text-muted guide-subtitle mt-2">{guide.subtitle}</p>
                            </div>
                            <div className="guide-action">
                                <Link to={`/guides/${guide.slug}`} className="guide-link-btn">
                                    Read Guide <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bonus / Workshop Guides */}
                <motion.div
                    className="mt-16"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <div className="bonus-header mb-6">
                        <span className="label-accent">Workshop Materials</span>
                    </div>
                    <motion.div
                        className="guides-list"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        {bonusGuides.map((guide) => (
                            <motion.div key={guide.slug} className="guide-row border-bottom-thin" variants={revealVariants}>
                                <div className="guide-badge-col">
                                    <span className="sm-badge">{guide.badge}</span>
                                    <span className="guide-category text-muted">{guide.category}</span>
                                </div>
                                <div className="guide-info">
                                    <h2 className="font-serif guide-title">{guide.title}</h2>
                                    <p className="text-muted guide-subtitle mt-2">{guide.subtitle}</p>
                                </div>
                                <div className="guide-action">
                                    <Link to={`/guides/${guide.slug}`} className="guide-link-btn">
                                        Read Guide <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Print Note */}
                <motion.div
                    className="print-note mt-12 border-top pt-8"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <p className="text-muted text-sm">
                        All guides are printable. Open any guide, then use your browser's print function (Ctrl/Cmd + P) to save as PDF or print a physical copy.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Guides;
