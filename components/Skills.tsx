"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TechBadge } from "./TechBadge";

const skills = [
	{
		num: "01",
		name: "FRONTEND",
		tools: ["React", "NextJS", "TypeScript", "Tailwind", "Framer Motion"],
		description: "Building beautiful minimal UI with aesthetic animations.",
	},
	{
		num: "02",
		name: "BACKEND",
		tools: ["Node.js", "Deno", "NextJS", "PostgreSQL", "Prisma"],
		description:
			"Building performant & scalable backends with modern frameworks & tools.",
	},
	{
		num: "03",
		name: "AI / ML",
		tools: ["Vercel AI SDK", "Google Gemini"],
		description: "Integrating AI capabilities and analytics into applications",
	},
	{
		num: "04",
		name: "TOOLS",
		tools: ["Figma", "Vite", "Git", "S3/Tigris", "Posthog"],
		description: "Design to deployment with modern dev tooling",
	},
];

const stats = [
	{ value: "6+", label: "YEARS" },
	{ value: "88+", label: "REPOSITORIES" },
	{ value: "10+", label: "CLIENTS" },
];

function SkillRow({
	skill,
	index,
}: {
	skill: (typeof skills)[0];
	index: number;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			if (mobile) {
				setIsHovered(true);
			}
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<motion.div
			className="group py-6 md:py-8 border-b border-border relative cursor-default"
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
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

			<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
				<div className="flex items-baseline gap-6 md:gap-12">
					<span className="text-sm font-mono text-muted-foreground w-8">
						{skill.num}
					</span>
					<div>
						<motion.h3
							className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground"
							animate={{ x: isHovered ? 20 : 0 }}
							transition={{ duration: 0.3 }}
						>
							{skill.name}
						</motion.h3>
						<motion.p
							className="text-muted-foreground mt-2 max-w-md overflow-hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isHovered ? 1 : 0,
								height: isHovered ? "auto" : 0,
							}}
							transition={{ duration: 0.3 }}
						>
							{skill.description}
						</motion.p>
					</div>
				</div>

				<motion.div
					className="flex flex-wrap gap-2 ml-14 md:ml-0 max-w-xs md:max-w-sm"
					animate={{ opacity: isHovered ? 1 : 0.7 }}
					transition={{ duration: 0.3 }}
				>
					{skill.tools.map((tool) => (
						<TechBadge key={tool} name={tool} />
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}

export function About() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const x = useTransform(scrollYProgress, [0, 1], [0, 200]);

	return (
		<section
			id="about"
			ref={containerRef}
			className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
		>
			{/* Large background text */}
			<motion.div
				style={{ x }}
				className="absolute top-0 right-0 text-[20vw] font-bold text-border/30 whitespace-nowrap pointer-events-none select-none leading-none"
			>
				ABOUT ABOUT
			</motion.div>

			<div className="relative z-10">
				{/* Header with stats */}
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<span className="text-primary font-mono text-sm">About Me</span>
						<h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 tracking-tighter max-w-2xl">
							I build things for the{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
								web
							</span>
						</h2>
					</motion.div>

					{/* Stats inline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex gap-8 md:gap-12"
					>
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
								className="text-center"
							>
								<div className="text-3xl md:text-5xl font-bold text-foreground">
									{stat.value}
								</div>
								<div className="text-xs text-muted-foreground font-mono mt-1">
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Bio text */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-16 leading-relaxed"
				>
					18 year old Freshman{" "}
					<span className="text-emerald-800 font-semibold">
						@ George Mason University
					</span>{" "}
					with 6 years of programming experience. I&apos;ve built and shipped
					SaaS websites, worked with AI integrations, and love experimenting
					with new technologies. From full stack web apps to systems programming
					in Go, Rust, and Deno.
				</motion.p>

				{/* Skills list */}
				<div className="border-t border-border">
					{skills.map((skill, index) => (
						<SkillRow key={skill.num} skill={skill} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
