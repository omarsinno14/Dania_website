import React from "react";

export default function Research() {
  const cards = [
    {
      title: "Neuroscience Lab — Current",
      body:
        "Investigate neural mechanisms and behavior: basic animal cell culture, light microscopy for characterization, RNA isolation, reverse transcription, and qPCR setup with meticulous documentation.",
    },
    {
      title: "Immunology Lab — Current",
      body:
        "Support molecular workflows examining immune pathways: sample preparation, protocol execution, data organization, and concise reporting for lab meetings.",
    },
    {
      title: "Community Health — Weekly Service",
      body:
        "Volunteer mentor at Nankind for children with a parent undergoing cancer; trained hotline volunteer for suicide-prevention (empathy, confidentiality, safety planning).",
    },
  ];

  return (
    <section id="research" className="mb-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <h2 className="section-title">Research & Service</h2>
          <div className="section-bar" />
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="card p-6 hover:shadow-lift transition">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/75">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
