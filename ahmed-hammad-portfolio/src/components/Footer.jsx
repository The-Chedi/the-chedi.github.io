import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-[#b8b0a2] text-center px-6 py-12 border-t-4 border-gold">
      <h3 className="text-2xl text-cream mb-4">Get in Touch</h3>
      <p className="mb-6 text-sm max-w-md mx-auto">
        Available for fine-dining, hotel and resort opportunities worldwide.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <a href="tel:01287633200" className="flex items-center gap-2 hover:text-gold transition">
          <Phone size={18} /> 01287633200
        </a>
        <a href="mailto:Chef10182@gmail.com" className="flex items-center gap-2 hover:text-gold transition">
          <Mail size={18} /> Chef10182@gmail.com
        </a>
        <a
          href="https://wa.me/201287633200"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gold transition"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Ahmed Hammad · Sous Chef · The Chedi El Gouna
      </p>
    </footer>
  );
}