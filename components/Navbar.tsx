import { BadgeQuestionMark, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
	return (
		<nav className="flex flex-row justify-between px-40 h-20 items-center">
			<Tooltip>
				<TooltipTrigger asChild>
					<Link href="/" className="relative">
						<h1 className="font-semibold text-2xl lowercase">matees.net</h1>
						<BadgeQuestionMark className="size-3 text-muted-foreground/50 font-semibold absolute top-0 -right-4" />
					</Link>
				</TooltipTrigger>
				<TooltipContent className="max-w-42">
					Matees is the name I use online and you may see maytees as well.
				</TooltipContent>
			</Tooltip>

			<ul className="flex flex-row items-center gap-10">
				<li className="text-muted-foreground hover:scale-105 transition-all ease-in-out duration-200 hover:text-foreground hover:cursor-pointer">
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
							<Linkedin />
						</li>
					</Link>
					<Link href={"https://github.com/maytees"} target="_blank">
						<li className="text-white bg-black hover:bg-white hover:text-black transition-all scale-105 ease-in-out duration-200 border-2 font-bold hover:border-black border-white rounded-full p-1.5">
							<Github />
						</li>
					</Link>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
