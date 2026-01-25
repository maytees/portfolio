"use client";
import { ArrowDown, Github, PaperclipIcon } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import type { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { SkillBadge } from "./SkillBadge";
import { Button } from "./ui/button";
import { TextEffect } from "./ui/text-effect";

interface Skill {
	icon: IconType;
	id: number;
	name: string;
	bgColor?: string;
	borderColor?: string;
	iconColor?: string;
}

export const skills: Skill[] = [
	{
		id: 1,
		icon: SiNextdotjs,
		name: "NextJS",
		bgColor: "bg-slate-200",
		borderColor: "border-slate-400",
		iconColor: "text-black",
	},
	{
		id: 2,
		icon: FaReact,
		name: "React",
		bgColor: "bg-sky-200/20",
		borderColor: "border-sky-400/20",
		iconColor: "text-blue-500",
	},
	{
		id: 3,
		icon: PiFigmaLogo,
		name: "Figma",
		bgColor: "bg-pink-200/20",
		borderColor: "border-pink-400/20",
		iconColor: "text-pink-500",
	},
	{
		id: 4,
		icon: SiTailwindcss,
		name: "Tailwind 💙",
		bgColor: "bg-sky-200/20",
		borderColor: "border-blue-400/20",
		iconColor: "text-blue-400",
	},
];

const Hero = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

	return (
		<motion.section
			style={{ y, opacity, scale }}
			ref={heroRef}
			className="px-6 md:px-12 lg:px-40 mt-24 md:mt-36 lg:mt-48"
		>
			<TextEffect
				per="char"
				preset="fade-in-blur"
				className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[-0.03em] font-bold"
			>
				Hello, I&apos;m Maytham Ajam
			</TextEffect>
			<motion.h2
				initial={{ filter: "blur(20px)", opacity: 0 }}
				whileInView={{ filter: "blur(0px)", opacity: 1 }}
				transition={{ delay: 0.8, duration: 0.8 }}
				viewport={{ once: true }}
				className="text-base md:text-lg lg:text-[20px] leading-[1.4] md:leading-[1.3] tracking-[-0.01em] font-semibold text-muted-foreground max-w-3xl mt-4 md:mt-0"
			>
				I&apos;m 18, a student at George Mason University, programmer for 6
				years, based in the{" "}
				<Link
					className="text-primary underline"
					target="_blank"
					href={"https://en.wikipedia.org/wiki/Washington_metropolitan_area"}
				>
					DM(V)
				</Link>{" "}
				and an aspiring software engineer. I experiment a lot with libraries and
				tools you can see scrolling through{" "}
				<Link
					className="text-primary underline"
					target="_blank"
					href="https://github.com/maytees?tab=repositories"
				>
					my Github
				</Link>
				. Here are some tools I use often -
			</motion.h2>
			<ul className="mt-3 flex flex-row flex-wrap items-center gap-2">
				<AnimatePresence>
					{skills.map((skill) => (
						<SkillBadge
							id={skill.id}
							key={skill.name}
							icon={skill.icon}
							name={skill.name}
							bgColor={skill.bgColor}
							borderColor={skill.borderColor}
							iconColor={skill.iconColor}
						/>
					))}
				</AnimatePresence>
			</ul>

			<motion.div
				initial={{ filter: "blur(20px)", opacity: 0, y: 100 }}
				whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
				transition={{ delay: 2, duration: 0.8, type: "spring", bounce: 0.2 }}
				viewport={{ once: true }}
				className="mt-4 flex flex-col sm:flex-row gap-2 items-start sm:items-center"
			>
				<Button size={"lg"} className="w-full sm:w-auto" asChild>
					<Link
						target="_blank"
						href={"https://github.com/maytees?tab=repositories"}
					>
						<Github className="size-3.5 mt-[0.8]" />
						See Repositories
					</Link>
				</Button>
				<Button size={"lg"} variant={"outline"} className="w-full sm:w-auto" asChild>
					<Link href={"/resume.pdf"} target="_blank">
						<PaperclipIcon className="size-3.5 mt-[0.8]" />
						My Resume
					</Link>
				</Button>
			</motion.div>

			<ArrowDown className="animate-bounce mt-[20dvh] md:mt-[30dvh] w-full self-center text-muted-foreground" />
		</motion.section>
	);
};

export default Hero;
