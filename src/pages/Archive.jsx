import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Archive.css';

const Reflections = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const stories = [
        {
            id: 1,
            excerpt: "In seminar, I always felt like my natural speaking rhythm was too slow or too roundabout. People here expect you to jump in aggressively, speak in bullet points, and assert space. That's just not how I was raised to communicate respect.",
            tag: "Classroom",
            size: "large"
        },
        {
            id: 2,
            excerpt: "When I first emailed a professor, I used 'Esteemed Professor'. He replied with just 'ok - sent from my iphone.' I felt so out of place.",
            tag: "Email",
            size: "small"
        },
        {
            id: 3,
            excerpt: "Networking events are a nightmare. There's a specific script for small talk, you're supposed to smoothly transition from weather to your major to asking for an internship. I end up freezing.",
            tag: "Professional",
            size: "medium"
        },
        {
            id: 4,
            excerpt: "As a first-generation student, learning the vocabulary of financial aid and scheduling was harder than my actual classes. 'Bursar', 'Provost', 'Prerequisite', 'Add/Drop', it's a gatekeeping language.",
            tag: "Institutional",
            size: "medium"
        },
        {
            id: 5,
            excerpt: "I lower my pitch, flatten my accent, and use multisyllabic words to sound 'professional'. It's exhausting to perform that script every day.",
            tag: "Identity",
            size: "grid-span-2"
        }
    ];

    return (
        <div className="ed-archive pt-24 pb-24">
            <div className="container">

                <div className="archive-header mb-12">
                    <span className="label-accent">03 // Student Reflections</span>
                    <h1 className="font-serif archive-title mt-2">
                        What Students <br /> Have Said.
                    </h1>
                    <p className="mt-4 text-muted max-w-lg">
                        Short reflections from students on moments when language affected their confidence, understanding, or sense of belonging in academic and professional settings. Shared anonymously.
                    </p>
                </div>

                <motion.div
                    className="bento-grid"
                    initial="hidden" animate="visible" variants={containerVariants}
                >
                    {stories.map((story) => (
                        <motion.div
                            key={story.id}
                            className={`testimony-card ${story.size}`}
                            variants={itemVariants}
                        >
                            <div className="testimony-meta flex-between border-bottom pb-4 mb-4">
                                <span className="t-tag">{story.tag}</span>
                            </div>

                            <blockquote className="font-serif">
                                "{story.excerpt}"
                            </blockquote>

                            <div className="testimony-footer mt-auto pt-6">
                                <span className="t-anon">Anonymous student</span>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div className="testimony-card submit-prompt bg-ink" variants={itemVariants}>
                        <h3 className="font-serif text-parchment mb-4">Your experience matters too.</h3>
                        <p className="text-muted mb-8">
                            Have you had a moment where an unwritten communication rule made you feel out of place? Share it, your reflection helps us understand these experiences and build better resources.
                        </p>
                        <Link to="/share" className="btn btn-solid border-parchment text-parchment w-full">Share Your Story</Link>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default Reflections;
