import React from "react";

export default function Highlights() {
  const items = [
    {
      k: "Education",
      v: "BSc Neuroscience & Immunology",
      d: "University of Toronto (Minor in Physiology), expected 2025.",
    },
    {
      k: "Research",
      v: "Two Active Labs — Toronto",
      d: "Routine bench work and analysis: cell culture, microscopy, RNA workflows, qPCR, and documentation.",
    },
    {
      k: "Service",
      v: "Nankind & Suicide Hotline",
      d: "Weekly support for children of parents with cancer; trained hotline volunteer for suicide-prevention.",
    },
  ];

  return (
    <section id="highlights" className="py-14">
      <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-3">
        {items.map((x) => (
          <article key={x.k} className="card p-6 hover:shadow-lift transition">
            <p className="text-xs text-brand-ink/60">{x.k}</p>
            <p className="mt-1 text-xl text-brand-primary">{x.v}</p>
            <p className="mt-2 text-sm text-brand-ink/75">{x.d}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 section-glow" />
    </section>
  );
}
