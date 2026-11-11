"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/95 shadow-2xl shadow-purple-500/5 py-4 px-6 md:px-12 border-b border-brand-purple/10" : "glassmorphism py-4 px-6 md:px-12 mx-4 my-4 rounded-2xl"} flex justify-between items-center`}>
        <div className="flex items-center">
          <img src="/Image/Lumensky_studio.png" alt="Lumensky Studio" className="h-8 w-auto hover:scale-105 transition-transform" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-brand-accent transition-colors">Tentang Kami</a>
          <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portofolio</a>
          <a href="#services" className="hover:text-brand-accent transition-colors">Layanan</a>
          <a href="#calculator" className="hover:text-brand-accent transition-colors">Kalkulator Harga</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all text-sm">
            Hubungi Studio
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white focus:outline-none">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 text-xl font-semibold transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><i className="fa-solid fa-xmark text-3xl"></i></button>
        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Tentang Kami</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Portofolio</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Layanan</a>
        <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Kalkulator Harga</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl">Hubungi Studio</a>
      </div>
    </>
  );
}