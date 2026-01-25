import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Page() {
	return (
		<div className="pb-[500vh]">
			<Navbar />
			<Hero />
			<Projects />
		</div>
	);
}
