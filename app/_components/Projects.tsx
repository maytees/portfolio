"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Github, Globe2 } from "lucide-react";
import Link from "next/link";

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

const Projects = () => {
  return (
    <div className="mt-96 mb-96 px-[28vw]">
      <h1 className="text-4xl text-center">Projects 🎨</h1>
      <p className="text-center mt-4 px-20">
        Not all my projects are web dev based, in fact, the projects im most
        proud of aren{"'"}t web based.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <Project
          desc={`
            Epsonia is a cybersecurity scoring engine based on the Cyber Patriot scoring engine.
            After working on Epsonia for about a month, I decided to rewrite the project in Rust.
          `}
          name="Epsonia"
          range="Feb 2023 / Rewritten May 2023"
          skills={["Rust", "Typescript", "Cyber Sec", "Linux", "Bash"]}
          source="https://github.com/epsonia/epsonia-rs"
        />
        <Project
          desc={`
            Implementation of the Monki Language, from the Writing an Interpreter in Go.
            I wrote this in Rust, not Go. This is by far the project im most proud of.
          `}
          name="Monki"
          range="June 2023"
          skills={["Rust", "Lanugage Design"]}
          source="https://github.com/maytees/monki"
        />
        <Project
          desc={`
          This project is exactly as it sounds, a Wordle clone in the terminal.
          The project also includes keybinds which do different things. The
          project is written in Rust.
          `}
          name="Wordle TUI"
          range="Aug 2024"
          skills={["Rust", "Ratatui", "Crossterm"]}
          source="https://github.com/maytees/wordle-tui"
        />
        <Project
          desc={`
            Project made to help out with sorting business cards with laptop
            distribution for the South Lakes HS tech office. After scanning barcodes, the
            application return the order to pick up business cards for them to be
            alphabetical.
          `}
          name="SLHS Namecards"
          range="Aug 2024"
          skills={["Barcodes", "Deno", "CLI"]}
          source="https://github.com/maytees/slhs-namecards"
        />
        <Project
          desc={`
            Survival minigames Paper plugin for Minecraft. Adds twists to
            survival Minecraft meant to make the game more challenging to beat.
            I recently converted the project to Kotlin.
          `}
          name="Arcade"
          range="Jul 2023 - Aug 2024"
          skills={[
            "Java",
            "Kotlin",
            "Paper",
            "Bukkit",
            "Minecraft",
            "OOP Based",
          ]}
          source="https://github.com/maytees/arcade"
          website="https://modrinth.com/plugin/arcade"
        />
        <Project
          desc={`
            After seeing that all the SaaS starting templates were paid,
            I decided to create my own, but not really meant for other people,
            it's mainly for myself.
          `}
          name="NextJS Starter Template"
          range="July 2024"
          skills={[
            "NextJS 14",
            "React",
            "TailwindCSS",
            "ShadcnUI",
            "Prisma",
            "PostgresDB",
            "Resend",
            "AuthJS v5",
          ]}
          source="https://github.com/maytees/nextjs-starter-template"
        />
        <Project
          desc={`
            Automation script meant to fix vulnerabilities in the Cyber Patirot
            Competition. Works for Ubuntu & Debain. (don't use for personal use, this
            is meant for the Cyber Patriot competition!)
          `}
          name="Cypat Ubuntu Script"
          range="Nov 2022"
          skills={["Python", "Bash", "Cyber Sec", "Linux", "Ubuntu"]}
          source="https://github.com/maytees/cypat-ubuntu-script"
        />
      </div>
    </div>
  );
};

const Project = (props: {
  name: string;
  range: string;
  desc: string;
  skills: string[];
  source?: string; // Link
  website?: string; // Link
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <p className="font-light">{props.range}</p>
          <CardDescription>{props.desc}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex flex-col">
          <div className="w-full flex flex-row flex-wrap gap-1 mb-4">
            {props.skills.map((str, i) => (
              <div
                key={i}
                className="font-normal text-sm px-4 py-1 rounded-2xl bg-accent"
              >
                {str}
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-2">
            {props.website && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link
                  href={props.website}
                  className="gap-2 font-normal"
                  target="_blank"
                >
                  <Globe2 className="size-4" />
                  <span>Website</span>
                </Link>
              </Button>
            )}
            {props.source && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link
                  href={props.source}
                  className="gap-2 font-normal"
                  target="_blank"
                >
                  <Github className="size-4" />
                  <span>Source</span>
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Projects;
