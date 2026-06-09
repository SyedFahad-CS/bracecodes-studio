import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';

const DashboardCard: React.FC = () => {
    return (
        <ScrollReveal delay={200} className="group h-full">
            <div className="bg-white rounded-3xl p-5 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)] transition-all duration-700 flex flex-col">
                {/* Visual Artifact: Chart */}
                <div className="relative mb-3 bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <div className="text-sm text-slate-400 font-medium mb-1">Total Revenue</div>
                            <div className="text-xl font-bold text-slate-900">$54,230</div>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <ArrowUpRight className="w-3 h-3 mr-1" /> 12%
                        </span>
                    </div>

                    <div className="h-12 relative w-full">
                        {/* SVG Chart */}
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,35 Q10,30 20,32 T40,15 T60,20 T80,5 T100,2 L100,40 L0,40 Z" fill="url(#chartGradient)" />
                            <path d="M0,35 Q10,30 20,32 T40,15 T60,20 T80,5 T100,2" fill="none" stroke="#10b981" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        </svg>

                        {/* Interactive Tooltip */}
                        <div className="absolute top-[5%] right-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-slate-900 text-white text-[10px] py-1 px-2 rounded shadow-lg mb-1 whitespace-nowrap">
                                All time high
                            </div>
                            <div className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-md mx-auto" />
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Dashboards & SaaS</h3>
                    <p className="text-slate-500 text-sm">Clean, data-driven interfaces that empower decisions.</p>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default DashboardCard;
