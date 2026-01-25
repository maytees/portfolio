"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TechBadge } from "./TechBadge";

const projects = [
	{
		num: "01",
		title: "Reviseo",
		category: "SaaS",
		href: "https://reviseo.app",
		source: "https://github.com/maytees/reviseo",
		year: "2025",
		description:
			"Client feedback tool with annotated screenshots on live sites",
		details:
			"Built an embeddable widget (single script tag) with invite-only access and a dashboard to track feedback status. Spoke to multiple potential agency owners (B2B) and web freelancers (B2C) to find market validity.",
		tech: ["NextJS", "Vite", "Tigris (S3)", "Tailwind CSS", "Framer Motion"],
	},
	{
		num: "02",
		title: "Spacemint AI",
		category: "AI Web App",
		year: "2025",
		href: "https://spacemintai.com",
		source: "",
		description: "Floor plan to staged interior renders (Acquired)",
		details:
			"Implemented upload → style selection → image generation flow with credit-based pricing and downloads. Acquired 14+ users prior to acquisition through social media marketing.",
		tech: [
			"Vercel AI SDK",
			"NextJS",
			"Tailwind",
			"Google Gemini",
			"Posthog",
			"Tigris (S3)",
			"Polar Payments",
		],
	},
	{
		num: "03",
		title: "Arcade",
		category: "Minecraft Plugin",
		href: "https://modrinth.com/plugin/arcade",
		source: "https://github.com/maytees/arcade",
		year: "2023",
		description: "Survival minigame plugin for Minecraft",
		details:
			"6,000+ views, 450+ downloads. Refactored the entire plugin from Java to Kotlin; open-source project with customizable game modes.",
		tech: ["Java", "Kotlin", "PaperMC"],
	},
	{
		num: "04",
		title: "DENIS",
		category: "Systems",
		href: "",
		source: "https://github.com/maytees/denis",
		year: "2023",
		description: "Custom DNS server implementing RFC 1035 in Go",
		details:
			"Implemented core parts of RFC 1035 (UDP listener, packet parsing, response construction). Currently extending toward lookup tables, forwarding, caching, and a web interface.",
		tech: ["Go"],
	},
	{
		num: "05",
		title: "Epsonia",
		category: "Cybersecurity",
		href: "",
		source: "https://github.com/epsonia/epsonia-rs",
		year: "2023",
		description: "CyberPatriot-style scoring engine",
		details:
			"Evaluates system state against predefined checks (users, groups, configs) and applies points and penalties. Rewrote from TypeScript (Deno) to Rust with modular checks and stricter error handling.",
		tech: ["Rust", "TypeScript"],
	},
];

function ProjectCard({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) {
	const ref = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const mainLink = project.href || project.source;

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
			ref={ref}
			className="group block py-8 md:py-12 border-b border-border relative"
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
		>
			{/* Hover background */}
			<motion.div
				className="absolute inset-0 bg-card -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24"
				initial={{ opacity: 0 }}
				animate={{ opacity: isHovered ? 1 : 0 }}
				transition={{ duration: 0.3 }}
			/>

			<div className="relative flex flex-col md:flex-row md:items-start justify-between gap-4">
				<div className="flex items-baseline gap-6 md:gap-12">
					<span className="text-sm font-mono text-muted-foreground w-8">
						{project.num}
					</span>
					<div>
						<motion.h3
							className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground"
							animate={{ x: isHovered ? 20 : 0 }}
							transition={{ duration: 0.3 }}
						>
							{project.title}
						</motion.h3>
						<p className="text-muted-foreground mt-2 max-w-md text-sm md:text-base">
							{project.description}
						</p>

						{/* Details on hover */}
						<motion.p
							className="text-muted-foreground/80 mt-2 max-w-md text-sm"
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isHovered ? 1 : 0,
								height: isHovered ? "auto" : 0,
							}}
							transition={{ duration: 0.3 }}
						>
							{project.details}
						</motion.p>

						{/* Links */}
						<motion.div
							className="flex flex-wrap items-center gap-4 mt-3"
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isHovered ? 1 : 0,
								height: isHovered ? "auto" : 0,
							}}
							transition={{ duration: 0.3 }}
						>
							{project.href && (
								<Link
									href={project.href}
									target="_blank"
									className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-mono"
									data-cursor="pointer"
								>
									<ArrowUpRight className="w-3 h-3" />
									Visit
								</Link>
							)}
							{project.source ? (
								<Link
									href={project.source}
									target="_blank"
									className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-mono"
									data-cursor="pointer"
								>
									<ArrowUpRight className="w-3 h-3" />
									Source
								</Link>
							) : (
								<span className="text-sm text-muted-foreground/50 font-mono">
									Closed Source
								</span>
							)}
						</motion.div>

						{/* Tech Stack */}
						<motion.div
							className="flex flex-wrap gap-2 mt-3"
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isHovered ? 1 : 0,
								height: isHovered ? "auto" : 0,
							}}
							transition={{ duration: 0.3, delay: 0.05 }}
						>
							{project.tech.map((tech) => (
								<TechBadge key={tech} name={tech} />
							))}
						</motion.div>
					</div>
				</div>

				<div className="flex items-center gap-8 md:gap-12 ml-14 md:ml-0">
					<span className="text-sm text-muted-foreground font-mono">
						{project.category}
					</span>
					<span className="text-sm text-muted-foreground font-mono">
						{project.year}
					</span>
					{mainLink && (
						<Link href={mainLink} target="_blank" data-cursor="pointer">
							<motion.div
								animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
								transition={{ duration: 0.3 }}
							>
								<ArrowUpRight className="w-6 h-6 text-primary" />
							</motion.div>
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export function Projects() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return (
		<section
			id="work"
			ref={containerRef}
			className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
		>
			{/* Large background text */}
			<motion.div
				style={{ x }}
				className="absolute top-0 left-0 text-[20vw] font-bold text-border/30 whitespace-nowrap pointer-events-none select-none leading-none"
			>
				PROJECTS
			</motion.div>

			<div className="relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-16"
				>
					<Link
						href={"https://github.com/maytees?tab=repositories"}
						target="_blank"
						className="text-primary font-mono text-sm flex flex-row items-center gap-1"
					>
						See Repositories
						<ArrowUpRight className="text-primary" />
					</Link>
					<h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 tracking-tighter">
						Featured Projects
					</h2>
				</motion.div>

				<div className="border-t border-border">
					{projects.map((project, index) => (
						<ProjectCard key={project.num} project={project} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<Link
						href="https://github.com/maytees?tab=repositories"
						target="_blank"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
						data-cursor="pointer"
					>
						<motion.span
							className="inline-flex items-center gap-2"
							whileHover={{ x: 5 }}
						>
							View All Projects
							<ArrowUpRight className="w-4 h-4" />
						</motion.span>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
