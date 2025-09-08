import React from "react";

export default function Sidebar() {
  const links = [
    { name: "Overview", href: "#overview" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile card */}
      <div className="card p-5">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center text-lg font-semibold">
            DA
          </div>
          <div>
            <h3 className="text-lg font-semibold">Dania Al Ghoul</h3>
            <p className="text-xs text-brand-mute">Neuroscience & Immunology</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
            <p className="text-[11px] text-brand-ink/60">Labs</p>
            <p className="text-base">2</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
            <p className="text-[11px] text-brand-ink/60">MCAT</p>
            <p className="text-base">Done</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
            <p className="text-[11px] text-brand-ink/60">Service</p>
            <p className="text-base">Weekly</p>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <a href="/Dania_CV.pdf" className="btn-ghost w-full text-center">CV</a>
          <a href="#contact" className="btn-primary w-full text-center">Contact</a>
        </div>
      </div>

      {/* Quick nav */}
      <nav className="card p-4">
        <p className="text-xs text-brand-ink/60 mb-2">Navigate</p>
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tag cloud */}
      <div className="card p-4">
        <p className="text-xs text-brand-ink/60 mb-3">Focus Areas</p>
        <div className="flex flex-wrap gap-2">
          {["Neurobiology","Immunology","qPCR","Microscopy","FSL","TBSS","Brainstorm","Community Care"].map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
