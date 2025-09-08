import React from "react";

export default function Intro() {
  return (
    <section id="overview" className="card p-6 md:p-8">
      <header>
        <h2 className="section-title">Translating brain & immune science into care</h2>
        <div className="section-bar" />
      </header>

      <div className="mt-5 grid gap-8 md:grid-cols-2">
        <p className="measure text-brand-ink/80">
          I’m <strong>Dania Al Ghoul</strong>, a University of Toronto graduate in Neuroscience
          and Immunology (MCAT completed). I work across two Toronto labs and volunteer weekly with
          Nankind and a suicide-prevention hotline. My approach pairs rigorous methods with a
          patient-centred mindset.
        </p>

        <div className="grid gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs text-brand-ink/60">At a glance</p>
            <ul className="mt-2 text-sm text-brand-ink/80 list-disc ml-5 space-y-1">
              <li>Bench: cell culture, RNA workflows, RT/qPCR, microscopy</li>
              <li>Neuroimaging: FSL (FAST, BET, GLM), TBSS, Brainstorm</li>
              <li>Communication: scientific writing & presentations</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs text-brand-ink/60">Community</p>
            <p className="text-sm text-brand-ink/80">
              Weekly youth support via Nankind; hotline volunteer providing confidential,
              empathetic care with risk assessment & safety planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
