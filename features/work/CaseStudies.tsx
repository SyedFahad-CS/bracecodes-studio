import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
    const cases = [
        {
            title: "Fintech Dashboard Redesign",
            category: "Fintech",
            description: "Complete overhaul of a legacy financial platform, improving user retention by 40%.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            stats: ["40% Retention", "2x Speed", "Mobile First"]
        },
        {
            title: "AI-Powered CRM",
            category: "SaaS",
            description: "Integrating generative AI to automate customer responses and lead scoring.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            stats: ["85% Automation", "AI Integration", " scalable"]
        },
        {
            title: "HealthTech Mobile App",
            category: "Healthcare",
            description: "Patient-centric mobile experience for a leading telemedicine provider.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
            stats: ["500k+ Users", "HIPAA Compliant", "4.9 Stars"]
        }
    ];

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 min-h-screen">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
                <p className="text-xl text-slate-500 max-w-2xl">
                    Deep dives into our engineering challenges and design solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((study, index) => (
                    <div key={index} className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={`${study.image}?w=800&q=80`}
                                alt={study.title}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-8">
                            <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">
                                {study.category}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                                {study.title}
                            </h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                {study.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {study.stats.map((stat, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                                        {stat}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">
                                Read Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
