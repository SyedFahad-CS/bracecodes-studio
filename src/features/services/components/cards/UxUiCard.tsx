import React from 'react';
import { Palette, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';

const UxUiCard: React.FC = () => {
    return (
        <ScrollReveal className="lg:row-span-2 group h-full">
            <div className="bg-white rounded-3xl p-5 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] transition-all duration-700 flex flex-col">

                <div className="mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Palette className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">UX/UI Design</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                        User-centric interfaces that convert. We craft pixel-perfect experiences.
                    </p>
                </div>

                {/* Visual Artifact: Abstract UI */}
                <div className="relative flex-1 w-full perspective-1000">
                    <div className="absolute inset-x-0 bottom-0 top-4 bg-slate-50/50 rounded-t-4xl border-t border-x border-slate-100 shadow-inner transform translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
                        {/* Mockup Content */}
                        <div className="p-6 relative">
                            {/* Floating Glass Card */}
                            <div className="absolute -top-6 right-4 w-40 bg-white/80 backdrop-blur-xl rounded-xl p-3 border border-white/50 shadow-2xl transform rotate-3 group-hover:rotate-6 group-hover:-translate-y-2 transition-all duration-700 z-20">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-linear-to-tr from-orange-400 to-rose-400" />
                                    <div>
                                        <div className="w-16 h-1.5 bg-slate-200 rounded-full mb-1" />
                                        <div className="w-10 h-1 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="w-12 h-6 bg-slate-50 rounded-lg border border-slate-100" />
                                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>

                            {/* Base UI */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
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
