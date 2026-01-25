import { ArrowDown, Github, Mail } from "lucide-react";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "./ui/button";

const Hero = () => {
	return (
		<div className="px-40 mt-40">
			<h1 className="text-[72px] leading-[1.1] tracking-[-0.03em] font-bold">
				Hello, I&apos;m{" "}
				<span className="font-bold text-primary/70">Maytham Ajam</span>
			</h1>
			<h2 className="text-[20px] leading-[1.3] tracking-[-0.01em] font-semibold text-muted-foreground max-w-3xl">
				I&apos;m 18, a student at George Mason University, programmer for 6
				years, based in the{" "}
				<Link
					className="text-primary underline"
					target="_blank"
					href={"https://en.wikipedia.org/wiki/Washington_metropolitan_area"}
				>
					DM(V)
				</Link>{" "}
				and an aspiring software engineer. I experiment a lot with libraries and
				tools you can see scrolling through{" "}
				<Link
					className="text-primary underline"
					target="_blank"
					href="https://github.com/maytees?tab=repositories"
				>
					my Github
				</Link>
				. Here are some tools I use often -
			</h2>
			<ul className="mt-3 flex flex-row items-center gap-2">
				<li className="px-2 bg-slate-200 max-w-fit border rounded-lg border-slate-400 py-1.5 flex flex-row items-center gap-2">
					<SiNextdotjs className="size-5 text-black" />
					<span className="font-semibold">NextJS</span>
				</li>
				<li className="px-2 bg-sky-200/20 max-w-fit border rounded-lg border-sky-400/20 py-1.5 flex flex-row items-center gap-2">
					<FaReact className="size-5 text-blue-500" />
					<span className="font-semibold">React</span>
				</li>
				<li className="px-2 bg-pink-200/20 max-w-fit border rounded-lg border-pink-400/20 py-1.5 flex flex-row items-center gap-2">
					<PiFigmaLogo className="size-5 text-pink-500" />
					<span className="font-semibold">Figma</span>
				</li>
				<li className="px-2 bg-sky-200/20 max-w-fit border rounded-lg border-blue-400/20 py-1.5 flex flex-row items-center gap-2">
					<SiTailwindcss className="size-5 text-blue-400" />
					<span className="font-semibold">Tailwind 💙</span>
				</li>
			</ul>

			<div className="mt-6 flex flex-row gap-2 items-center">
				<Button asChild>
					<Link
						target="_blank"
						href={"https://github.com/maytees?tab=repositories"}
					>
						<Github className="size-3.5 mt-[0.8]" />
						See Repositories
					</Link>
				</Button>
				<Button variant={"outline"} asChild>
					<Link href={"mailto:matees@matees.net"} target="_blank">
						<Mail className="size-3.5 mt-[0.8]" />
						matees@matees.net
					</Link>
				</Button>
			</div>

			<ArrowDown className="animate-bounce mt-[35dvh] w-full self-center text-muted-foreground" />
		</div>
	);
};

export default Hero;
