import React from "react";

export default function Metrics() {
  const items = [
    { k: "Bench Techniques", v: "Cell Culture · Microscopy · qPCR" },
    { k: "Neuroimaging", v: "FSL · TBSS · Brainstorm" },
    { k: "Communication", v: "Scientific Writing · Presentations" },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 grid gap-4 md:grid-cols-3">
        {items.map((x) => (
          <div key={x.k} className="card p-5 hover:shadow-lift transition">
            <p className="text-xs text-brand-ink/60">{x.k}</p>
            <p className="mt-2 text-brand-ink/80">{x.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
