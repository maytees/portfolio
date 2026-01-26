"use client";

import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
				{/* Large decorative 404 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.03 }}
					transition={{ duration: 1 }}
					className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
				>
					<span className="text-[30vw] font-bold tracking-tighter text-foreground">
						404
					</span>
				</motion.div>

				<div className="relative z-10 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-primary font-mono text-sm"
					>
						Page Not Found
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-5xl md:text-7xl font-bold text-foreground mt-6 tracking-tighter"
					>
						Oops, lost in
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
							the void
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-muted-foreground text-lg md:text-xl mt-6 max-w-md mx-auto"
					>
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Button size="lg" asChild>
							<Link href="/">
								<Home className="size-4" />
								Back to Home
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/#contact">
								<ArrowLeft className="size-4" />
								Contact Me
							</Link>
						</Button>
					</motion.div>
				</div>
			</main>
		</div>
	);
}
