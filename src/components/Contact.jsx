import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="card p-6 md:p-8 mb-10">
      <header>
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-bar" />
      </header>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-brand-ink/75">
            Open to research roles, clinical exposure, and community health projects.
            I’d love to connect.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {/* TODO: replace with Dania’s actual details */}
            <a className="text-brand-primary hover:underline" href="mailto:dania@example.com">dania@example.com</a>
            <div><a className="hover:underline" href="https://www.linkedin.com/in/dania" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Inquiry from ${fd.get("name") || "Portfolio"}`);
            const body = encodeURIComponent(
              `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`
            );
            window.location.href = `mailto:dania@example.com?subject=${subject}&body=${body}`;
          }}
          className="space-y-3"
        >
          <input
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-brand-ink/40"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-brand-ink/40"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-brand-ink/40"
          />
          <button className="btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}
