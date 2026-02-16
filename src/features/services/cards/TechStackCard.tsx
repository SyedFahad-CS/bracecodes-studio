import React from 'react';
import ScrollReveal from '../../../components/animations/ScrollReveal';
import StackIcon from "tech-stack-icons";

const TechStackCard: React.FC = () => {
    return (
        <ScrollReveal delay={250} className="group h-full">
            <div className="bg-white rounded-[2.5rem] p-8 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-700 flex flex-col group">

                <div className="mb-4 relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Modern Stack</h3>
                    <p className="text-slate-500 text-sm">Next.js, TypeScript, Tailwind & Node.</p>
                </div>

                <div className="flex-1 relative flex items-center justify-center min-h-[220px]">
                    {/* Center Node (Next.js) */}
                    <div className="w-16 h-16 bg-black rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-500">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <StackIcon name="nextjs2" />
                        </div>
                        <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full -z-10" />
                    </div>

                    {/* Orbit Rings - Fixed Size & Centered */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-slate-100 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-slate-100 rounded-full" />

                    {/* Orbiting Icons Container - Fixed Size & Centered */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] pointer-events-none">

                        {/* Outer Orbit (Tailwind & Node/Database) */}
                        <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                            {/* Tailwind */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform animate-[spin_25s_linear_infinite_reverse] hover:scale-125 transition-transform pointer-events-auto">
                                    <div className="w-7 h-7">
                                        <StackIcon name="tailwindcss" />
                                    </div>
                                </div>
                            </div>
                            {/* React */}
                            <div className="absolute bottom-[25%] right-[7%] -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-emerald-100 flex items-center justify-center transform animate-[spin_25s_linear_infinite_reverse] hover:scale-125 transition-transform pointer-events-auto">
                                    <div className="w-6 h-6">
                                        <StackIcon name="react" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inner Orbit Container (TypeScript) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] animate-[spin_15s_linear_infinite_reverse] pointer-events-none">
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform animate-[spin_15s_linear_infinite] hover:scale-125 transition-transform pointer-events-auto">
                                    <div className="w-6 h-6">
                                        <StackIcon name="aws" />
                                    </div>
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
