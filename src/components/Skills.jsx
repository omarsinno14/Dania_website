import React from "react";

const groups = [
  {
    title: "Laboratory Techniques",
    chips: [
      "Basic Animal Cell Culture",
      "Light Microscopy",
      "RNA Isolation",
      "Reverse Transcription",
      "qPCR Amplification",
      "Wet-lab Documentation",
    ],
  },
  {
    title: "Neuroimaging & Analysis",
    chips: [
      "FSL GUI",
      "FAST (Segmentation)",
      "BET (Brain Extraction)",
      "GLM GUI",
      "Probtrackx",
      "FSLeyes",
      "TBSS",
      "Brainstorm",
    ],
  },
  {
    title: "Clinical & Communication",
    chips: [
      "Scientific Writing",
      "Oral Presentations",
      "Collaborative Teamwork",
      "Patient-centred Mindset",
      "Biosafety Level 2",
    ],
  },
  {
    title: "Software & Productivity",
    chips: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Teams",
      "OneNote",
      "Outlook",
      "Google Docs",
      "Sheets",
      "Drive",
      "Meet",
    ],
  },
  { title: "Languages", chips: ["English (Native)", "Arabic (Native)", "French (Conversational)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="card p-6 md:p-8 mb-10">
      <header>
        <h2 className="section-title">Core Skills</h2>
        <div className="section-bar" />
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <article key={g.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-brand-ink/70">{g.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.chips.map((c) => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
