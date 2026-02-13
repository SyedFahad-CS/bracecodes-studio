import React from 'react';
import { Palette, ArrowUpRight, CheckCircle2, MoreHorizontal } from 'lucide-react';
import ScrollReveal from '../../../components/animations/ScrollReveal';

const UxUiCard: React.FC = () => {
    return (
        <ScrollReveal className="lg:row-span-2 group">
            <div className="bg-white rounded-[2.5rem] p-8 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] transition-all duration-700 flex flex-col">

                <div className="mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Palette className="w-7 h-7 text-orange-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">UX/UI Design</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">
                        User-centric interfaces that convert. We craft pixel-perfect experiences.
                    </p>
                </div>

                {/* Visual Artifact: Abstract UI */}
                <div className="relative flex-1 w-full perspective-1000">
                    <div className="absolute inset-x-0 bottom-0 top-4 bg-slate-50/50 rounded-t-[2rem] border-t border-x border-slate-100 shadow-inner transform translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
                        {/* Mockup Content */}
                        <div className="p-6 relative">
                            {/* Floating Glass Card */}
                            <div className="absolute -top-12 right-6 w-48 bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/50 shadow-2xl transform rotate-3 group-hover:rotate-6 group-hover:-translate-y-2 transition-all duration-700 z-20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400" />
                                    <div>
                                        <div className="w-20 h-2 bg-slate-200 rounded-full mb-1" />
                                        <div className="w-12 h-1.5 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="w-16 h-8 bg-slate-50 rounded-lg border border-slate-100" />
                                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Base UI */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-4 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="flex justify-between">
                                    <div className="w-1/3 h-3 bg-slate-100 rounded-full" />
                                    <div className="w-8 h-8 bg-slate-100 rounded-full" />
                                </div>
                                <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 border-dashed" />
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-16 bg-slate-50 rounded-lg" />
                                    <div className="h-16 bg-slate-50 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default UxUiCard;
