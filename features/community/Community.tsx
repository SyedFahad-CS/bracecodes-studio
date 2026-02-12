import React from 'react';
import { MessageSquare, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-50 via-white to-transparent -z-10 opacity-60" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-800">Invite Only Collective</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-slate-900"
                    >
                        Build connections <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                            that matter.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-serif"
                    >
                        A private network for senior engineers, founders, and creative technologists shaping the future of software.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#" className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg overflow-hidden shadow-xl shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
                            <span className="relative flex items-center gap-2">
                                <MessageSquare className="w-5 h-5" />
                                Apply to Join
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                        <p className="text-sm text-slate-400 mt-4 sm:mt-0">
                            Current wait time: <span className="text-slate-600 font-medium">~2 days</span>
                        </p>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-6xl mx-auto">
                    {[
                        {
                            icon: Users,
                            color: "text-indigo-600",
                            bg: "bg-indigo-50",
                            title: "Vetted Network",
                            desc: "Connect with verified professionals from top tech companies. No spam, no noise."
                        },
                        {
                            icon: Zap,
                            color: "text-amber-600",
                            bg: "bg-amber-50",
                            title: "Rapid Feedback",
                            desc: "Get instant, high-quality feedback on your code, designs, and startup ideas."
                        },
                        {
                            icon: MessageSquare,
                            color: "text-rose-600",
                            bg: "bg-rose-50",
                            title: "Private Channels",
                            desc: "Focused discussions on AI, Rust, System Design, and GTM strategies."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Value Prop / "Why Join" */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden max-w-6xl mx-auto text-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                More than just a chat server.
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We curate opportunities, host exclusive fireside chats, and foster a culture of deep work and genuine collaboration.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Weekly expert-led workshops",
                                    "Co-founder matching",
                                    "Beta access to internal tools",
                                    "Exclusive job board"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 font-medium text-slate-200"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Abstract UI Representation */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 rounded-full" />
                            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                                <div className="flex gap-4 mb-6 border-b border-slate-700/50 pb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                                    <div>
                                        <div className="h-4 w-32 bg-slate-700 rounded mb-2" />
                                        <div className="h-3 w-20 bg-slate-700/50 rounded" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-3 w-full bg-slate-700/30 rounded" />
                                    <div className="h-3 w-[90%] bg-slate-700/30 rounded" />
                                    <div className="h-3 w-[60%] bg-slate-700/30 rounded" />
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <div className="h-8 w-20 bg-indigo-600 rounded-lg opacity-20" />
                                    <div className="h-8 w-20 bg-slate-700 rounded-lg opacity-20" />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl"
                            >
                                <Users className="w-6 h-6 text-indigo-400" />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;
