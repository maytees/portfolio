"use client";

import { ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const milestones = [
	{
		year: "2019",
		age: "12",
		title: "THE SPARK",
		tech: "Lua / Roblox Studio",
		short: "Where it all began",
		description:
			"I first got started programming like most of us do, trying to make my own games. My first introduction to programming was Lua, for making simple Roblox games. I remember the first real project I was proud of was a Spray can simulator, where you click to spray a can and sell spraypaint to get money. It was obviously a lot of following tutorials and copying assets, but it was a big turning point in my life.",
	},
	{
		year: "2021",
		age: "14",
		title: "BREAKTHROUGH",
		tech: "Java / Plugins",
		short: "When programming clicked",
		description:
			"After on and off programming with Roblox, I programming started to really click with Java by creating Minecraft plugins. I spent a lot of time folloiwng tutorials at first, but at some point I finally got out of tutorial hell and could actually create projects without guidance. I also slightly got into open source during this phase with a short lived library that made developing plugins easier.",
	},
	{
		year: "2022",
		age: "15",
		title: "WEB DEVELOPMENT",
		tech: "HTML, CSS, JavaScript",
		short: "The pandemic pivot",
		description:
			"At some point in 2022 my friend had gotten a course on Udemy that taught web development, and I decided to get it as well. I immedietly loved web development because it was so easy to create amazing apps, coming from Roblox and Minecraft made web development very approachable.",
	},
	{
		year: "2023",
		age: "16",
		title: "SYSTEMS",
		tech: "Rust / Systems Programming / Cybersecurity",
		short: "Down to the metal",
		description:
			"Taking a break from web development, I started to get into systems programming. This was sparked by the Cybersecurity club at my high school, where we competed in competitions, this made me create scripts to get points in the competitions; inspired by this competition (AFA Cyberpatriot) I wanted to create a scoring engine, I originally wrote it in Typescript with Deno, but then used it as the project to learn Rust with.",
	},
	{
		year: "2024",
		age: "17",
		title: "GOING DEEPER",
		tech: "React, Next.js, TypeScript, and Tailwind",
		short: "Framework enlightenment",
		description:
			"I tried a few frontend libraries, including Vue, and Svelte, but they didn't really stick on like React. I had used component libraries for UI like Material UI, and Mantine, and eventually landed on Tailwind CSS. I had always been scared of NextJS because of getServerSideProps and all those other pages router functions, but I fell in love with it when the app router came out (2023).",
	},
	{
		year: "2026",
		age: "18",
		title: "PRESENT",
		tech: "Full Stack + Systems",
		short: "Ready for what's next",
		description:
			"I'm currently a freshman at George Mason University studying IT with a concentration on Cybersecurity, but I'm planning to get a job in Software Engineering. At this current state, I'm busy with freelance work, school, and SaaS projects. I'm very excited for whats to come in my future. If you have any questions for me feel free to email me at matees@matees.net!",
	},
];

function TimelineItem({
	milestone,
	index,
}: {
	milestone: (typeof milestones)[0];
	index: number;
}) {
	const itemRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// For mobile: expand when item is in center of viewport
	const isInView = useInView(itemRef, {
		margin: "-40% 0px -40% 0px", // Active when in middle 20% of viewport
	});

	useEffect(() => {
		const checkMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// On mobile, expand/collapse based on scroll position
	useEffect(() => {
		if (isMobile) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsHovered(isInView);
			setIsExpanded(isInView);
		}
	}, [isMobile, isInView]);

	return (
		<motion.div
			ref={itemRef}
			className="group py-8 md:py-12 border-b border-border relative md:cursor-pointer"
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			onClick={() => !isMobile && setIsExpanded(!isExpanded)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.08 }}
			viewport={{ once: true }}
			data-cursor="pointer"
		>
			{/* Hover background */}
			<motion.div
				className="absolute inset-0 bg-card -mx-6 md:-mx-12 lg:-mx-24"
				initial={{ opacity: 0 }}
				animate={{ opacity: isHovered ? 1 : 0 }}
				transition={{ duration: 0.3 }}
			/>

			<div className="relative">
				{/* Main row */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
					<div className="flex items-baseline gap-6 md:gap-12">
						{/* Year as the number */}
						<div className="flex flex-col items-center">
							<span className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
								{milestone.year}
							</span>
							<span className="text-xs text-muted-foreground font-mono">
								AGE {milestone.age}
							</span>
						</div>

						<div>
							<motion.h3
								className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground"
								animate={{ x: isHovered ? 20 : 0 }}
								transition={{ duration: 0.3 }}
							>
								{milestone.title}
							</motion.h3>
							<motion.p
								className="text-muted-foreground text-sm md:text-base mt-1"
								animate={{ opacity: isHovered ? 1 : 0.6 }}
							>
								{milestone.short}
							</motion.p>
						</div>
					</div>

					<div className="flex items-center gap-6 ml-20 md:ml-0">
						<span className="text-sm text-muted-foreground font-mono hidden md:block">
							{milestone.tech}
						</span>
						<span className="text-muted-foreground text-xs font-light hidden md:block">
							Click to view
						</span>
					</div>
				</div>

				{/* Expanded content */}
				<motion.div
					className="overflow-hidden"
					initial={{ height: 0, opacity: 0 }}
					animate={{
						height: isExpanded ? "auto" : 0,
						opacity: isExpanded ? 1 : 0,
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					<div className="pt-6 md:pt-8 md:pl-28 lg:pl-36">
						<div className="grid md:grid-cols-[1fr,200px] gap-6">
							<p className="text-muted-foreground leading-relaxed text-base md:text-lg">
								{milestone.description}
							</p>
							<div className="md:text-right">
								<span className="text-xs text-muted-foreground font-mono block mb-2">
									STACK
								</span>
								<span className="text-foreground font-medium">
									{milestone.tech}
								</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export function Journey() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

	return (
		<section
			id="journey"
			ref={containerRef}
			className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
		>
			{/* Large background text */}
			<motion.div
				style={{ x }}
				className="absolute top-1/4 right-0 text-[15vw] font-bold text-border/20 whitespace-nowrap pointer-events-none select-none leading-none -rotate-90 origin-right"
			>
				JOURNEY
			</motion.div>

			<div className="relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<span className="text-primary font-mono text-sm">My Path</span>
					<h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 tracking-tighter">
						The Journey
					</h2>
					<p className="text-muted-foreground mt-4 max-w-2xl text-lg">
						Nine years of building, breaking, and learning. From Roblox games to
						production web apps—this is how I got here.
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="border-t border-border">
					{milestones.map((milestone, index) => (
						<TimelineItem
							key={milestone.year}
							milestone={milestone}
							index={index}
						/>
					))}
				</div>

				{/* Current status */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 p-8 border border-primary/30 bg-primary/5 rounded-lg"
				>
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div>
							<span className="text-primary font-mono text-sm">
								Currently Seeking
							</span>
							<h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
								Software Engineering Opportunities
							</h3>
							<p className="text-muted-foreground mt-2 max-w-xl">
								Open to full time roles, internships, and interesting projects.
								Especially excited about teams building developer tools or
								anything pushing the boundaries of the web.
							</p>
						</div>
						{/* <motion.a
							href="#contact"
							className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shrink-0"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							data-cursor="pointer"
						>
							Get In Touch
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</motion.a> */}
						<Button asChild size={"lg"}>
							<Link href={"#contact"}>
								Get in touch <ArrowRight />
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
