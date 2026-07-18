"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Menu,
  X,
  User,
  Briefcase,
  Cpu,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react";

const links = [
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Cpu,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "certifications",
    label: "Certificates",
    icon: Award,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "";

      for (const link of links) {
        const section = document.getElementById(link.id);

        if (!section) continue;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <
            section.offsetTop + section.offsetHeight
        ) {
          current = link.id;
        }
      }

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="w-full max-w-[1220px] px-5">
          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              rounded-full
              px-8
              py-4
              bg-zinc-900/90
              backdrop-blur-2xl
              border
              border-white/10
              shadow-[0_8px_40px_rgba(0,0,0,0.35)]
            "
          >
            <a
              href="#"
              className="text-2xl font-black tracking-tight"
            >
              Benazir
              <span className="text-blue-500">.</span>
            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative transition-all duration-300 ${
                    active === link.id
                      ? "text-blue-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                      active === link.id
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop Resume */}

            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden lg:flex primary-btn"
            >
              <FileText size={18} />
              Resume
            </a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Sidebar */}

        <div
          className={`absolute top-0 right-0 h-full w-96 max-w-[90%] bg-zinc-950 border-l border-zinc-800 shadow-2xl transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-7 border-b border-zinc-800">
            <h2 className="text-xl font-bold">
              Menu
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <nav className="px-7 py-8 space-y-3">

            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
  active === link.id
    ? "bg-blue-600 text-white"
    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
}`}
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {link.label}
                  </span>
                </a>
              );
            })}

            <div className="pt-6">
              <a
  href="/resume.pdf"
  target="_blank"
  onClick={() => setMenuOpen(false)}
  className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-white font-semibold transition hover:bg-blue-700"
>
  <FileText size={20} />
  Resume
</a>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}