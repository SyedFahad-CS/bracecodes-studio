import React from 'react';
import { ExternalLink, Zap, Image, Mail, Lock } from 'lucide-react';

const MiniSaaS: React.FC = () => {
    const apps = [
        {
            name: "ImageOpti",
            description: "Lossless image compression API for high-traffic e-commerce sites.",
            icon: Image,
            color: "text-rose-500",
            bg: "bg-rose-50",
            status: "Live"
        },
        {
            name: "MailGuard",
            description: "Disposable email detection and validation service.",
            icon: Mail,
            color: "text-blue-500",
            bg: "bg-blue-50",
            status: "Beta"
        },
        {
            name: "AuthFlow",
            description: "Plug-and-play authentication components for React apps.",
            icon: Lock,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            status: "Development"
        },
        {
            name: "FastCache",
            description: "Edge caching layer for dynamic API responses.",
            icon: Zap,
            color: "text-amber-500",
            bg: "bg-amber-50",
            status: "Planned"
        }
    ];

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
            <div className="mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Micro-SaaS & Tools</h1>
                <p className="text-xl text-slate-500 max-w-2xl">
                    Small, focused utilities we built to solve our own problems. Now available for everyone.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {apps.map((app, index) => (
                    <div key={index} className="flex gap-6 p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 group">
                        <div className={`w-16 h-16 rounded-2xl ${app.bg} flex items-center justify-center shrink-0`}>
                            <app.icon className={`w-8 h-8 ${app.color}`} />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
                                    {app.name}
                                </h3>
                                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-slate-100 text-slate-500 tracking-wider`}>
                                    {app.status}
                                </span>
                            </div>

                            <p className="text-slate-500 mb-6">
                                {app.description}
                            </p>

                            <button className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                                View Project <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniSaaS;
