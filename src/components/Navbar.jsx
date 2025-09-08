import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Overview", href: "#overview" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-white/90 backdrop-blur border-b border-slate-200" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between py-3">
          <a href="#home" className="text-base font-semibold tracking-wide">
            <span className="text-brand-primary">Dania</span>{" "}
            <span className="text-brand-ink/70">Al Ghoul</span>
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <li key={l.name}>
                <a href={l.href} className="text-sm text-brand-ink/70 hover:text-brand-ink">{l.name}</a>
              </li>
            ))}
            <li>
              <a href="/Dania_CV.pdf" className="btn-ghost">CV</a>
            </li>
          </ul>
          <a href="/Dania_CV.pdf" className="md:hidden btn-ghost">CV</a>
        </nav>
      </div>
    </header>
  );
}
