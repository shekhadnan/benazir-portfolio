"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="section-title">
            {title}
          </h2>

          {subtitle && (
            <p className="section-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </motion.section>
  );
}