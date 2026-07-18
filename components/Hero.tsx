"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] w-[520px] h-[520px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 mb-8">
              Available for Leadership Roles
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-none">
              {portfolio.name.split(" ")[0]}
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                {portfolio.name.split(" ")[1]}
              </span>
            </h1>

            <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-xl">
              {portfolio.description}
            </p>

            <div className="mt-[80px] flex flex-col gap-[40px]">

              <div className="flex flex-wrap gap-5">

                <a
                  href="#experience"
                  className="primary-btn flex items-center gap-2"
                >
                  View Experience
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="secondary-btn flex items-center gap-2"
                >
                  <Mail size={18} />
                  Contact
                </a>

              </div>

              <div className="grid grid-cols-3 gap-5">

                {[
                  ["9+", "Years Experience"],
                  ["5", "Organizations"],
                  ["4+", "Certifications"],
                ].map(([number, label]) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="glass rounded-2xl p-6"
                  >
                    <h2 className="text-4xl font-black text-blue-400">
                      {number}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      {label}
                    </p>
                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.9 },
              scale: { duration: 0.9 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[90px] scale-110" />

              <div className="absolute inset-[-14px] rounded-full border border-blue-500/25" />

              <div className="relative w-[390px] h-[390px] rounded-full p-[5px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 shadow-[0_0_70px_rgba(59,130,246,0.35)]">

                <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900">

                  <img
                    src="/profile.jpeg"
                    alt="Benazir Niyariya"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}