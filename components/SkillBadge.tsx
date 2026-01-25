"use client";
import { motion } from "motion/react";
import type { IconType } from "react-icons";

interface SkillBadgeProps {
	icon: IconType;
	name: string;
	bgColor?: string;
	borderColor?: string;
	iconColor?: string;
	id: number;
}

export const SkillBadge = ({
	id,
	icon: Icon,
	name,
	bgColor = "bg-slate-200",
	borderColor = "border-slate-400",
	iconColor = "text-black",
}: SkillBadgeProps) => {
	return (
		<motion.li
			key={name}
			layout
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{
				delay: id * 0.1 + 1.5,
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
			className={`px-2 ${bgColor} max-w-fit border rounded-lg ${borderColor} py-1.5 flex flex-row items-center gap-2`}
		>
			<Icon className={`size-5 ${iconColor}`} />
			<span className="font-semibold">{name}</span>
		</motion.li>
	);
};
