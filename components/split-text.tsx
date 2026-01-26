"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SplitTextProps {
	text: string;
	className?: string;
	delay?: number;
	staggerDelay?: number;
}

export function SplitText({
	text,
	className = "",
	delay = 0,
	staggerDelay = 0.03,
}: SplitTextProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	const words = text.split(" ");

	return (
		<span ref={ref} className={`inline-block ${className}`}>
			{words.map((word, wordIndex) => (
				<span key={wordIndex} className="inline-block mr-[0.25em]">
					{word.split("").map((char, charIndex) => (
						<motion.span
							key={charIndex}
							className="inline-block"
							initial={{ y: 100, opacity: 0, rotateX: -90 }}
							animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
							transition={{
								duration: 0.6,
								delay:
									delay + (wordIndex * word.length + charIndex) * staggerDelay,
								ease: [0.215, 0.61, 0.355, 1],
							}}
						>
							{char}
						</motion.span>
					))}
				</span>
			))}
		</span>
	);
}
