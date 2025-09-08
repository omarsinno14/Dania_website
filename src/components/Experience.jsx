import React from "react";

const items = [
  {
    title: "Research Assistant — Neuroscience Lab (Toronto)",
    period: "Current",
    body:
      "Investigate neural mechanisms and behavior; culture handling, microscopy, RNA workflows, qPCR preparation, and rigorous documentation for reproducibility.",
  },
  {
    title: "Research Assistant — Immunology Lab (Toronto)",
    period: "Current",
    body:
      "Contribute to molecular assays examining immune pathways; responsibilities include sample preparation, protocol execution, data organization, and clear reporting.",
  },
  {
    title: "Volunteer — Suicide-Prevention Hotline",
    period: "Current",
    body:
      "Provide confidential, empathetic support using active listening, risk assessment, and safety planning within established protocols.",
  },
  {
    title: "Volunteer Mentor — Nankind",
    period: "Current",
    body:
      "Weekly virtual sessions for children whose parents are undergoing cancer treatment; structured activities and resource guidance.",
  },
  {
    title: "Education — University of Toronto",
    period: "Expected 2025",
    body:
      "BSc in Neuroscience & Immunology (Minor in Physiology). MCAT completed; coursework in neurobiology, immunology, anatomy, and research methods.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="card p-6 md:p-8 mb-10">
      <header>
        <h2 className="section-title">Experience & Timeline</h2>
        <div className="section-bar" />
      </header>

      <div className="mt-6 relative pl-6">
        <div className="absolute left-[10px] top-0 bottom-0 w-px bg-slate-200" />
        <div className="space-y-6">
          {items.map((e) => (
            <article key={e.title} className="relative">
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-brand-primary" />
              <div className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lift transition">
                <header className="flex items-center justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold">{e.title}</h3>
                  <span className="text-xs text-brand-ink/60">{e.period}</span>
                </header>
                <p className="mt-2 text-sm text-brand-ink/75">{e.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
