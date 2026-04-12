import { MapPin, Navigation, Clock } from 'lucide-react';
import { shopConfig } from '../config';

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Find Us</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mt-2 mb-8">Visit the Shop</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-white/40">Address</h4>
                  <p className="text-xl font-medium mb-2">{shopConfig.contact.address}</p>
                  <p className="text-sm text-white/60">Plus Code: XQWQ+85</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-white/40">Hours</h4>
                  <div className="space-y-1">
                    {shopConfig.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8">
                        <span className="text-white/60">{h.day}</span>
                        <span className="font-bold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopConfig.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-accent transition-colors"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden glass">
            {/* Map Placeholder with aesthetic styling */}
            <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center p-12 text-center">
              <MapPin className="w-16 h-16 text-accent/20 mb-6" />
              <h3 className="font-display text-2xl font-bold uppercase mb-4">Interactive Map</h3>
              <p className="text-white/40 max-w-xs">
                In a production app, this would be a Google Maps or Mapbox integration.
              </p>
              <div className="mt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-accent animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
