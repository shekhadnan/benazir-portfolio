import Section from "./Section";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science (B.Sc)",
    institute: "Biju Pattnaik University, Odisha",
    year: "2016",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic foundation supporting a career in business operations, leadership and strategic management."
    >
      <div
        style={{
          marginTop: "70px",
        }}
      >
        {education.map((item) => (
          <div
            key={item.degree}
            className="card relative overflow-hidden"
          >
            {/* Blue Accent Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-full" />

            <div className="pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              <div className="flex items-center gap-6">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                  <GraduationCap
                    size={36}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg text-blue-400">
                    {item.institute}
                  </p>
                </div>

              </div>

              <span
                style={{
                  borderRadius: "9999px",
                  padding: "10px 20px",
                  border: "1px solid rgba(59,130,246,.35)",
                  background: "rgba(59,130,246,.08)",
                  color: "#93c5fd",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                {item.year}
              </span>

            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}