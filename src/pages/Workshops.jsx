import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Workshops.css';

const Workshops = () => {
    const revealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const workshops = [
        {
            num: '01',
            title: 'Speaking Up in Class Without Overthinking It',
            duration: '45 min',
            desc: 'Most students who stay quiet in class are not unprepared — they just do not know how to enter the conversation. This workshop covers practical strategies for joining discussions, using sentence starters, building on others\' points, and contributing even when you are not fully certain of your answer.',
            takeaways: [
                'Sentence starters for agreeing, questioning, and building on a point',
                'Strategies for large lecture classes versus seminar discussions',
                'How to reference a reading or lecture clearly',
                'Ways to contribute when you are uncertain'
            ],
            guide: 'class-participation-guide'
        },
        {
            num: '02',
            title: 'How to Use Office Hours Effectively',
            duration: '45 min',
            desc: 'Many students avoid office hours because they are not sure what they are for, how to show up, or what to say when they get there. This workshop demystifies the whole thing — from introducing yourself to asking a question when you are behind.',
            takeaways: [
                'What office hours are actually for and who they are meant for',
                'How to introduce yourself and state why you are there',
                'What to say when you are confused or behind on work',
                'Email templates for scheduling, follow-up, and clarification'
            ],
            guide: 'office-hours-starter-pack'
        },
        {
            num: '03',
            title: 'Academic Emails That Sound Clear and Professional',
            duration: '60 min',
            desc: 'Academic email has an unofficial format that nobody teaches explicitly. This workshop walks through every element — subject lines, greetings, tone, amount of context, how to ask for things politely — with real examples for the situations students actually face.',
            takeaways: [
                'Subject line formats that work',
                'Appropriate greetings and closings for different relationships',
                'How to ask for extensions, recommendations, and clarification',
                'Common mistakes that make emails feel off-tone'
            ],
            guide: 'academic-email-template-guide'
        },
        {
            num: '04',
            title: 'Group Projects, Turn-Taking, and Productive Communication',
            duration: '45 min',
            desc: 'Group work has its own unwritten rules about how to suggest ideas, disagree without creating conflict, divide tasks, and follow up when someone is unresponsive. This workshop addresses the real friction points students describe most often.',
            takeaways: [
                'Language for suggesting ideas diplomatically',
                'How to disagree without sounding hostile',
                'Short message templates for scheduling and accountability',
                'Strategies for follow-up when communication breaks down'
            ],
            guide: 'group-project-communication-toolkit'
        }
    ];

    return (
        <div className="ed-workshops pt-24 pb-24">
            <div className="container">

                {/* Header */}
                <div className="workshops-header border-bottom-thick pb-8 mb-16">
                    <motion.span
                        className="label-accent"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        02 // Workshops
                    </motion.span>
                    <motion.h1
                        className="font-serif massive-title"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        Four Sessions. <br />Real Skills.
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-muted max-w-lg"
                        initial="hidden" animate="visible" variants={revealVariants}
                    >
                        Each workshop is 45–60 minutes and produces a one-page handout participants can keep. Sessions can be hosted independently or paired with a campus writing center, multilingual student office, or student success program.
                    </motion.p>
                </div>

                {/* Workshop Cards */}
                <motion.div
                    className="workshop-list"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                >
                    {workshops.map((w) => (
                        <motion.div key={w.num} className="workshop-card border-bottom pb-14 mb-14" variants={revealVariants}>
                            <div className="workshop-card-grid">
                                <div className="wc-meta">
                                    <span className="wc-num text-muted">{w.num}</span>
                                    <span className="wc-duration sm-badge mt-4">{w.duration}</span>
                                </div>
                                <div className="wc-body">
                                    <h2 className="font-serif wc-title">{w.title}</h2>
                                    <p className="text-muted mt-4 text-lg wc-desc">{w.desc}</p>

                                    <div className="wc-takeaways mt-8">
                                        <p className="takeaway-label text-muted uppercase tracking-widest text-sm mb-4">Participants Leave With</p>
                                        <ul className="takeaway-list">
                                            {w.takeaways.map((item, i) => (
                                                <li key={i} className="takeaway-item">{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="wc-actions mt-8">
                                        <Link to={`/guides/${w.guide}`} className="btn icon-btn">
                                            View Companion Guide <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    className="workshop-contact-cta mt-8 border-top pt-12"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
                >
                    <div className="cta-contact-inner">
                        <div>
                            <h3 className="font-serif">Interested in hosting a workshop?</h3>
                            <p className="text-muted mt-3 max-w-lg">
                                If you work at a writing center, multilingual student office, or student success program and think your students would benefit from one of these sessions, reach out.
                            </p>
                        </div>
                        <Link to="/share" className="btn btn-solid mt-6-mobile">
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Workshops;
