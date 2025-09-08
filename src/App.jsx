import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-brand-ink bg-medflow relative">
      <div className="wave"></div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4">
        <Hero />
        <Overview />
        <Research />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
