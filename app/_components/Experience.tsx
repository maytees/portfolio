"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="mt-96 px-[32vw]">
      <h1 className="text-4xl text-center">Experience 👨‍💻</h1>
      <p className="text-center mt-4">
        I am a self taught software developer. I haven{"'"}t worked professional
        software development jobs, but I have the following working (paid &
        unpaid) experience:
      </p>

      <div className="flex flex-col gap-10 mt-10">
        <ExperienceCard
          name="South Lakes Tech Office"
          image="/slhs.png"
          desc="Student Intern"
          range="Aug 2023 - Aug 2024"
        />
        <ExperienceCard
          name="Five Guys"
          image="/fiveguys.png"
          desc="Crew Member"
          range="Oct 2023 - Feb 2024"
        />
        <ExperienceCard
          name="Langston Hughes Middle School"
          image="/langston.png"
          desc="Cybersecurity Instructor"
          range="Aug 2022 - May 2023"
        />
        <ExperienceCard
          name="Seahawkcyber Club"
          image="/slhscyber.png"
          desc="President"
          range="Aug 2021 - Present"
          imageBackground="bg-black"
        />
      </div>
    </div>
  );
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ExperienceCard = (props: {
  name: string;
  image: string;
  desc: string;
  range: string;
  className?: string;
  imageBackground?: string;
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      className={
        "flex flex-row justify-start items-center gap-2 " + props.className
      }
    >
      <Image
        src={props.image}
        alt={props.desc}
        height={"70"}
        width={"70"}
        className={"rounded-full " + props.imageBackground}
      />
      <div className="flex flex-row justify-between w-full items-start">
        <div className="flex flex-col gap-1">
          <h2 className="font-light">{props.name}</h2>
          <p className="text-muted-foreground font-extralight">{props.desc}</p>
        </div>
        <span className="text-muted-foreground text-balance w-24">
          {props.range}
        </span>
      </div>
    </motion.div>
  );
};

export default Experience;
