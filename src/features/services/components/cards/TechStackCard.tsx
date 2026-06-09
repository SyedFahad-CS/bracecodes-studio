import React from 'react';
import { Code2, Figma, Database, Box, Cpu, Globe, Sparkles } from 'lucide-react';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';

const TechStackCard: React.FC = () => {
    return (
        <ScrollReveal delay={250} className="group h-full">
            <div className="bg-white rounded-3xl p-5 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] transition-all duration-700 flex flex-col justify-between">
                
                {/* Header */}
                <div className="relative z-10">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-0.5">Built With the Best</h3>
                    <p className="text-slate-500 text-sm">Figma, React, Angular, Blender & more.</p>
                </div>

                {/* Orbit Container */}
                <div className="flex-1 relative flex items-center justify-center min-h-[140px] select-none">
                    
                    {/* Glowing Aura in background */}
                    <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none" />

                    {/* Center Node */}
                    <div className="w-12 h-12 bg-linear-to-tr from-slate-900 to-indigo-950 rounded-2xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] flex items-center justify-center z-20 relative border border-slate-800">
                        <Code2 className="w-5.5 h-5.5 text-white" />
                        
                        {/* Radar Pulse Rings */}
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3s' }} />
                        <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10" />
                    </div>

                    {/* Orbit Tracks */}
                    {/* Outer Track */}
                    <div className="absolute w-[140px] h-[140px] border border-slate-100 rounded-full group-hover:border-indigo-100/80 transition-colors duration-700" />
                    {/* Inner Track */}
                    <div className="absolute w-[80px] h-[80px] border border-slate-100 rounded-full group-hover:border-indigo-100/50 transition-colors duration-700" />

                    {/* Orbiting Icons - Outer Ring (140px) */}
                    <div className="absolute w-[140px] h-[140px] animate-[spin_25s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none z-10">
                        {/* Figma - Top Left */}
                        <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="animate-[spin_25s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                                <div className="w-9 h-9 bg-white rounded-full shadow-md border border-slate-100/80 flex items-center justify-center hover:scale-120 hover:shadow-lg hover:border-purple-200 transition-all duration-300 cursor-pointer group/node">
                                    <Figma className="w-4.5 h-4.5 text-purple-600 group-hover/node:rotate-12 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Database - Top Right */}
                        <div className="absolute top-[14.6%] left-[85.4%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="animate-[spin_25s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                                <div className="w-9 h-9 bg-white rounded-full shadow-md border border-slate-100/80 flex items-center justify-center hover:scale-120 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 cursor-pointer group/node">
                                    <Database className="w-4.5 h-4.5 text-emerald-500 group-hover/node:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* React SVG - Bottom Center */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="animate-[spin_25s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                                <div className="w-9 h-9 bg-white rounded-full shadow-md border border-slate-100/80 flex items-center justify-center hover:scale-120 hover:shadow-lg hover:border-sky-200 transition-all duration-300 cursor-pointer group/node">
                                    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4.5 h-4.5 text-sky-500 fill-none stroke-current group-hover/node:animate-[spin_3s_linear_infinite]" strokeWidth="2">
                                        <circle r="2" fill="currentColor"/>
                                        <ellipse rx="11" ry="4.2"/>
                                        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orbiting Icons - Inner Ring (80px) */}
                    <div className="absolute w-[80px] h-[80px] animate-[spin_18s_linear_infinite_reverse] group-hover:[animation-play-state:paused] pointer-events-none z-10">
                        {/* Node Box */}
                        <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="animate-[spin_18s_linear_infinite] group-hover:[animation-play-state:paused]">
                                <div className="w-8 h-8 bg-white rounded-full shadow-md border border-slate-100/80 flex items-center justify-center hover:scale-120 hover:shadow-lg hover:border-orange-200 transition-all duration-300 cursor-pointer group/node">
                                    <Box className="w-4 h-4 text-orange-500 group-hover/node:rotate-12 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* CPU */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="animate-[spin_18s_linear_infinite] group-hover:[animation-play-state:paused]">
                                <div className="w-8 h-8 bg-white rounded-full shadow-md border border-slate-100/80 flex items-center justify-center hover:scale-120 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 cursor-pointer group/node">
                                    <Cpu className="w-4 h-4 text-indigo-500 group-hover/node:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ScrollReveal>
    );
};

export default TechStackCard;
