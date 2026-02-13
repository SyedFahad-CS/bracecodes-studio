import React from 'react';
import ScrollReveal from '../../../components/animations/ScrollReveal';

const WebsitesCard: React.FC = () => {
    return (
        <ScrollReveal delay={150} className="group text-white">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[2.5rem] p-8 h-full relative overflow-hidden shadow-2xl shadow-indigo-500/30 flex flex-col justify-end">
                {/* Visual Artifact: Browser Mockup */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
                    <div className="absolute top-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-t-xl border border-white/20 shadow-xl transform group-hover:translate-y-2 transition-transform duration-700">
                        <div className="h-8 flex items-center px-3 space-x-1.5 border-b border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="h-32 bg-white/5 rounded-lg border border-white/10 w-full animate-pulse-slow" />
                            <div className="flex space-x-3">
                                <div className="h-16 w-1/2 bg-white/5 rounded-lg border border-white/10" />
                                <div className="h-16 w-1/2 bg-white/5 rounded-lg border border-white/10" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 bg-gradient-to-t from-indigo-700 via-indigo-700/80 to-transparent pt-32 -mx-8 -mb-8 p-8">
                    <h3 className="text-2xl font-bold mb-2">Websites & Landing Pages</h3>
                    <p className="text-indigo-100 text-sm">Fast, conversion-focused sites built on modern stacks.</p>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default WebsitesCard;
