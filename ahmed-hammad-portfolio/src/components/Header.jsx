import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-dark to-[#2e2a24] text-cream text-center px-6 py-20 border-b-4 border-gold">
      <h1 className="text-4xl md:text-5xl tracking-widest font-normal">
        Ahmed <span className="text-gold">Hammad</span>
      </h1>
      <p className="mt-3 text-gold uppercase tracking-[0.3em] text-sm md:text-base">
        Sous Chef · The Chedi El Gouna
      </p>
      <p className="mt-4 text-[#cfc7b8] flex items-center justify-center gap-2">
        <MapPin size={16} /> Alexandria, Egypt · Open to International Opportunities
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <a href="tel:01287633200" className="flex items-center gap-2 hover:text-gold transition">
          <Phone size={16} /> 01287633200
        </a>
        <a href="mailto:Chef10182@gmail.com" className="flex items-center gap-2 hover:text-gold transition">
          <Mail size={16} /> Chef10182@gmail.com
        </a>
        <span className="flex items-center gap-2">
          <Globe size={16} /> Arabic · English (fluent)
        </span>
      </div>
    </header>
  );
}