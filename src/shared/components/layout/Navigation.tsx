import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NAV_ITEMS } from '@/shared/constants/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 md:pt-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            flex items-center justify-between
            ${scrolled
              ? 'w-[min(92%,400px)] bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full px-4 py-2 border border-white/40'
              : 'w-[min(92%,_80rem)] bg-transparent px-0 py-4 border-transparent'
            }
          `}
        >
          {/* Logo Section */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`
              cursor-pointer flex items-center gap-3 overflow-hidden
              transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${scrolled ? 'pl-0' : 'pl-0'}
            `}
          >
            {/* Icon */}
            <div className={`
              flex-shrink-0 bg-slate-900 rounded-full flex items-center justify-center relative overflow-hidden group transition-all duration-700
              ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}
            `}>
              <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-2.5 h-2.5 bg-white rounded-full relative z-10" />
            </div>

            {/* Text */}
            <div
              className={`
                flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${scrolled ? 'max-w-0 opacity-0 translate-x-[-10px]' : 'max-w-[200px] opacity-100 translate-x-0'}
              `}
            >
              <span className="font-bold tracking-tight text-slate-900 leading-none text-xl whitespace-nowrap">
                Bracecodes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    relative rounded-full font-medium transition-all duration-300 block
                    ${scrolled
                      ? 'text-xs px-3 py-1.5'
                      : 'text-sm px-4 py-2'
                    }
                    ${currentPath === item.path
                      ? 'text-white'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                    }
                  `}
                >
                  {currentPath === item.path && (
                    <span className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-lg shadow-slate-900/10 scale-100 transition-transform duration-300" />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex items-center justify-center rounded-full transition-all duration-300 ${scrolled ? 'w-10 h-10 hover:bg-slate-100' : 'w-12 h-12 hover:bg-white/50'}`}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M4 8H20"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M4 8H20", rotate: 0, translateY: 0 },
                  open: { d: "M4 12H20", rotate: 45, translateY: 0 }
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.4 }}
              />
              <motion.path
                d="M4 16H20"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M4 16H20", rotate: 0, opacity: 1, translateY: 0 },
                  open: { d: "M4 12H20", rotate: -45, opacity: 1, translateY: 0 }
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.4 }}
              />
            </svg>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button Positioned absolutely to match nav height */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors z-50 pointer-events-auto"
            >
              <X className="w-8 h-8 text-slate-900" />
            </button>

            <ul className="flex flex-col items-center gap-6 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-4xl font-bold tracking-tight transition-colors
                      ${currentPath === item.path ? 'text-indigo-600' : 'text-slate-900 hover:text-slate-500'}
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-slate-400 text-sm font-medium"
            >
              Bracecodes Studio © {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
