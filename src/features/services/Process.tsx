import React from 'react';
import { Search, PenTool, Code2, Rocket, CheckCircle2, Layers, Layout, Terminal, Globe } from 'lucide-react';
import ScrollReveal from '../../components/animations/ScrollReveal';
import RevealText from '../../components/animations/RevealText';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Blueprint',
    desc: 'We deep-dive into your business goals, audit existing systems, and define technical constraints. The output is a crystal-clear roadmap, minimizing risk before a single line of code.',
    deliverables: ['Tech Stack Definition', 'System Architecture', 'Sprint Roadmap'],
    visualIcon: Layers,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Prototype',
    desc: 'We craft high-fidelity interfaces and interactive prototypes. This phase aligns stakeholders on the user experience and ensures the product feels right before development begins.',
    deliverables: ['Figma High-Fi Styles', 'Interactive Prototypes', 'Design System'],
    visualIcon: Layout,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code2,
    step: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints using modern frameworks. We prioritize clean, type-safe code and automated testing to ensure scalability and maintainability from Day 1.',
    deliverables: ['Production-Grade Code', 'CI/CD Pipelines', 'Automated Tests'],
    visualIcon: Terminal,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Scale',
    desc: 'We handle the complexities of deployment, from cloud infrastructure setup to monitoring. We adhere to steep performance budgets and ensure global availability.',
    deliverables: ['Cloud Infrastructure', 'Analytics Setup', 'Performance Report'],
    visualIcon: Globe,
    gradient: 'from-emerald-500 to-teal-600'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/15 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <ScrollReveal>
            <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-xs block mb-6 bg-indigo-50 inline-block px-4 py-1.5 rounded-full border border-indigo-100">
              Our Methodology
            </span>
          </ScrollReveal>
          <RevealText
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.05]"
            stagger={0.03}
          >
            Precision engineering, from concept to code.
          </RevealText>
          <ScrollReveal delay={200}>
            <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
              Rigorous, battle-tested processes that eliminate guesswork and deliver predictable, high-quality software.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-slate-200 to-slate-200 md:left-1/2 md:-ml-px" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const VisualIcon = s.visualIcon;
            return (
              <div
                key={i}
                className={`relative mb-20 last:mb-0 flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 w-3 h-3 rounded-full bg-indigo-500 border-[3px] border-white shadow-[0_0_0_4px_rgba(79,70,229,0.15)] z-20 md:left-1/2 md:-ml-[6px]">
                  <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20" />
                </div>

                {/* Content Side */}
                <ScrollReveal
                  delay={i * 100}
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                  } w-full`}
                >
                  {/* Step Number */}
                  <div className={`hidden md:flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2`}>
                    <span className="text-5xl font-black text-slate-100 select-none leading-none tracking-tighter">
                      {s.step}
                    </span>
                  </div>

                  {/* Mobile step number */}
                  <span className="md:hidden text-4xl font-black text-slate-100 absolute -top-2 -left-0 select-none leading-none tracking-tighter">
                    {s.step}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 font-light">
                    {s.desc}
                  </p>

                  {/* Deliverables */}
                  <div className={`inline-block ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <ul className="text-left space-y-2.5 bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)]">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Visual Side */}
                <ScrollReveal
                  delay={i * 100 + 200}
                  className={`hidden md:flex md:w-1/2 justify-center ${
                    i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                  }`}
                >
                  <div className="relative w-full aspect-4/3 max-w-sm bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex items-center justify-center p-8 overflow-hidden group cursor-default">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-[0.04] group-hover:opacity-[0.12] transition-opacity duration-700`}
                    />

                    {/* Large Background Icon */}
                    <VisualIcon
                      strokeWidth={1}
                      className="w-28 h-28 text-slate-100 group-hover:text-indigo-50 group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Floating Step Icon */}
                    <div className="absolute right-6 bottom-6 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(15,23,42,0.3)] group-hover:-translate-y-1 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Floating Step Number */}
                    <div className="absolute left-6 top-6 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {s.step}</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
