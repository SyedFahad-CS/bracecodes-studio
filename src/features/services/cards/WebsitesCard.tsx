import React from 'react';
import ScrollReveal from '../../../components/animations/ScrollReveal';

const WebsitesCard: React.FC = () => {
    return (
        <ScrollReveal delay={150} className="group text-white h-full">
            <div className="bg-linear-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] h-full relative overflow-hidden shadow-2xl flex flex-col justify-between border border-white/5">

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Content Area */}
                <div className="relative z-10 p-8 pt-10">
                    <h3 className="text-2xl font-bold mb-2 text-white">Websites & Landing Pages</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[90%] font-medium">
                        Fast, conversion-focused sites built on modern stacks like React & Next.js.
                    </p>
                </div>

                {/* Browser Mockup */}
                <div className="relative w-full h-[240px] mt-2 px-8 pb-0 overflow-hidden">
                    <div className="w-full h-full bg-slate-950 rounded-t-xl border border-white/10 shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col">

                        {/* Browser Header (Traffic Lights + URL Bar + Tabs) */}
                        <div className="h-10 bg-[#1e1e2e] border-b border-white/5 flex items-center px-4 gap-4 shrink-0">
                            {/* Traffic Lights */}
                            <div className="flex gap-1.5 shrink-0">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#ff5f56]/20" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#ffbd2e]/20" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f]/20" />
                            </div>

                            {/* Tabs/URL Area */}
                            <div className="flex-1 flex gap-2">
                                {/* Active Tab */}
                                <div className="h-7 bg-slate-800/80 rounded-md flex-1 max-w-[140px] border border-white/5 flex items-center px-3 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-indigo-500/50" />
                                    <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Browser Body Mockup */}
                        <div className="flex-1 bg-[#0f172a] p-4 relative overflow-hidden">
                            {/* Hero Section Mockup */}
                            <div className="w-full h-[120px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 mb-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
                                <div className="h-2.5 w-1/3 bg-indigo-400/20 rounded-full" />
                                <div className="h-2 w-1/4 bg-slate-400/10 rounded-full" />
                                <div className="mt-2 flex gap-2">
                                    <div className="h-6 w-16 bg-indigo-500/20 rounded shadow-sm" />
                                    <div className="h-6 w-16 bg-white/5 rounded border border-white/5" />
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                                <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                            </div>

                            {/* Hover Reveal Effect - Scanline/Sheen */}
                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default WebsitesCard;
