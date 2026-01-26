import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import { Journey } from "@/components/Journey";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { About } from "@/components/Skills";

export default function Page() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Journey />
			<Contact />
		</div>
	);
}
