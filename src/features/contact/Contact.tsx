import React from 'react';
import ScrollReveal from '../../components/animations/ScrollReveal';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden text-center md:text-left">

          {/* Background Gradient Mesh inside the card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8">
                Let's build something <span className="text-indigo-400">extraordinary.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-lg">
                Have a visionary project? We have the engineering team to bring it to reality. Book a discovery call.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@bracecodes.in"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  hello@bracecodes.in
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Abstract Graphic */}
            <div className="w-full md:w-1/3 aspect-square relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse-slow backdrop-blur-3xl border border-white/10" />
              <div className="absolute inset-8 bg-gradient-to-tl from-indigo-500/20 to-purple-500/20 rounded-full animate-float backdrop-blur-3xl border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowRight className="w-24 h-24 text-white/20 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;