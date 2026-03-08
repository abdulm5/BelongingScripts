import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SubmitStory.css';

const ShareStory = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        context: '',
        experience: '',
        identity: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.experience.trim()) {
            setIsSubmitted(true);
        }
    };

    const revealVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }
    };

    return (
        <div className="ed-submit bg-ink pb-24">
            <div className="container ed-submit-grid">

                {/* Left Side */}
                <motion.div
                    className="submit-context pt-24"
                    initial="hidden" animate="visible" variants={revealVariants}
                >
                    <span className="label-accent">05 // Share Your Story</span>
                    <h1 className="font-serif submit-title mt-4">
                        Share Your <br /> Experience.
                    </h1>
                    <div className="submit-manifesto mt-8 text-muted text-lg max-w-lg">
                        <p>
                            Have you had a moment where unwritten communication rules affected how you felt in a classroom, meeting, or professional setting? Your reflection helps us understand these experiences and build better resources.
                        </p>
                        <p className="mt-6">
                            <strong>Some prompts:</strong> Was there a time you did not speak up because you were unsure how? A professor's response that felt confusing? A group project where communication broke down in ways that felt hard to name?
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    className="submit-form-wrapper"
                    initial="hidden" animate="visible" variants={revealVariants}
                >
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="ed-form pt-24">

                            <div className="form-group">
                                <label className="form-label" htmlFor="context">
                                    I. The Setting
                                    <span className="label-helper block mt-1">(Classroom, Office Hours, Financial Aid, Networking Event, Group Project)</span>
                                </label>
                                <input
                                    type="text"
                                    id="context"
                                    name="context"
                                    className="form-control"
                                    placeholder="e.g., Freshman seminar discussion"
                                    value={formData.context}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group mt-12">
                                <label className="form-label" htmlFor="experience">
                                    II. What Happened
                                    <span className="label-helper block mt-1">(Describe the moment, what was said, what you felt, what was confusing or difficult.)</span>
                                </label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    className="form-control textarea"
                                    rows="6"
                                    placeholder="I wanted to ask a question in class but I wasn't sure how to interrupt, so I stayed quiet and left feeling like I'd missed something important..."
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group mt-12">
                                <label className="form-label" htmlFor="identity">
                                    III. Your Context (Optional)
                                    <span className="label-helper block mt-1">(First-gen, multilingual, major, year, helps us understand the pattern better.)</span>
                                </label>
                                <input
                                    type="text"
                                    id="identity"
                                    name="identity"
                                    className="form-control"
                                    placeholder="e.g., First-gen sophomore, STEM major"
                                    value={formData.identity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-actions mt-12 border-top pt-8 flex-between">
                                <span className="anonymous-notice font-sans text-muted text-sm tracking-widest uppercase">
                                    Anonymous &amp; private
                                </span>
                                <button type="submit" className="btn btn-accent icon-btn">
                                    Submit <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    ) : (
                        <motion.div
                            className="success-state pt-24"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="font-serif success-title">Thank you.</h2>
                            <p className="mt-6 text-lg text-muted">
                                Your reflection has been received. It helps us understand what students are navigating and build more useful resources. We appreciate you sharing it.
                            </p>
                            <button
                                className="btn border-parchment text-parchment mt-12"
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({ context: '', experience: '', identity: '' });
                                }}
                            >
                                Share Another
                            </button>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </div>
    );
};

export default ShareStory;
