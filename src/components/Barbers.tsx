import { motion } from 'motion/react';
import { shopConfig } from '../config';

export default function Barbers() {
  return (
    <section id="barbers" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">The Team</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2">Master Barbers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopConfig.barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] glass"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-1">
                  {barber.name}
                </h3>
                <p className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
                  {barber.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
