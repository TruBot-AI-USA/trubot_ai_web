'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Zap, DollarSign } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    value: '85%',
    label: 'Fewer Manual Tasks',
    color: 'cyan',
  },
  {
    icon: Zap,
    value: '3x',
    label: 'Faster Response Times',
    color: 'cyan',
  },
  {
    icon: DollarSign,
    value: '40%',
    label: 'Lower Operational Costs',
    color: 'cyan',
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-cyan-400 text-sm font-medium mb-4 uppercase tracking-wider">
            PROVEN RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Impact, <span className="text-cyan-400">Measurable Growth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of businesses already transforming their operations with TruBot AI.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-[#1a2942]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-400/10 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-6xl font-bold text-cyan-400 mb-4"
                  >
                    {metric.value}
                  </motion.div>

                  {/* Label */}
                  <p className="text-gray-300 text-lg">{metric.label}</p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6"
                  ></motion.div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
