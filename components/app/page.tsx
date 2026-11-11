import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Packages />
      <About />
      <Calculator />
      <ContactFooter />
    </main>
  );
}