import Image from "next/image";
import AboutHackJos from "./components/AboutHackJos";
import CelebratingNhub from "./components/CelebratingNhub";
import HackChallenge from "./components/HackChallenge";
import ConferenceExp from "./components/ConferenceExp";
import WhoShouldAttend from "./components/WhoShouldAttend";

export default function Home() {
  return (
    <main>
      <AboutHackJos />
      <CelebratingNhub />
      <HackChallenge />
      <ConferenceExp />
      <WhoShouldAttend />
    </main>
  );
}
