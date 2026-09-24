import { SectionTitle } from "./About";

const jobs = [
  { role: "Sous Chef", place: "The Chedi El Gouna — El Gouna, Egypt", when: "10/2022 – Present" },
  { role: "Junior Sous Chef", place: "Crowne Plaza Sheikh Zayed Road — Dubai, UAE", when: "01/2021 – 05/2022" },
  { role: "Junior Sous Chef", place: "Mövenpick Grand Al Bustan — Dubai, UAE", when: "04/2019 – 06/2020" },
  { role: "Chef de Partie", place: "Roda Al Bustan — Dubai, UAE", when: "01/2017 – 04/2019" },
  { role: "Chef de Partie", place: "Al Bustan Rotana — Dubai, UAE", when: "12/2011 – 12/2016" },
  { role: "First Commis → Demi Chef de Partie", place: "Dusit Thani Lakeview — Cairo, Egypt", when: "10/2010 – 11/2011" },
  { role: "First Commis", place: "Stella Di Mare Beach Hotel & Spa — Sharm El Sheikh, Egypt", when: "11/2009 – 10/2010" },
  { role: "First Commis", place: "Savoy Hotel — Sharm El Sheikh, Egypt", when: "11/2008 – 10/2009" },
  { role: "Second Commis", place: "Hilton Hotel Alexandria Green Plaza — Egypt", when: "08/2007 – 11/2008" },
  { role: "Second Commis", place: "Trianon Restaurant — Alexandria, Egypt", when: "02/2002 – 08/2007" },
];

export default function Experience() {
  return (
    <section className="pb-16">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative pl-7 border-l-2 border-[#e0d8c8] space-y-7">
        {jobs.map((job, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-cream" />
            <h3 className="text-lg">{job.role}</h3>
            <p className="text-gold text-sm">{job.place}</p>
            <p className="text-gray-500 text-xs">{job.when}</p>
          </div>
        ))}
      </div>
    </section>
  );
}