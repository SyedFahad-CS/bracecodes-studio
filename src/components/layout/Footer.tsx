import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Twitter, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden pt-32 pb-12 z-10">

      {/* Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden leading-none z-0">
        <h1 className="text-[10vw] md:text-[10vw] m-8 p-8 font-display font-bold text-slate-800 text-center tracking-tighter whitespace-nowrap opacity-50 transform translate-y-1/4">
          BRACECODES
        </h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Top CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <p className="text-2xl md:text-3xl text-slate-400 mb-4 font-medium">
            If you scrolled this far,
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
            It's time to <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">Build Something Together</span>
          </h2>

          {/* Skeuomorphic Button */}
          <div className="relative group cursor-pointer inline-block w-full max-w-lg mx-auto transform hover:-translate-y-1 transition-transform duration-300">
            {/* Button Casing/Bezel */}
            <div className="bg-slate-800 rounded-[2.5rem] p-3 pb-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_0_#1e293b] border border-slate-700/50">
              {/* The Button Itself */}
              <Link
                to="/contact"
                className="w-full relative h-24 bg-linear-to-b from-indigo-500 to-indigo-700 rounded-4xl flex items-center justify-between px-10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.2)] active:scale-[0.98] active:translate-y-1 transition-all overflow-hidden"
              >
                {/* Glass Reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Text */}
                <span className="font-mono text-2xl md:text-3xl font-bold tracking-wider text-white drop-shadow-md">
                  START PROJECT
                </span>

                {/* Icon Area */}
                <div className="w-12 h-12 rounded-xl bg-indigo-900/30 flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-indigo-900/40 transition-colors">
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
              </Link>
            </div>
            {/* Glow underneath */}
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-20" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

          {/* Brand Column */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-bold leading-tight mb-8">
              Premium <span className="text-indigo-400">UI/UX Design & Development</span> for SaaS & AI Products.
            </h3>
            <div className="flex gap-4">
              {/* Social Icons */}
              {[Linkedin, Twitter, Github, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/work" className="text-slate-300 hover:text-white transition-colors">Work</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link to="/case-studies" className="text-slate-500 hover:text-white transition-colors cursor-pointer">Case Studies</Link></li>
                <li><Link to="/blog" className="text-slate-500 hover:text-white transition-colors cursor-pointer">Blog</Link></li>
                <li><Link to="/community" className="text-slate-500 hover:text-white transition-colors cursor-pointer">Community</Link></li>
                <li><Link to="/mini-saas" className="text-slate-500 hover:text-white transition-colors cursor-pointer">Mini SaaS Apps</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/sitemap" className="text-slate-300 hover:text-white transition-colors cursor-pointer">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bracecodes Studio. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>Designed & Engineered in Kashmir</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;