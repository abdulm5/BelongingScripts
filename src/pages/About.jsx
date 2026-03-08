import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const revealVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    return (
        <div className="ed-about">

            {/* Page Header */}
            <section className="manifesto-header border-bottom-thick">
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={revealVariants}>
                        <span className="label-accent">01 // About the Initiative</span>
                        <h1 className="manifesto-title font-serif">
                            Language <br />
                            Is Not A <span className="text-accent italic">Neutral</span> <br />
                            System.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Founder Statement */}
            <section className="manifesto-body section container">
                <div className="grid-2">

                    <motion.div
                        className="manifesto-lead font-serif"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                    >
                        I founded the Belonging Scripts Initiative to address a problem I kept noticing in academic spaces: many students are expected to know how to participate, ask for help, write professional emails, or navigate office hours without ever being taught how those interactions work.
                    </motion.div>

                    <motion.div
                        className="manifesto-text"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                    >
                        <p>
                            The project uses ideas from linguistics and discourse analysis to create practical workshops and student-friendly guides that make those hidden communication rules easier to understand. Its focus is especially relevant for multilingual, first-generation, and less socially confident students who may know the material but still feel unsure about how to enter the conversation.
                        </p>
                        <div className="founder-signoff mt-8 pt-4 border-top">
                            <span className="text-muted block text-sm">Founded By</span>
                            <strong className="block text-lg">Abdul Mohammad, 2026</strong>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Why This Matters */}
            <section className="ed-why section bg-ink border-top-thick">
                <div className="container">
                    <motion.div
                        className="why-header mb-12"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                    >
                        <span className="label-accent">02 // Why It Matters</span>
                        <h2 className="font-serif text-parchment mt-4">Access Is a <br />Language Problem.</h2>
                    </motion.div>

                    <motion.div
                        className="why-body grid-2"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        <motion.p className="why-lead font-serif text-parchment" variants={revealVariants}>
                            Language does more than express ideas. It also shapes access.
                        </motion.p>
                        <motion.div variants={revealVariants}>
                            <p className="text-muted text-lg">
                                Students are often judged on how confidently they speak, ask questions, write emails, and present themselves long before anyone evaluates what they actually know. The communication behaviors that signal competence, belonging, and readiness are rarely taught explicitly, they are assumed.
                            </p>
                            <p className="text-muted text-lg mt-6">
                                By treating those moments as language issues rather than personal shortcomings, this project gives students clearer tools for navigating them.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="ed-mission section container">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <span className="label-accent">03 // Mission</span>
                    <blockquote className="mission-statement font-serif mt-6">
                        "The Belonging Scripts Initiative helps students navigate the unwritten language expectations of college and professional life. Through workshops, resource guides, and small-scale language research, the initiative focuses on the communication challenges that often affect participation, confidence, and access for multilingual, first-generation, and underrepresented students."
                    </blockquote>
                </motion.div>
            </section>

            {/* How It Works */}
            <section className="ed-model section container border-top">
                <motion.div
                    className="model-header mb-12"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <span className="label-accent">04 // How It Works</span>
                    <h2 className="font-serif mt-4">Research to <br />Resource.</h2>
                </motion.div>

                <motion.div
                    className="model-steps"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    {[
                        {
                            step: '01',
                            title: 'Identify the barrier',
                            desc: 'We collect short anonymous student reflections on moments when unwritten communication rules affected their confidence or belonging.'
                        },
                        {
                            step: '02',
                            title: 'Analyze the pattern',
                            desc: 'Using ideas from linguistics and discourse analysis, we look at what makes those moments difficult and what kinds of tools would help.'
                        },
                        {
                            step: '03',
                            title: 'Build the resource',
                            desc: 'We turn that understanding into practical workshops, downloadable guides, and printable handouts that students can actually use.'
                        }
                    ].map((item) => (
                        <motion.div key={item.step} className="model-step border-top py-8" variants={revealVariants}>
                            <div className="step-num text-muted">{item.step}</div>
                            <div className="step-content">
                                <h3 className="font-serif step-title">{item.title}</h3>
                                <p className="text-muted mt-3">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Collaborators */}
            <section className="ed-collaborators section bg-bone border-top-thick">
                <div className="container">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                    >
                        <span className="label-accent">05 // People</span>
                        <h2 className="font-serif mt-4 mb-10">Who Makes It Run.</h2>
                    </motion.div>

                    <motion.div
                        className="collaborators-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    >
                        <motion.div className="collab-card border-top py-8" variants={revealVariants}>
                            <div className="collab-role text-muted text-sm uppercase tracking-widest mb-2">Founder</div>
                            <h3 className="font-serif collab-name">Abdul Mohammad</h3>
                            <p className="text-muted mt-3">Leads workshops, creates guides, and conducts small-scale language research on communication barriers in academic settings.</p>
                        </motion.div>

                        <motion.div className="collab-card border-top py-8" variants={revealVariants}>
                            <div className="collab-role text-muted text-sm uppercase tracking-widest mb-2">Campus Partner</div>
                            <h3 className="font-serif collab-name">Georgia State University</h3>
                            <p className="text-muted mt-3">Home institution of the initiative. GSU's diverse, first-generation, and multilingual student population is exactly who this project is built for.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
