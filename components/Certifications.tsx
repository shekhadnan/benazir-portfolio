import Image from "next/image";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AI Fundamentals for Non-Data Scientists",
    issuer: "University of Pennsylvania • Coursera",
    image: "/certificates/certificate3.png",
    file: "/certificates/certificate3.pdf",
  },
  {
    title: "AI Applications in Marketing & Finance",
    issuer: "University of Pennsylvania • Coursera",
    image: "/certificates/certificate1.png",
    file: "/certificates/certificate1.pdf",
  },
  {
    title: "AI Applications in People Management",
    issuer: "University of Pennsylvania • Coursera",
    image: "/certificates/certificate2.png",
    file: "/certificates/certificate2.pdf",
  },
  {
    title: "AI Strategy & Governance",
    issuer: "University of Pennsylvania • Coursera",
    image: "/certificates/certificate4.png",
    file: "/certificates/certificate4.pdf",
  },
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="AI Certifications"
      subtitle="Professional certifications demonstrating continuous learning and practical application of Artificial Intelligence in modern business."
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{ marginTop: "70px" }}
      >
        {certificates.map((certificate) => (
          <a
            key={certificate.title}
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            className="card overflow-hidden group block p-0 h-full"
          >
            {/* Certificate Preview */}
            <div
              style={{
                overflow: "hidden",
                borderBottom: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={800}
                height={560}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col h-full">
              <h3 className="text-2xl font-bold leading-snug">
                {certificate.title}
              </h3>

              <p className="text-blue-400 mt-3 font-medium">
                {certificate.issuer}
              </p>

              <div className="flex items-center gap-2 mt-8 text-blue-400 font-semibold transition-all duration-300 group-hover:gap-3">
                View Certificate
                <ExternalLink size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}