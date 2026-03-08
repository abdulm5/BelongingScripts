import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Landing.css';

const Landing = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    const revealVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const activities = [
        {
            num: '01',
            title: 'Workshops',
            desc: 'Hosts practical sessions on classroom participation, office hours, academic email writing, and group communication.'
        },
        {
            num: '02',
            title: 'Guides',
            desc: 'Creates downloadable guides that break down common communication situations into clear, usable examples and templates.'
        },
        {
            num: '03',
            title: 'Student Reflections',
            desc: 'Collects short anonymous reflections on moments when language affected confidence, misunderstanding, or belonging.'
        },
        {
            num: '04',
            title: 'Campus Partnerships',
            desc: 'Works with writing centers, multilingual student offices, and student success programs to reach students who need it most.'
        },
    ];

    return (
        <div className="landing-editorial">

            {/* Hero Section */}
            <section className="ed-hero">
                <div className="container ed-hero-grid">
                    <motion.div
                        className="hero-text-block"
                        initial="hidden" animate="visible" variants={staggerContainer}
                    >
                        <motion.p className="hero-kicker" variants={revealVariants}>
                            [ Language Access Project ]
                        </motion.p>
                        <motion.h1 className="hero-headline font-serif" variants={revealVariants}>
                            The Rules <br />
                            <span className="text-accent">Nobody</span> <br />
                            Teaches You.
                        </motion.h1>

                        <motion.div className="hero-subtext mt-8" variants={revealVariants}>
                            <p>
                                The Belonging Scripts Initiative helps students navigate the unwritten language expectations of college and professional life. Through workshops, resource guides, and small-scale language research, the initiative focuses on the communication challenges that often affect participation, confidence, and access for multilingual, first-generation, and underrepresented students.
                            </p>
                            <div className="hero-actions mt-6">
                                <Link to="/guides" className="btn btn-solid">
                                    Browse Guides
                                </Link>
                                <Link to="/workshops" className="btn">
                                    See Workshops
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="hero-visual" style={{ y: y1 }}>
                        <div className="graphic-block">
                            <span className="large-asterisk">*</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="ed-impact border-top-thick border-bottom-thick bg-ink">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-stat">
                            <span className="stat-val font-serif text-accent">30</span>
                            <span className="stat-label">Students<br />Reached</span>
                        </div>
                        <div className="impact-stat stat-divider">
                            <span className="stat-val font-serif text-parchment">02</span>
                            <span className="stat-label">Workshops<br />Hosted</span>
                        </div>
                        <div className="impact-stat stat-divider">
                            <span className="stat-val font-serif text-parchment">08</span>
                            <span className="stat-label">Guides<br />Created</span>
                        </div>
                        <div className="impact-stat stat-divider">
                            <span className="stat-val font-serif text-parchment">05</span>
                            <span className="stat-label">Student<br />Reflections</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="ed-pillars section container text-left">
                <motion.div
                    className="pillar-header"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
                >
                    <span className="pillar-index text-muted">01, What We Do</span>
                    <h2 className="font-serif mt-2">Four Ways We <br /> Show Up.</h2>
                </motion.div>

                <motion.div
                    className="pillars-wrapper mt-12"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                >
                    <div className="pillar-list">
                        {activities.map((item, i) => (
                            <motion.div key={i} className="pillar-row border-top" variants={revealVariants}>
                                <div className="row-num text-muted">{item.num}</div>
                                <div className="row-title font-serif">{item.title}</div>
                                <div className="row-desc">{item.desc}</div>
                                <div className="row-icon">
                                    <ArrowRight size={20} className="text-accent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Pull Quote */}
            <section className="ed-quote section container">
                <motion.div
                    className="quote-grid"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <div className="quote-space"></div>
                    <div className="quote-content border-top-thick">
                        <h3 className="font-serif mt-6">Who enters the conversation, who hesitates, who gets understood, and who is dismissed are shaped by discourse patterns people are expected to know but are rarely taught.</h3>
                        <div className="mt-8">
                            <Link to="/about" className="btn btn-accent">About the Initiative</Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Guides Preview CTA */}
            <section className="ed-cta-strip section bg-ink border-top-thick">
                <div className="container">
                    <motion.div
                        className="cta-strip-inner flex-between"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                    >
                        <div>
                            <p className="text-muted text-sm tracking-widest uppercase mb-2">Free Resources</p>
                            <h3 className="font-serif text-parchment">Eight practical guides, <br className="hidden-mobile" />ready to use.</h3>
                        </div>
                        <Link to="/guides" className="btn btn-solid border-parchment text-parchment mt-4-mobile icon-btn">
                            Browse All Guides <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Landing;
