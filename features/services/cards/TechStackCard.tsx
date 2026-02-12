import React from 'react';
import { Code2, Figma, Database, Box } from 'lucide-react';
import ScrollReveal from '../../../components/animations/ScrollReveal';

const TechStackCard: React.FC = () => {
    return (
        <ScrollReveal delay={250} className="group">
            <div className="bg-white rounded-[2.5rem] p-8 h-full relative overflow-hidden border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-700 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Built With the Best</h3>
                    <p className="text-slate-500 text-sm">Figma, React, Angular, Blender & more.</p>
                </div>

                <div className="flex-1 relative flex items-center justify-center min-h-[200px]">
                    {/* Center Node */}
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center z-10 relative">
                        <Code2 className="w-8 h-8 text-white" />
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full -z-10" />
                    </div>

                    {/* Orbit Rings */}
                    <div className="absolute w-[280px] h-[280px] border border-slate-100 rounded-full" />
                    <div className="absolute w-[180px] h-[180px] border border-slate-100 rounded-full" />

                    {/* Orbiting Icons */}
                    <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform animate-[spin_20s_linear_infinite_reverse]">
                                <Figma className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform animate-[spin_20s_linear_infinite_reverse]">
                                <Database className="w-5 h-5 text-emerald-500" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-full h-full animate-[spin_15s_linear_infinite_reverse]">
                        <div className="absolute top-[30%] right-[30%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center transform animate-[spin_15s_linear_infinite_reverse]">
                                <Box className="w-5 h-5 text-orange-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ScrollReveal>
    );
};

export default TechStackCard;
