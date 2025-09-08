import React from "react";

export default function Overview() {
  return (
    <section id="overview" className="card p-6 md:p-8 mb-10">
      <header>
        <h2 className="section-title">Overview</h2>
        <div className="section-bar" />
      </header>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <p className="measure text-brand-ink/80">
          My training spans the lab bench and the community. In the lab, I support molecular and
          cellular workflows with careful documentation and reproducible methods. In the community,
          I focus on empathetic, patient-centred communication. I’m excited to grow at the
          intersection of brain, immune systems, and clinical care.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-brand-ink/70">Why medicine</p>
          <p className="mt-2 text-sm text-brand-ink/80">
            Medicine is where rigorous science meets person-to-person trust. I’m driven by the
            craft of making complex findings clear, actionable, and compassionate for patients and families.
          </p>
        </div>
      </div>
    </section>
  );
}
