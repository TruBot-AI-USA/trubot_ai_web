'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

const benefits = [
  'No credit card required',
  '14-day free trial',
  'Cancel anytime',
];

export default function CTASection() {
  return (
    <section id="cta" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#1a2942]/80 to-[#0a1628]/80 backdrop-blur-xl p-12 md:p-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Limited Time Offer</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Ready to Transform{' '}
                <span className="text-cyan-400">Your Business?</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              >
                Start your 14-day free trial today. No credit card required. Experience the power of intelligent automation in minutes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-cyan-400 text-[#0a1628] font-bold text-lg rounded-xl hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 group shadow-xl shadow-cyan-400/20"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-xl hover:border-cyan-400/50 hover:bg-white/5 transition-all"
                >
                  Schedule a Demo
                </motion.button>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 text-gray-400"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-cyan-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
