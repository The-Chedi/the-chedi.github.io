import { SectionTitle } from "./About";

const skills = [
  "Menu Development & Planning",
  "Food Cost Control & Stock-Taking",
  "HACCP & Food Hygiene",
  "Team Leadership & Training",
  "Problem Solving",
  "Critical Thinking",
  "Time Management",
  "Communication & Teamwork",
  "Emotional Intelligence",
  "Attention to Detail",
  "Organization & Administration",
  "MS Office (Word, PowerPoint)",
];

export default function Skills() {
  return (
    <section className="pb-16">
      <SectionTitle>Professional Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-white px-4 py-3 border-l-4 border-gold rounded-sm shadow-sm text-sm"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}