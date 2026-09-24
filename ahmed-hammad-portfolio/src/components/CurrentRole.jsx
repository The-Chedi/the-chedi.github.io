import { SectionTitle } from "./About";

const duties = [
  "Lead the daily operations of the hot kitchen section.",
  "Plan, prepare and execute menu items to five-star standards.",
  "Assist in menu development and seasonal dish creation.",
  "Conduct stock-taking and enforce strict food-cost controls.",
  "Train and supervise junior kitchen staff.",
  "Maintain HACCP hygiene and cleanliness protocols.",
];

export default function CurrentRole() {
  return (
    <section className="pb-16">
      <SectionTitle>Current Position</SectionTitle>
      <div className="bg-white border-l-4 border-gold p-6 shadow-sm rounded-sm">
        <h3 className="text-xl">Sous Chef — The Chedi El Gouna</h3>
        <p className="text-gold tracking-wide">El Gouna, Egypt</p>
        <p className="text-gray-500 text-sm mt-1">October 2022 – Present</p>
        <ul className="mt-4 list-disc pl-6 space-y-1 text-gray-700">
          {duties.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}