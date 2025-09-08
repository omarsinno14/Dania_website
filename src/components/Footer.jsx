import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-brand-ink/60 pb-10">
      <div className="sep" />
      <p>
        © {new Date().getFullYear()} Dania Al Ghoul — Built with{" "}
        <span className="text-brand-primary font-medium">React</span> &{" "}
        <span className="text-brand-primary font-medium">Tailwind</span>
      </p>
    </footer>
  );
}
