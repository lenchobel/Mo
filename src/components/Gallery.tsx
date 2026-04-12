import { motion } from 'motion/react';
import { shopConfig } from '../config';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2">Latest Work</h2>
          </div>
          <a
            href={`https://instagram.com/${shopConfig.contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2"
          >
            Follow @{shopConfig.contact.instagram}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {shopConfig.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <img
                src={img}
                alt={`Haircut ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
