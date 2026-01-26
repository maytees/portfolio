"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SplitText } from "./split-text";

const socials = [
	{ name: "GitHub", href: "https://github.com/maytees" },
	{ name: "LinkedIn", href: "https://linkedin.com/in/maythamajam" },
	{ name: "Twitter (X)", href: "https://x.com/ajammaytham" },
	{ name: "My Resume", href: "/resume.pdf" },
];

export function Contact() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, margin: "-100px" });

	return (
		<section
			id="contact"
			ref={containerRef}
			className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex flex-col justify-center"
		>
			{/* Large decorative text */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 0.03 } : {}}
				transition={{ duration: 1 }}
				className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
			>
				<span className="text-[30vw] font-bold tracking-tighter text-foreground">
					HI
				</span>
			</motion.div>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-primary font-mono text-sm"
				>
					Get in Touch
				</motion.span>

				<h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-6 tracking-tighter">
					<SplitText text="Let's work" delay={0.2} />
					<br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
						<SplitText text="together" delay={0.4} />
					</span>
				</h2>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-muted-foreground text-lg md:text-xl mt-8 max-w-xl mx-auto"
				>
					Have a project in mind? I&apos;d love to hear about it. Email me and
					let&apos;s create something extraordinary together.
				</motion.p>

				{/* Email CTA */}
				<motion.a
					href="mailto:matees@matees.net"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="inline-flex items-center gap-3 mt-12 text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors group"
					data-cursor="pointer"
				>
					matees@matees.net
					<motion.span
						className="inline-block"
						animate={{ x: [0, 5, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						<ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
					</motion.span>
				</motion.a>

				{/* Social links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 1 }}
					className="flex flex-wrap justify-center gap-8 mt-16"
				>
					{socials.map((social, index) => (
						<motion.a
							key={social.name}
							href={social.href}
							className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
							whileHover={{ y: -3 }}
							data-cursor="pointer"
						>
							{social.name}
						</motion.a>
					))}
				</motion.div>
			</div>

			{/* Footer */}
			<motion.footer
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.8, delay: 1.2 }}
				className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-6 md:px-12 lg:px-24 text-sm text-muted-foreground font-mono"
			>
				<span>Maytham Ajam</span>
				<span>2026</span>
			</motion.footer>
		</section>
	);
}
