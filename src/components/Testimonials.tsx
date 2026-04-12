import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { shopConfig } from '../config';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <Quote className="absolute top-10 right-10 w-64 h-64 text-white/[0.02] -rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Reviews</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2">Word on the Street</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shopConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white/80 text-lg italic font-light leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
