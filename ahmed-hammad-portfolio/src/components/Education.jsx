import { SectionTitle } from "./About";

export default function Education() {
  return (
    <section className="pb-16">
      <SectionTitle>Education</SectionTitle>
      <div className="bg-white border-l-4 border-gold p-6 shadow-sm rounded-sm">
        <h3 className="text-xl">Bachelor of Tourism and Hotels</h3>
        <p className="text-gold">Department of Kitchen</p>
        <p className="text-gray-500 text-sm mt-1">Graduated 2002</p>
      </div>
    </section>
  );
}