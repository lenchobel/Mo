import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { shopConfig } from '../config';

export default function BookingForm() {

  return (
    <section id="booking" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Reservation</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2">Book Your Chair</h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            Book your appointment in seconds via WhatsApp. We're available 24/7!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[2rem] p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-accent" />
          </div>
          
          <h3 className="font-display text-3xl font-bold uppercase mb-4">Book via WhatsApp</h3>
          <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
            Send us a message on WhatsApp and we'll confirm your appointment right away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={`https://wa.me/${shopConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I want to book an appointment at Mo Men's Salon & Spa")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              WhatsApp Booking
            </a>
            <a
              href={`tel:${shopConfig.contact.phone}`}
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 glass px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>

          <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-8">
            Available 24/7 for your convenience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
