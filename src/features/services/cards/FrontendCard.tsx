import React from 'react';
import ScrollReveal from '../../../components/animations/ScrollReveal';

const FrontendCard: React.FC = () => {
    return (
        <ScrollReveal delay={100} className="group">
            <div className="bg-[#0F172A] rounded-[2.5rem] p-8 h-full relative overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between group hover:shadow-indigo-500/20 transition-all duration-700">
                {/* Visual Artifact: Code Window */}
                <div className="relative w-full h-[200px] bg-[#1E293B] rounded-xl border border-slate-700/50 overflow-hidden font-mono text-xs shadow-inner transform group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Window Bar */}
                    <div className="flex items-center px-4 py-2 border-b border-slate-700/50 bg-[#1E293B] z-10 relative">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-rose-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        </div>
                        <div className="ml-4 text-slate-500 text-[10px]">App.tsx</div>
                    </div>
                    {/* Code Content */}
                    <div className="p-4 text-slate-300 leading-relaxed">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</div>
                        <div className="pl-4 text-slate-500">// Initialize magic</div>
                        <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                        <div className="pl-8"><span className="text-emerald-400">&lt;motion.div</span></div>
                        <div className="pl-12"><span className="text-sky-300">initial</span>=<span className="text-orange-300">{'{'}{'{'}</span> opacity: 0 <span className="text-orange-300">{'}'}{'}'}</span></div>
                        <div className="pl-12"><span className="text-sky-300">animate</span>=<span className="text-orange-300">{'{'}{'{'}</span> opacity: 1 <span className="text-orange-300">{'}'}{'}'}</span></div>
                        <div className="pl-8"><span className="text-emerald-400">/&gt;</span></div>
                        <div className="pl-4">);</div>
                        <div>{'}'}</div>
                        {/* Cursor */}
                        <div className="w-2 h-4 bg-blue-400 absolute bottom-8 left-12 animate-pulse" />
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Frontend Dev</h3>
                    <p className="text-slate-400 text-sm">Robust React, Next.js & Angular architecture.</p>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default FrontendCard;
