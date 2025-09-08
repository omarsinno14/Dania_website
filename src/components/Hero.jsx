import React from "react";

export default function Hero() {
  return (
    <section id="home" className="pt-20 md:pt-24 pb-16">
      <div className="mx-auto max-w-6xl">
        {/* Two-column hero: copy + portrait */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy block */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-xs tracking-[0.22em] text-brand-ink/60">
              NEUROSCIENCE • IMMUNOLOGY • COMMUNITY HEALTH
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Compassion meets <span className="grad-text">evidence-based</span> care.
            </h1>
            <p className="mt-5 text-lg text-brand-ink/75 mx-auto md:mx-0 max-w-xl">
              I’m <strong>Dania Al Ghoul</strong>, a University of Toronto graduate
              in Neuroscience &amp; Immunology (MCAT completed). I work across two
              Toronto labs and volunteer weekly with Nankind and a suicide-prevention hotline.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="badge">Neuroscience</span>
              <span className="badge">Immunology</span>
              <span className="badge">Community Health</span>
              <span className="badge">Patient-centred</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <a href="#research" className="btn-primary">See Current Work</a>
              <a href="#contact" className="btn-ghost">Get in Touch</a>
            </div>
          </div>

          {/* Portrait block */}
          <div className="relative">
            {/* soft glow behind the frame */}
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem]
                         bg-gradient-to-tr from-brand-primary/25 to-brand-accent/20 blur-2xl"
              aria-hidden="true"
            />
            {/* gradient frame */}
            <div className="relative rounded-[1.4rem] p-[4px] bg-gradient-to-br from-brand-primary/60 to-brand-accent/60 shadow-lift">
              {/* inner card */}
              <div className="rounded-[1.2rem] overflow-hidden bg-white">
                {/* image: set your file path here */}
                <img
                  src="/dania.jpg"
                  alt="Portrait of Dania Al Ghoul"
                  className="w-full h-[360px] md:h-[480px] object-cover"
                />
                {/* subtle caption strip */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 bg-white/80 backdrop-blur">
                  <div className="text-sm text-brand-ink/70">
                    Toronto, Ontario • Canada
                  </div>
                  <a href="/Dania_CV.pdf" className="btn-ghost text-xs">Download CV</a>
                </div>
              </div>
            </div>

            {/* removed the floating corner badges */}
          </div>
        </div>
      </div>
    </section>
  );
}
