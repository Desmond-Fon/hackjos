import Image from "next/image";
import AboutHackJos from "./components/AboutHackJos";
import CelebratingNhub from "./components/CelebratingNhub";
import HackChallenge from "./components/HackChallenge";
import ConferenceExp from "./components/ConferenceExp";
import WhoShouldAttend from "./components/WhoShouldAttend";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutHackJos />
      <CelebratingNhub />
      <HackChallenge />
      <ConferenceExp />
      <WhoShouldAttend />
      <Footer />
    </main>
  );
}
