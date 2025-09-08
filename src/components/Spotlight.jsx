import React from "react";

export default function Spotlight() {
  const cards = [
    {
      title: "Current Research — Neuroscience",
      copy:
        "Support experiments investigating neural mechanisms and behavior. Tasks include basic animal cell culture, light microscopy for cell characterization, RNA isolation, reverse transcription, and qPCR setup with meticulous documentation.",
    },
    {
      title: "Current Research — Immunology",
      copy:
        "Contribute to molecular workflows examining immune pathways. Assist with sample prep, assay execution, data organization, and concise reporting of results suitable for lab meetings.",
    },
    {
      title: "Community Health — Weekly Service",
      copy:
        "Volunteer mentor at Nankind supporting children whose parents have cancer, and trained hotline volunteer for suicide-prevention. Focus on empathy, confidentiality, risk assessment, and safety planning.",
    },
  ];

  return (
    <section id="spotlight" className="py-14">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">
            Research & <span className="text-brand-primary">Service</span>
          </h2>
          <p className="mt-2 text-brand-ink/70">
            A snapshot of what I’m working on and why it matters.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="card p-6 hover:shadow-lift transition">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-brand-ink/75">{c.copy}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 section-glow" />
    </section>
  );
}
