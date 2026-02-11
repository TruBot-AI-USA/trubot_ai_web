'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import MetricsSection from './components/MetricsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FloatingParticles from './components/3d/FloatingParticles';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'metrics', label: 'Impact' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'cta', label: 'Get Started' },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Initialize useScroll with null ref first, then update when mounted
  const [scrollTarget, setScrollTarget] = useState<React.RefObject<HTMLDivElement> | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
    // Set the scroll target after mount to ensure ref is ready
    setScrollTarget(containerRef);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Setup Intersection Observer for section detection
  useEffect(() => {
    if (!isMounted) return;

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      let maxRatio = 0;
      let activeIndex = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const id = entry.target.id;
          const index = sections.findIndex(section => section.id === id);
          if (index !== -1) {
            activeIndex = index;
          }
        }
      });

      if (maxRatio > 0) {
        setActiveSection(activeIndex);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isMounted]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined' || !sectionId) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily disconnect observer during scroll to prevent flickering
      if (observerRef.current) {
        sections.forEach(section => {
          const el = document.getElementById(section.id);
          if (el) observerRef.current?.unobserve(el);
        });
      }

      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Reconnect observer after a delay
      setTimeout(() => {
        if (observerRef.current) {
          sections.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observerRef.current?.observe(el);
          });
        }
      }, 1000);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#0a1628] overflow-x-hidden relative"
    >
      {/* 3D Floating Particles Background */}
      <FloatingParticles />

      {/* Navigation Dots */}
      <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628] rounded-full"
            aria-label={`Navigate to ${section.label}`}
          >
            <span className="absolute right-8 whitespace-nowrap rounded-lg bg-[#1a2942]/80 px-3 py-1.5 text-sm text-gray-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100 group-hover:right-10 group-focus:right-10 border border-cyan-500/20">
              {section.label}
            </span>
            
            <motion.div
              className={`relative h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
                  : 'border-gray-500/50 bg-transparent hover:border-cyan-400/50 hover:scale-110 group-focus:border-cyan-400/50 group-focus:scale-110'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
            >
              {activeSection === index && (
                <motion.div
                  className="absolute -inset-2 rounded-full border border-cyan-400/50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          </button>
        ))}
      </nav>

      {/* Scroll Progress Indicator */}
      {scrollTarget && (
        <motion.div
          className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
          style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProductsSection />
        <MetricsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}

// Named export for flexibility
export { Page };