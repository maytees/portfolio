"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Github, GithubIcon, Globe2 } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  desc: string;
  range: string;
  skills: string[];
  source?: string;
  website?: string;
}

// Array of projects
const projects: Project[] = [
  {
    name: "Epsonia",
    desc: "Epsonia is a cybersecurity scoring engine based on the Cyber Patriot scoring engine. After working on Epsonia for about a month, I decided to rewrite the project in Rust.",
    range: "Feb 2023 / Rewritten May 2023",
    skills: ["Rust", "Typescript", "Cyber Sec", "Linux", "Bash"],
    source: "https://github.com/epsonia/epsonia-rs",
  },
  {
    name: "Monki",
    desc: "Implementation of the Monki Language, from the Writing an Interpreter in Go. I wrote this in Rust, not Go. This is by far the project im most proud of.",
    range: "June 2023",
    skills: ["Rust", "Lanugage Design"],
    source: "https://github.com/maytees/monki",
  },
  {
    name: "Arcade",
    desc: "Survival minigames Paper plugin for Minecraft. Adds twists to survival Minecraft meant to make the game more challenging to beat. I recently converted the project to Kotlin.",
    range: "Jul 2023 - Aug 2024",
    skills: ["Java", "Kotlin", "Paper", "Bukkit", "Minecraft", "OOP Based"],
    source: "https://github.com/maytees/arcade",
    website: "https://modrinth.com/plugin/arcade",
  },
  {
    name: "SLHS Namecards",
    desc: "Project made to help out with sorting business cards with laptop distribution for the South Lakes HS tech office. After scanning barcodes, the application return the order to pick up business cards for them to be alphabetical.",
    range: "Aug 2024",
    skills: ["Barcodes", "Deno", "CLI"],
    source: "https://github.com/maytees/slhs-namecards",
  },
  {
    name: "Not Bad",
    desc: "Not Bad is a virus I created that enables remote shutdown of any computer. It is comprised of three components: a PowerShell script that listens to an API, a desktop app with an interface for remote shutdown, and a server side API. This project was not used maliciously!",
    range: "May 2023",
    skills: [
      "REST",
      "Deno",
      "Powershell",
      "Deno Deploy",
      "JSON",
      "Tauri",
      "NextJS (Pages)",
    ],
    source: "https://github.com/maytees/notbad",
  },
  {
    name: "NextJS Starter Template",
    desc: "After seeing that all the SaaS starting templates were paid, I decided to create my own, but not really meant for other people, it's mainly for myself.",
    range: "July 2024",
    skills: [
      "NextJS 14",
      "React",
      "TailwindCSS",
      "ShadcnUI",
      "Prisma",
      "PostgresDB",
      "Resend",
      "AuthJS v5",
    ],
    source: "https://github.com/maytees/nextjs-starter-template",
  },
  {
    name: "Cypat Ubuntu Script",
    desc: "Automation script meant to fix vulnerabilities in the Cyber Patirot Competition. Works for Ubuntu & Debain. (don't use for personal use, this is meant for the Cyber Patriot competition!)",
    range: "Nov 2022",
    skills: ["Python", "Bash", "Cyber Sec", "Linux", "Ubuntu"],
    source: "https://github.com/maytees/cypat-ubuntu-script",
  },
  {
    name: "Wordle TUI",
    desc: "This project is exactly as it sounds, a Wordle clone in the terminal. The project also includes keybinds which do different things. The project is written in Rust.",
    range: "Aug 2024",
    skills: ["Rust", "Ratatui", "Crossterm"],
    source: "https://github.com/maytees/wordle-tui",
  },
];

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
        {projects.map(
          ({ name, desc, range, skills, source, website }: Project, i) => (
            <Project
              key={i}
              name={name}
              desc={desc}
              range={range}
              skills={skills}
              website={website ?? ""}
              source={source ?? ""}
            />
          )
        )}
      </div>
      <Card className="mt-20">
        <CardHeader>
          <CardTitle>And much more..</CardTitle>
          <CardDescription>
            View my github profile to see what I've tinkered with and created. I
            have many small projects, but also many dull unfinished projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="gap-2 justify-start" asChild>
            <Link href={"https://github.com/maytees"} target="_blank">
              <GithubIcon className="size-5" />
              View my github
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Project = (props: Project) => {
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
              <Button asChild size="sm" className="flex-1">
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
              <Button asChild size="sm" className="flex-1">
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
