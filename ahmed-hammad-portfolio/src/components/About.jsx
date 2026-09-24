export default function About() {
  return (
    <section className="py-16">
      <SectionTitle>About</SectionTitle>
      <p className="text-lg text-gray-800 leading-relaxed">
        Professional Sous Chef with over <strong>20 years</strong> of culinary experience
        across Egypt and the UAE — from five-star hotel kitchens in Sharm El Sheikh,
        Cairo and Dubai to my current role at <strong>The Chedi El Gouna</strong>.
        I specialize in menu development, food-cost control, HACCP compliance and
        leading high-performing kitchen brigades. Decorated with{" "}
        <strong>Emirates Culinary Guild Bronze (2013)</strong> and{" "}
        <strong>Silver (2015)</strong> medals in live cooking.
      </p>
    </section>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-normal inline-block border-b-2 border-gold pb-1 mb-8 tracking-wide">
      {children}
    </h2>
  );
}