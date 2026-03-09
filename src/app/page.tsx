import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingActions from "@/components/FloatingActions";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import Transformations from "@/components/Transformations";
import Memberships from "@/components/Memberships";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Programs />
      <Transformations />
      <Memberships />
      <Testimonials />
      <Contact />
      <FloatingActions />
      <footer className="py-8 bg-black text-center text-zinc-500 border-t border-zinc-900 mt-auto">
        <p className="text-sm font-light">© {new Date().getFullYear()} Utopia Fitness Garage. All rights reserved.</p>
      </footer>
    </main>
  );
}
