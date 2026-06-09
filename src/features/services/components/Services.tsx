import React from 'react';
import { SERVICES } from '../constants';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';
import RevealText from '@/shared/components/animations/RevealText';

const Services: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10">
          <RevealText
            as="h2"
            className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-4"
            stagger={0.05}
          >
            Capabilities.
          </RevealText>
          <ScrollReveal delay={200}>
            <p className="text-base text-slate-500 leading-relaxed">
              We don't just write code. We engineer digital ecosystems that stand the test of scale, time, and user expectation.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group h-full p-6 rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.1)] hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-24 h-24 text-indigo-500 transform rotate-12 translate-x-8 -translate-y-8" />
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-slate-900 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
