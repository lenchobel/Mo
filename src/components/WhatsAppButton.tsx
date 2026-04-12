import { MessageCircle } from 'lucide-react';
import { shopConfig } from '../config';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I want to book an appointment at Mo Men's Salon & Spa");
  const whatsappUrl = `https://wa.me/${shopConfig.contact.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us
      </span>
    </a>
  );
}
