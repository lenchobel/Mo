import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { shopConfig } from '../config';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image20.jpg"
          alt="Barbershop Background"
          className="w-full h-full object-cover opacity-40"
          style={{
            animation: 'zoom 18s ease-in-out infinite'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm sm:text-base">
            24/7 Service
          </span>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
            {shopConfig.shopName.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto mb-16 font-light tracking-wide">
            {shopConfig.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={`https://wa.me/${shopConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Mo Men's Salon & Spa")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href={`tel:${shopConfig.contact.phone}`}
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 glass px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}
