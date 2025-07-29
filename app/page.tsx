import Image from "next/image";
import landing from "./landing/page";
import AboutHackJos from "./components/AboutHackJos";
import CelebratingNhub from "./components/CelebratingNhub";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutHackJos />
      <CelebratingNhub />
      <Footer />
    </main>
  );
}
