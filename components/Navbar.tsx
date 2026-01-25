"use client";

import { BadgeQuestionMark, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	return (
		<nav className="flex flex-row justify-between px-6 md:px-12 lg:px-40 h-20 items-center relative">
			<Tooltip>
				<TooltipTrigger asChild>
					<Link href="/" className="relative">
						<h1 className="font-semibold text-xl md:text-2xl lowercase">matees.net</h1>
						<BadgeQuestionMark className="size-3 text-muted-foreground/50 font-semibold absolute top-0 -right-4" />
					</Link>
				</TooltipTrigger>
				<TooltipContent className="max-w-42 text-center">
					Matees is the name I use online and you may see maytees as well.
				</TooltipContent>
			</Tooltip>

			{/* Desktop Navigation */}
			<ul className="hidden md:flex flex-row items-center gap-6 lg:gap-10">
				<li
					onClick={() => scrollToSection("work")}
					className="text-muted-foreground hover:scale-105 transition-all ease-in-out duration-200 hover:text-foreground hover:cursor-pointer"
				>
					Projects
				</li>
				<li className="text-muted-foreground hover:scale-105 transition-all ease-in-out duration-200 hover:text-foreground hover:cursor-pointer">
					About
				</li>
				<li className="text-muted-foreground hover:scale-105 transition-all ease-in-out duration-200 hover:text-foreground hover:cursor-pointer">
					Contact
				</li>
				<div className="flex flex-row gap-2 items-center">
					<Link
						href={"https://www.linkedin.com/in/maythamajam/"}
						target="_blank"
					>
						<li className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-200 border-2 font-bold hover:border-blue-500 border-white rounded-lg p-1.5">
							<Linkedin className="size-5" />
						</li>
					</Link>
					<Link href={"https://github.com/maytees"} target="_blank">
						<li className="text-white bg-black hover:bg-white hover:text-black transition-all scale-105 ease-in-out duration-200 border-2 font-bold hover:border-black border-white rounded-full p-1.5">
							<Github className="size-5" />
						</li>
					</Link>
				</div>
			</ul>

			{/* Mobile Menu Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden p-2 text-foreground"
				aria-label="Toggle menu"
			>
				{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
			</button>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="absolute top-20 left-0 right-0 bg-background border-b border-border md:hidden z-50">
					<ul className="flex flex-col items-center gap-6 py-8">
						<li
							onClick={() => scrollToSection("work")}
							className="text-muted-foreground hover:text-foreground hover:cursor-pointer text-lg"
						>
							Projects
						</li>
						<li className="text-muted-foreground hover:text-foreground hover:cursor-pointer text-lg">
							About
						</li>
						<li className="text-muted-foreground hover:text-foreground hover:cursor-pointer text-lg">
							Contact
						</li>
						<div className="flex flex-row gap-4 items-center mt-2">
							<Link
								href={"https://www.linkedin.com/in/maythamajam/"}
								target="_blank"
							>
								<div className="text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-200 border-2 font-bold hover:border-blue-500 border-white rounded-lg p-2">
									<Linkedin className="size-6" />
								</div>
							</Link>
							<Link href={"https://github.com/maytees"} target="_blank">
								<div className="text-white bg-black hover:bg-white hover:text-black transition-all ease-in-out duration-200 border-2 font-bold hover:border-black border-white rounded-full p-2">
									<Github className="size-6" />
								</div>
							</Link>
						</div>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
