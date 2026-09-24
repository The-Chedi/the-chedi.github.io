import { Award } from "lucide-react";
import { SectionTitle } from "./About";

const awards = [
  { label: "Emirates Culinary Guild — Live Cooking Competition", tag: "🥈 Silver · 2015" },
  { label: "Emirates Culinary Guild — Live Cooking Competition", tag: "🥉 Bronze · 2013" },
  { label: "Elementary Food Hygiene International Certificate (HACCP)", tag: "2012" },
  { label: "PIC Certificate — Approved by Dubai Municipality", tag: "Certified" },
  { label: "Fire & Safety Training", tag: "Certified" },
  { label: "Destination Leadership Training", tag: "Certified" },
];

export default function Awards() {
  return (
    <section className="pb-16">
      <SectionTitle>Awards & Certifications</SectionTitle>
      <ul className="space-y-3">
        {awards.map((a, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded-sm shadow-sm flex flex-wrap justify-between items-center gap-2"
          >
            <span className="flex items-center gap-2">
              <Award size={18} className="text-gold" /> {a.label}
            </span>
            <span className="text-gold font-bold text-sm tracking-wide">{a.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}