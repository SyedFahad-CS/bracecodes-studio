import React from 'react';
import RevealText from '@/shared/components/animations/RevealText';
import ScrollReveal from '@/shared/components/animations/ScrollReveal';
import UxUiCard from './cards/UxUiCard';
import FrontendCard from './cards/FrontendCard';
import DashboardCard from './cards/DashboardCard';
import WebsitesCard from './cards/WebsitesCard';
import TechStackCard from './cards/TechStackCard';

const WhatWeDo: React.FC = () => {
   return (
      <section className="py-8 md:py-10 bg-slate-50 relative overflow-hidden font-sans">
         {/* Background Gradients */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-indigo-200/20 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[100px]" />
         </div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-6">
               <ScrollReveal>
                  <span className="text-indigo-600 font-extrabold tracking-widest uppercase text-[10px] mb-2 bg-indigo-50 inline-block px-2.5 py-0.5 rounded-full border border-indigo-100">Our Expertise</span>
               </ScrollReveal>

               <RevealText
                  as="h2"
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 tracking-tighter leading-[1.05]"
                  stagger={0.03}
               >
                  Capabilities that scale.
               </RevealText>

               <div className="max-w-xl mx-auto">
                  <RevealText
                     as="p"
                     className="text-xs md:text-sm text-slate-500 leading-relaxed font-light"
                     delay={0.2}
                     stagger={0.01}
                  >
                     We bring the full stack. From pixel-perfect design systems to robust, scalable engineering.
                  </RevealText>
               </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] max-w-7xl mx-auto">
               <UxUiCard />
               <FrontendCard />
               <DashboardCard />
               <WebsitesCard />
               <TechStackCard />
            </div>
         </div>
      </section>
   );
};

export default WhatWeDo;
