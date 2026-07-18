"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const skillCategories = [
  {
    title: "Leadership",
    skills: [
      "Operations Management",
      "Business Development",
      "Strategic Planning",
      "Team Leadership",
    ],
  },
  {
    title: "Business",
    skills: [
      "Project Management",
      "Client Relationship Management",
      "Stakeholder Management",
      "Process Improvement",
    ],
  },
  {
    title: "Technology",
    skills: [
      "Artificial Intelligence",
      "CRM",
      "ERP",
      "Microsoft Office",
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      "Problem Solving",
      "Decision Making",
      "Communication",
      "Analytical Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Core Competencies"
      subtitle="A combination of leadership, business operations and technology skills developed over 9+ years."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 mt-7">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}