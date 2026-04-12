import { motion } from 'motion/react';
import { shopConfig } from '../config';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Our Services</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2">The Menu</h2>
          </div>
          <p className="text-white/50 max-w-md text-lg">
            Premium grooming services tailored to your individual style. Every service includes a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {shopConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 glass rounded-3xl hover:border-accent/30 transition-all duration-500 cursor-default ${service.id === 'marriage-package' ? 'border-accent/50 bg-accent/5' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <span className="text-2xl font-display font-bold text-accent">{service.price}</span>
              </div>
              <p className="text-white/60 mb-6 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <span>{service.duration}</span>
                <div className="w-1 h-1 rounded-full bg-accent/40"></div>
                <span>Includes Hot Towel</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-8">Need something custom? Just ask your barber.</p>
          <a
            href="#booking"
            className="inline-block border-b-2 border-accent pb-1 text-accent font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all"
          >
            View Full Price List
          </a>
        </div>
      </div>
    </section>
  );
}
