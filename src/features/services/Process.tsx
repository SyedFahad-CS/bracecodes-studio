import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, CheckCircle2, ArrowRight, Layers, Layout, Terminal, Globe } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Blueprint',
    desc: 'We deep-dive into your business goals, audit existing systems, and define technical constraints. The output is a crystal-clear roadmap, minimizing risk before we wrote a single line of code.',
    deliverables: ['Tech Stack Definition', 'System Architecture', 'Sprint Roadmap'],
    visualIcon: Layers
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Prototype',
    desc: 'We craft high-fidelity interfaces and interactive prototypes. This phase aligns stakeholders on the user experience and ensures the product feels right before development begins.',
    deliverables: ['Figma High-Fi Styles', 'Interactive Prototypes', 'Design System'],
    visualIcon: Layout
  },
  {
    icon: Code2,
    step: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints using modern frameworks. We prioritize clean, type-safe code and automated testing to ensure scalability and maintainability from Day 1.',
    deliverables: ['Production-Grade Code', 'CI/CD Pipelines', 'Automated Tests'],
    visualIcon: Terminal
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Scale',
    desc: 'We handle the complexities of deployment, from cloud infrastructure setup to monitoring. We adhere to steep performance budgets and ensure global availability.',
    deliverables: ['Cloud Infrastructure', 'Analytics Setup', 'Performance Report'],
    visualIcon: Globe
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-indigo-600 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm"
          >
            Our Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Precision engineering,
            <span className="block text-slate-400 mt-2">from concept to code.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            Rigorous, battle-tested processes that eliminate guesswork and deliver predictable, high-quality software.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-ml-px" />

          {steps.map((s, i) => (
            <div key={i} className={`relative mb-24 md:mb-32 last:mb-0 flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

              {/* Timeline Dot (Mobile & Desktop) */}
              <div className="absolute left-0 w-10 h-10 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center z-20 shadow-[0_0_0_8px_rgba(241,245,249,1)] md:left-1/2 md:-ml-5">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} w-full`}
              >
                <div className={`hidden md:flex flex-col ${i % 2 === 0 ? 'items-end' : 'items-start'}`}>
                  <span className="text-8xl font-black text-slate-100 mb-[-40px] z-0 select-none block leading-none">{s.step}</span>
                </div>
                <div className="relative z-10">
                  <span className="md:hidden text-6xl font-black text-slate-100 absolute -top-10 -left-6 -z-10">{s.step}</span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <ul className={`inline-block text-left space-y-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm ${i % 2 === 0 ? 'md:items-end' : ''}`}>
                    {s.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Visual Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`hidden md:flex md:w-1/2 justify-center ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
              >
                <div className="relative w-full aspect-4/3 max-w-sm bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 flex items-center justify-center p-8 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-30 transition-opacity duration-500 ${i === 0 ? 'from-blue-500 to-cyan-500' :
                    i === 1 ? 'from-purple-500 to-pink-500' :
                      i === 2 ? 'from-amber-500 to-orange-500' :
                        'from-emerald-500 to-teal-800'
                    }`} />

                  {/* Abstract Shapes based on icon */}
                  <s.visualIcon strokeWidth={1} className="w-32 h-32 text-slate-200 group-hover:scale-110 group-hover:text-indigo-100 transition-all duration-700" />

                  <div className="absolute right-6 bottom-6 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                    <s.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;