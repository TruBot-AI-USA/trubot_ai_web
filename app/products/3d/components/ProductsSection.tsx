'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import ProductSphere from './3d/ProductSphere';

const products = [
  {
    id: 'truchat',
    title: 'TruChat',
    description: 'AI-powered conversations that understand context',
    gradient: 'from-cyan-500 to-blue-500',
    position: { x: -450, y: -180 }, // ⬅️ adjusted
  },
  {
    id: 'truvoice',
    title: 'TruVoice',
    description: 'Natural voice interactions for seamless support',
    gradient: 'from-purple-500 to-pink-500',
    position: { x: 230, y: -180 }, // ✅ keep
  },
  {
    id: 'truagent',
    title: 'TruAgent',
    description: 'Autonomous AI agents for complex tasks',
    gradient: 'from-purple-500 to-indigo-500',
    position: { x: -450, y: 120 }, // ⬅️ adjusted
  },
  {
    id: 'trucrm',
    title: 'TruCRM',
    description: 'Intelligent customer relationship management',
    gradient: 'from-cyan-500 to-teal-500',
    position: { x: 230, y: 120 }, // ✅ keep
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
            <span className="text-cyan-400 text-sm font-medium">✦ AI AUTOMATION SUITE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete AI Automation Suite
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            All AI products working together to transform your business operations
          </p>
        </motion.div>

        {/* 3D Product Visualization */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Product Cards */}
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="absolute"
              style={{
                left: `calc(50% + ${product.position.x}px)`,
                top: `calc(50% + ${product.position.y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className={`w-72 h-48 rounded-2xl border-2 border-opacity-30 bg-gradient-to-br ${product.gradient} bg-opacity-10 backdrop-blur-sm p-6 cursor-pointer group relative overflow-hidden`}
                style={{
                  borderColor: `rgba(${product.gradient.includes('cyan') ? '6, 182, 212' : product.gradient.includes('purple') ? '168, 85, 247' : '6, 182, 212'}, 0.3)`,
                }}
              >
                {/* Corner Dots */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/50"></div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/50"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/50"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  
                  <div className="mt-auto pt-6">
                    <span className="text-xs text-cyan-400">Consumed in AI-Core</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central 3D Sphere */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-20">
            <Suspense fallback={<div className="w-full h-full rounded-full bg-cyan-400/20 animate-pulse"></div>}>
              <ProductSphere />
            </Suspense>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {products.map((product, index) => {
              const startX = window.innerWidth > 768 ? `calc(50% + ${product.position.x}px)` : '50%';
              const startY = window.innerWidth > 768 ? `calc(50% + ${product.position.y}px)` : '50%';
              
              return (
                <motion.line
                  key={product.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  x1="50%"
                  y1="50%"
                  x2={startX}
                  y2={startY}
                  stroke={product.gradient.includes('cyan') ? '#06b6d4' : '#a855f7'}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
