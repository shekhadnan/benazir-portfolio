import Section from "./Section";

const experience = [
  {
    role: "Head of Operations & Business Development",
    company: "Entertainment Sportz Pvt. Ltd.",
    duration: "Apr 2025 – Jun 2026",
    points: [
      "Led business operations and franchise expansion initiatives.",
      "Developed SOPs and KPI-driven operational processes.",
      "Managed audits, financial reporting, CRM/ERP adoption and compliance.",
      "Built relationships with franchise partners and stakeholders.",
    ],
  },
  {
    role: "Business Administrator",
    company: "Romside.com",
    duration: "Oct 2023 – Nov 2024",
    points: [
      "Coordinated executive operations.",
      "Prepared MIS reports and monitored KPIs.",
      "Improved operational workflows.",
    ],
  },
  {
    role: "Customer Support Specialist",
    company: "IntouchCX",
    duration: "Feb 2020 – Oct 2023",
    points: [
      "Handled customer operations.",
      "Maintained service quality metrics.",
      "Collaborated with multiple departments.",
    ],
  },
  {
    role: "Technical Support Associate",
    company: "Concentrix",
    duration: "Nov 2018 – Jan 2020",
    points: [
      "Supported Microsoft Office 365 customers.",
      "Created technical documentation.",
      "Trained new associates.",
    ],
  },
  {
    role: "Business Development Executive",
    company: "Rao Edusolutions",
    duration: "Jul 2017 – Jun 2018",
    points: [
      "Managed client relationships.",
      "Conducted business development activities.",
      "Supported sales growth initiatives.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Career Journey"
      subtitle="A progression through leadership, operations and business development."
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {experience.map((job) => (
          <div
            key={job.role}
            className="card p-8 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-full" />

            <div className="pl-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div>
                  <h3 className="text-3xl font-bold">
                    {job.role}
                  </h3>

                  <p className="text-blue-400 text-lg mt-2 font-medium">
                    {job.company}
                  </p>
                </div>

                <span
                  className="inline-flex items-center border border-blue-500/30 bg-blue-500/10 text-blue-300 whitespace-nowrap"
                  style={{
                    borderRadius: "9999px",
                    padding: "10px 20px",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: 1,
                  }}
                >
                  {job.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 text-zinc-300 leading-8"
                  >
                    <span className="text-blue-500 text-xl">•</span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}