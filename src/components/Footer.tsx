import { Instagram, Facebook, Twitter, Scissors } from 'lucide-react';
import { shopConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8 group">
              <Scissors className="w-10 h-10 text-accent group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-display text-3xl font-bold tracking-tight uppercase">{shopConfig.shopName}</span>
            </a>
            <p className="text-white/50 text-lg max-w-md mb-8 font-light leading-relaxed">
              Crafting confidence through precision grooming since 2024. The premier destination for the modern gentleman.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: `https://instagram.com/${shopConfig.contact.instagram}` },
                { icon: Facebook, href: `https://facebook.com/${shopConfig.contact.facebook}` },
                { icon: Twitter, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Barbers', 'Gallery', 'Booking', 'Location'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/40 hover:text-accent transition-colors font-medium uppercase tracking-widest text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold uppercase mb-8 tracking-wider">Contact</h4>
            <ul className="space-y-6">
              <li>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Phone</span>
                <a href={`tel:${shopConfig.contact.phone}`} className="text-white hover:text-accent transition-colors font-bold">
                  {shopConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Email</span>
                <a href={`mailto:${shopConfig.contact.email}`} className="text-white hover:text-accent transition-colors font-bold">
                  {shopConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <p>© 2024 {shopConfig.shopName}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
