import RevealLinks from "@/components/RevealLinks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="relative">
        <p className=" absolute top-5 left-1/2 -translate-x-1/2 text-[10px] md:text-[20px] bg-white/50 px-5 py-2 rounded-full">
          Hover over to see the animation
        </p>
        <RevealLinks />
      </main>
    </div>
  );
}
