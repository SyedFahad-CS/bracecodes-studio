import React from 'react';
import { ArrowRight, MousePointer2, Command, Terminal, Zap, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Text Content */}
          <div className="max-w-2xl text-left order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-900">
                Available for Q1 2026 Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.05em] leading-[0.95] text-slate-900 mb-8">
              <span className="block opacity-0 animate-[slideUp_0.8s_0.2s_forwards]">
                Engineering.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-500 opacity-0 animate-[slideUp_0.8s_0.4s_forwards] pb-2">
                Evolved.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="text-lg md:text-xl text-slate-500 max-w-lg mb-10 leading-relaxed opacity-0 animate-[fadeIn_0.8s_0.8s_forwards]">
              Bracecodes is a premium software studio specializing in scalable web architecture,
              mobile experiences, and enterprise-grade infrastructure. We build the future, pixel by pixel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 opacity-0 animate-[fadeIn_0.8s_1s_forwards]">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)] hover:-translate-y-1 hover:bg-slate-800"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link to="/case-studies" className="px-8 py-4 bg-slate-100 text-slate-600 font-bold text-lg rounded-full hover:bg-slate-200 transition-all hover:-translate-y-1">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Column: Isometric Visual */}
          <div className="relative order-1 lg:order-2 perspective-container opacity-0 animate-[fadeIn_1s_0.5s_forwards]">

            <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center">

              {/* Layer 1: The Glass Card Background (Clipped) */}
              <div className="absolute inset-0 bg-slate-100/80 backdrop-blur-sm rounded-[3rem] overflow-hidden shadow-[inset_0_0_40px_rgba(255,255,255,0.8)] border border-white/50 z-0">
                {/* Abstract Dot Grid Background inside Card */}
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>
              </div>

              {/* Layer 2: The 3D Scene Content (Visible/Unclipped) */}
              <div className="relative z-10 isometric-scene transform scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-[0.95] xl:scale-100 transition-transform duration-500">

                {/* Floating Cursor & Toast */}
                <div className="absolute z-50 -top-10 -right-4 md:-top-20 md:-right-16 animate-float">
                  <div className="relative">
                    <MousePointer2 className="w-12 h-12 text-slate-900 fill-white stroke-[1.5]" />
                    <div className="absolute top-8 left-6 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-sm font-bold text-slate-900 whitespace-nowrap flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Deploying...
                    </div>
                  </div>
                </div>

                {/* Floating Connection Cable */}
                <svg className="absolute -right-40 top-0 w-48 h-32 z-0 pointer-events-none stroke-slate-300 fill-none" style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', strokeWidth: 2, strokeDasharray: '6 4' }} viewBox="0 0 150 100">
                  <path d="M0,50 Q75,50 120,10 T150,50" />
                </svg>

                {/* Main "Device" Board */}
                <div className="relative transform-style-3d rotate-x-60 rotate-z-[-45] rotate-y-0">

                  {/* Base Plate */}
                  <div className="w-[340px] h-[200px] bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05),0_12px_0_#e2e8f0] flex flex-col p-4 gap-4 transition-transform hover:-translate-y-2 duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">

                    {/* Top Row: Indicators & Display */}
                    <div className="flex gap-4 h-16">
                      {/* Knob/Dial */}
                      <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 shadow-[0_4px_0_#cbd5e1] flex items-center justify-center relative group cursor-pointer active:shadow-none active:translate-y-[4px] transition-all">
                        <div className="w-1.5 h-6 bg-indigo-500 rounded-full absolute top-2 transition-transform duration-700 group-hover:rotate-90 origin-bottom" />
                      </div>

                      {/* Mini Display */}
                      <div className="flex-1 bg-slate-900 rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] flex items-center px-4 overflow-hidden relative">
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative z-10">
                          <div className="h-full bg-gradient-to-r from-green-400 to-indigo-500 w-2/3 animate-[loading_2s_ease-in-out_infinite]" />
                        </div>
                        <div className="absolute inset-0 bg-indigo-500/10"></div>
                        <div className="absolute top-2 right-3 flex gap-1 z-20">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: The "Keys" */}
                    <div className="flex gap-4 flex-1">

                      {/* Key 1: Build */}
                      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_0_#e2e8f0] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 active:shadow-none active:translate-y-[8px] transition-all group">
                        <Terminal className="w-6 h-6 text-slate-400 mb-1 group-hover:text-slate-900 transition-colors" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-900">Build</span>
                      </div>

                      {/* Key 2: Ship (Primary) */}
                      <div className="flex-[1.5] bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-[0_8px_0_#4338ca] flex flex-col items-center justify-center cursor-pointer hover:brightness-110 active:shadow-none active:translate-y-[8px] transition-all relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-700 skew-x-12" />
                        <Zap className="w-7 h-7 text-white mb-1 fill-white/20" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Ship It</span>
                      </div>

                      {/* Key 3: Scale */}
                      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_0_#e2e8f0] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 active:shadow-none active:translate-y-[8px] transition-all group">
                        <Box className="w-6 h-6 text-slate-400 mb-1 group-hover:text-slate-900 transition-colors" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-900">Scale</span>
                      </div>
                    </div>

                  </div>

                  {/* Floating Element (Connect) */}
                  <div className="absolute -top-16 left-8 w-24 h-24 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1),0_8px_0_#e2e8f0] flex items-center justify-center border border-indigo-50 animate-float">
                    <Command className="w-10 h-10 text-indigo-600" />
                    {/* Selection box indicator */}
                    <div className="absolute -inset-3 border-2 border-indigo-400 rounded-3xl opacity-0 animate-pulse-slow" />
                  </div>

                  {/* Selection bracket overlay */}
                  <div className="absolute -top-20 left-4 w-32 h-32 border-2 border-indigo-500/30 rounded-xl pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-indigo-500" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-500" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-500" />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-[100px] -z-10" />

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loading {
          0% { width: 0%; opacity: 0.5; }
          50% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        .perspective-container {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-60 {
          transform: rotateX(55deg) rotateZ(-40deg);
        }
        /* Static dashed line — no animation needed */
      `}</style>
    </section>
  );
};

export default Hero;