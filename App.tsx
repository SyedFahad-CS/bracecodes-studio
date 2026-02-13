import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';
import Loader from './components/layout/Loader';
import Hero from './features/hero/Hero';
import Services from './features/services/Services';
import WhatWeDo from './features/services/WhatWeDo';
import Process from './features/services/Process';
import Work from './features/work/Work';
import Team from './features/team/Team';
import Contact from './features/contact/Contact';

// Lazy load route-specific components for code-splitting
const AllWorks = lazy(() => import('./features/work/AllWorks'));
const ProjectDetail = lazy(() => import('./features/work/ProjectDetail'));
const CaseStudies = lazy(() => import('./features/work/CaseStudies'));
const Blog = lazy(() => import('./features/blog/Blog'));
const BlogPost = lazy(() => import('./features/blog/BlogPost'));
const Community = lazy(() => import('./features/community/Community'));
const MiniSaaS = lazy(() => import('./features/services/MiniSaas'));

// Sanity Studio (embedded CMS dashboard)
const SanityStudioPage = lazy(() => import('./features/studio/StudioPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Studio gets its own isolated shell — no nav, footer, background, or preloader
  const isStudio = location.pathname.startsWith('/studio');

  if (isStudio) {
    return (
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-white">
          <p className="text-slate-400 text-sm font-medium">Loading Studio…</p>
        </div>
      }>
        <SanityStudioPage />
      </Suspense>
    );
  }

  return (
    <>
      <ScrollToTop />

      {/* Noise Overlay */}
      <div className="noise-bg" />

      {/* WebGL/Canvas Background */}
      <Background />

      {/* Custom Preloader */}
      <div className={`fixed inset-0 z-50 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${loading ? 'translate-y-0' : '-translate-y-full'}`}>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </div>

      {/* App Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <WhatWeDo />
                <Services />
                <Work />
                <Process />
                <Team />
                <Contact />
              </>
            } />

            <Route path="/work" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <AllWorks />
                <Contact />
              </Suspense>
            } />

            <Route path="/work/:slug" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <ProjectDetail />
                <Contact />
              </Suspense>
            } />

            <Route path="/services" element={
              <div className="pt-32 min-h-screen">
                <Services />
                <Process />
                <Contact />
              </div>
            } />

            <Route path="/contact" element={
              <div className="pt-32 min-h-screen flex flex-col justify-center">
                <Contact />
              </div>
            } />

            <Route path="/privacy" element={
              <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
                <h1 className="text-4xl font-bold mb-8 capitalize">Privacy Policy</h1>
                <p className="text-slate-500">Legal content placeholder for Privacy Policy.</p>
              </div>
            } />

            <Route path="/terms" element={
              <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
                <h1 className="text-4xl font-bold mb-8 capitalize">Terms of Service</h1>
                <p className="text-slate-500">Legal content placeholder for Terms of Service.</p>
              </div>
            } />

            <Route path="/case-studies" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <CaseStudies />
              </Suspense>
            } />

            <Route path="/blog" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <Blog />
              </Suspense>
            } />

            <Route path="/blog/:slug" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <BlogPost />
              </Suspense>
            } />

            <Route path="/community" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <Community />
              </Suspense>
            } />

            <Route path="/mini-saas" element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <MiniSaaS />
              </Suspense>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;