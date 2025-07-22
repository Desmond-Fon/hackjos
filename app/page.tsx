import Image from "next/image";
import landing from "./landing/page";
import AboutHackJos from "./components/AboutHackJos";
import CelebratingNhub from "./components/CelebratingNhub";

export default function Home() {
  return (
    <main>
      <AboutHackJos />
      <CelebratingNhub />
    </main>
  );
}
