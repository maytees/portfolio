"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Socials from "./_components/Socials";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div id="progress-bar" style={{ scaleX }} />
      <div className="mt-96 min-h-screen gap-10 flex flex-col justify-center max-sm:px-4">
        <div className="space-y-2 px-[32vw] mt-10">
          <h1 className="text-6xl animate-bounce font-bold text-center">
            Hello
            <span className="animate-pulse"> 👋</span>
          </h1>
          <p className="text-xl text-center text-pretty">
            I{"'"}m <span className="animate-pulse delay-500">Maytham</span>, a
            17 year old full stack web developer & aspiring systems developer.
            Currently a student residing in{" "}
            <span className="animate-pulse">Reston, Virginia</span>.
          </p>
        </div>
        <Socials />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
