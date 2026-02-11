'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Rodriguez',
    role: 'Head of Innovation',
    company: 'FutureBrand',
    image: '/api/placeholder/80/80',
    quote: 'TruAgent handles complex decision trees that used to require entire teams. ROI was visible within the first month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'CTO',
    company: 'NextGen Systems',
    image: '/api/placeholder/80/80',
    quote: 'Security, scalability, and simplicity - TruBot AI delivers on all fronts. Our enterprise clients love the seamless integration.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    role: 'VP of Sales',
    company: 'GrowthMetrics',
    image: '/api/placeholder/80/80',
    quote: 'TruCRM connected all our scattered data into one intelligent hub. Sales forecasting accuracy improved by 60%.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-cyan-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from businesses transforming their operations with TruBot AI
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex items-center justify-center gap-8 relative h-[500px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      scale: isActive ? 1 : 0.8,
                      x: offset * 400,
                      zIndex: isActive ? 10 : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute w-full max-w-2xl ${!isActive && 'pointer-events-none'}`}
                  >
                    <div className="bg-[#1a2942]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-10 relative">
                      {/* Quote Icon */}
                      <Quote className="absolute top-8 right-8 w-16 h-16 text-cyan-400/10" />

                      {/* Profile */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                          <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>

                     
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
