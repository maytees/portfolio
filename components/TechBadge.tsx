"use client";

import type { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import {
	SiFramer,
	SiGit,
	SiGo,
	SiGooglegemini,
	SiKotlin,
	SiNextdotjs,
	SiPrisma,
	SiRust,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVite,
} from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";
import { RiBarChartBoxLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";

export interface TechConfig {
	icon: IconType;
	bg: string;
	iconColor: string;
	textColor?: string;
}

export const techConfigs: Record<string, TechConfig> = {
	NextJS: {
		icon: SiNextdotjs,
		bg: "bg-black dark:bg-white",
		iconColor: "text-white dark:text-black",
		textColor: "text-white dark:text-black",
	},
	React: {
		icon: FaReact,
		bg: "bg-sky-500/20",
		iconColor: "text-sky-500",
	},
	Vite: {
		icon: SiVite,
		bg: "bg-purple-500/20",
		iconColor: "text-purple-500",
	},
	"Tailwind CSS": {
		icon: SiTailwindcss,
		bg: "bg-cyan-500/20",
		iconColor: "text-cyan-500",
	},
	Tailwind: {
		icon: SiTailwindcss,
		bg: "bg-cyan-500/20",
		iconColor: "text-cyan-500",
	},
	"Framer Motion": {
		icon: SiFramer,
		bg: "bg-pink-500/20",
		iconColor: "text-pink-500",
	},
	"Vercel AI SDK": {
		icon: SiVercel,
		bg: "bg-black dark:bg-white",
		iconColor: "text-white dark:text-black",
		textColor: "text-white dark:text-black",
	},
	"Google Gemini": {
		icon: SiGooglegemini,
		bg: "bg-blue-500/20",
		iconColor: "text-blue-500",
	},
	Posthog: {
		icon: RiBarChartBoxLine,
		bg: "bg-blue-600/20",
		iconColor: "text-blue-500",
	},
	"Tigris (S3)": {
		icon: FaAws,
		bg: "bg-orange-500/20",
		iconColor: "text-orange-500",
	},
	"S3/Tigris": {
		icon: FaAws,
		bg: "bg-orange-500/20",
		iconColor: "text-orange-500",
	},
	"Polar Payments": {
		icon: MdPayment,
		bg: "bg-indigo-500/20",
		iconColor: "text-indigo-500",
	},
	Java: {
		icon: FaJava,
		bg: "bg-red-500/20",
		iconColor: "text-red-500",
	},
	Kotlin: {
		icon: SiKotlin,
		bg: "bg-purple-600/20",
		iconColor: "text-purple-500",
	},
	PaperMC: {
		icon: TbBrandMinecraft,
		bg: "bg-green-500/20",
		iconColor: "text-green-500",
	},
	Go: {
		icon: SiGo,
		bg: "bg-cyan-600/20",
		iconColor: "text-cyan-500",
	},
	Rust: {
		icon: SiRust,
		bg: "bg-orange-600/20",
		iconColor: "text-orange-500",
	},
	TypeScript: {
		icon: SiTypescript,
		bg: "bg-blue-600/20",
		iconColor: "text-blue-500",
	},
	"Node.js": {
		icon: FaNodeJs,
		bg: "bg-green-600/20",
		iconColor: "text-green-500",
	},
	PostgreSQL: {
		icon: BiLogoPostgresql,
		bg: "bg-blue-700/20",
		iconColor: "text-blue-600",
	},
	Prisma: {
		icon: SiPrisma,
		bg: "bg-slate-600/20",
		iconColor: "text-slate-500 dark:text-slate-300",
	},
	Figma: {
		icon: PiFigmaLogo,
		bg: "bg-pink-500/20",
		iconColor: "text-pink-500",
	},
	Git: {
		icon: SiGit,
		bg: "bg-orange-500/20",
		iconColor: "text-orange-500",
	},
};

export function TechBadge({ name }: { name: string }) {
	const config = techConfigs[name];

	if (!config) {
		return (
			<span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground">
				{name}
			</span>
		);
	}

	const Icon = config.icon;
	const textColor = config.textColor || "text-foreground";

	return (
		<span
			className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono rounded ${config.bg}`}
		>
			<Icon className={`w-3 h-3 ${config.iconColor}`} />
			<span className={textColor}>{name}</span>
		</span>
	);
}
