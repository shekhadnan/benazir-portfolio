import Section from "./Section";

const highlights = [
  "Business Development",
  "Operations Management",
  "AI Strategy",
  "Leadership",
  "Project Management",
  "Client Relationship Management",
];

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Experienced professional passionate about business growth, operational excellence and leveraging Artificial Intelligence to improve efficiency."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        {highlights.map((item) => (
          <div
            key={item}
            className="card h-28 px-8 flex items-center"
          >
            <div className="flex items-center gap-5">
              <div className="text-blue-500 text-2xl font-bold flex-shrink-0">
                ✓
              </div>

              <div className="text-xl font-semibold">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}