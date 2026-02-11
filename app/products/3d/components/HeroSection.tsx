'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Debug: Check if video loads
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoaded = () => {
        console.log('Video metadata loaded');
        setVideoLoaded(true);
      };
      
      const handleError = (e: Event) => {
        console.error('Video loading error:', e);
        console.log('Video path attempted:', '/video/vid.mp4');
      };
      
      video.addEventListener('loadedmetadata', handleLoaded);
      video.addEventListener('error', handleError);
      
      // Force load the video
      video.load();
      
      return () => {
        video.removeEventListener('loadedmetadata', handleLoaded);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your{' '}
              <span className="text-cyan-400">Business</span> with Intelligent AI
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              No-code automation built for modern SMEs. Streamline operations, reduce costs, and scale faster with TruBot AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-cyan-400 text-[#0a1628] font-semibold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-400/50 transition-colors flex items-center gap-2 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch How It Works
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 text-sm mb-4"
            >
              Trusted by 500+ businesses worldwide
            </motion.div>

            {/* Company Logos Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-4 items-center opacity-40"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-8 sm:w-20 sm:h-10 bg-white/10 rounded"></div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/20 shadow-2xl shadow-cyan-400/10 group-hover:border-cyan-400/40 transition-all duration-300">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Video Element - SIMPLIFIED */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl"
                aria-label="Demo video showing TruBot AI no-code automation platform"
                title="TruBot AI Platform Demo"
                poster="/images/video-poster.jpg" // Optional: Add a poster image
                preload="metadata"
              >
                {/* Try different paths */}
                <source src="/vid.mp4" type="video/mp4" />
                <source src="/video/vid.mp4" type="video/mp4" />
                <source src="/videos/vid.mp4" type="video/mp4" />
                <source src="/public/vid.mp4" type="video/mp4" />
                
                {/* Fallback image if video fails */}
                <img 
                  src="/images/fallback-demo.jpg" 
                  alt="TruBot AI Platform Preview" 
                  className="w-full h-full object-cover"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white bg-[#0a1628]/90 p-4 text-center">
                  Your browser doesn't support HTML video or video failed to load.
                  <br />
                  <a href="/vid.mp4" className="text-cyan-400 underline ml-1">
                    Download the video
                  </a>
                </p>
              </video>

              {/* Video Status Indicator */}
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a1628]/80 z-30">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-cyan-300">Loading video...</p>
                    <p className="text-gray-400 text-xs mt-2">If stuck, check console for errors</p>
                  </div>
                </div>
              )}

              

              {/* Video Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="flex justify-between items-center text-xs">
                  
                </div>
              </div>
            </div>

            {/* Video Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-sm mt-4 text-center"
            >
              
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm uppercase tracking-wider">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}