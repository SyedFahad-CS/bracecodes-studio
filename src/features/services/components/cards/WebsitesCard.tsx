import React from 'react';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';

const WebsitesCard: React.FC = () => {
    return (
        <ScrollReveal delay={150} className="group text-white h-full">
            <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-3xl p-5 h-full relative overflow-hidden shadow-2xl shadow-indigo-500/30 flex flex-col justify-end">
                {/* Visual Artifact: Browser Mockup */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
                    <div className="absolute top-5 left-5 right-5 bg-white/10 backdrop-blur-md rounded-t-xl border border-white/20 shadow-xl transform group-hover:translate-y-2 transition-transform duration-700">
                        {/* Browser Header / Navbar */}
                        <div className="h-8 flex items-center justify-between px-3 border-b border-white/10">
                            <div className="flex items-center space-x-1.5">
                                <div className="w-2 h-2 rounded-full bg-white/30" />
                                <div className="w-2 h-2 rounded-full bg-white/30" />
                                <div className="w-2 h-2 rounded-full bg-white/30" />
                            </div>
                            {/* URL Bar */}
                            <div className="w-24 h-3.5 bg-white/5 border border-white/10 rounded-md text-[7px] text-white/40 flex items-center justify-center px-1 font-mono">
                                bracecodes.com
                            </div>
                            {/* Menu dots */}
                            <div className="flex space-x-1 opacity-40">
                                <div className="w-0.5 h-0.5 rounded-full bg-white" />
                                <div className="w-0.5 h-0.5 rounded-full bg-white" />
                            </div>
                        </div>
                        {/* Browser Screen Content */}
                        <div className="p-3 space-y-2.5">
                            {/* Hero Text */}
                            <div className="space-y-1.5">
                                <div className="h-2.5 bg-white/20 rounded-full w-2/3" />
                                <div className="h-2 bg-white/10 rounded-full w-5/6" />
                            </div>
                            
                            {/* Hero Mock Visual (Card/Image/Graph) */}
                            <div className="relative h-14 bg-white/5 rounded-lg border border-white/10 overflow-hidden flex items-center justify-center">
                                {/* Tiny abstract components inside the hero image */}
                                <div className="flex items-center space-x-2 w-full px-2">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                        <div className="w-3.5 h-3.5 rounded-full bg-indigo-400/30" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="h-1 bg-white/15 rounded-full w-1/2" />
                                        <div className="h-0.5 bg-white/10 rounded-full w-3/4" />
                                    </div>
                                    <div className="w-7 h-3 bg-white/20 rounded-sm border border-white/20" />
                                </div>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex space-x-2">
                                <div className="h-5 w-1/3 bg-white text-[7px] font-bold rounded-md flex items-center justify-center text-indigo-700 shadow-sm">
                                    Get Started
                                </div>
                                <div className="h-5 w-1/4 bg-white/5 border border-white/10 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 bg-linear-to-t from-indigo-700 via-indigo-700/80 to-transparent pt-16 -mx-5 -mb-5 p-5">
                    <h3 className="text-base md:text-lg font-bold mb-2">Websites & Landing Pages</h3>
                    <p className="text-indigo-100 text-sm">Fast, conversion-focused sites built on modern stacks.</p>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default WebsitesCard;
