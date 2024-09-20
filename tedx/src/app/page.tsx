import Image from "next/image";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Centered Header */}
        <div className="absolute inset-x-0 top-0">
          <Header />
        </div>

        {/* Main Content */}
        <div>
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}
