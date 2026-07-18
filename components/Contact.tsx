import Section from "./Section";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "meetbenazir@gmail.com",
    href: "mailto:meetbenazir@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 90161 58702",
    href: "tel:+919016158702",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ready to relocate",
  },
  {
  icon: Briefcase,
  title: "LinkedIn",
  value: "View Profile",
  href: "https://www.linkedin.com/in/benazirniyariya/",
},
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Feel free to connect for leadership opportunities, business collaborations or AI-driven transformation initiatives."
    >
      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {contacts.map((item) => {
          const Icon = item.icon;

          const Card = (
            <div className="card h-full flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <Icon size={30} className="text-blue-400" />
              </div>

              <div className="flex-1">
                <p className="text-zinc-400 text-sm">
                  {item.title}
                </p>

                <h3 className="text-xl font-semibold mt-1">
                  {item.value}
                </h3>
              </div>

              {item.href && (
                <ExternalLink
                  size={20}
                  className="text-blue-400"
                />
              )}
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            );
          }

          return <div key={item.title}>{Card}</div>;
        })}
      </div>
    </Section>
  );
}