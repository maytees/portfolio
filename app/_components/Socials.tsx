import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <div className="flex flex-row gap-8 w-full justify-center">
        <Button asChild variant={"outline"}>
          <Link href={"https://github.com/maytees"} target="_blank">
            <Github className="hover:opacity-80 justify-start hover:scale-105 transition-all duration-150 ease-in-ou hover:cursor-pointer" />
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link
            href={"https://www.linkedin.com/in/maythamajam/"}
            target="_blank"
          >
            <Linkedin className="hover:opacity-80 hover:scale-105 transition-all duration-150 ease-in-out hover:cursor-pointer " />
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"https://www.instagram.com/maytees21"} target="_blank">
            <Instagram className="hover:opacity-80 hover:scale-105 transition-all duration-150 ease-in-out hover:cursor-pointer " />
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={"mailto:maythamajam@gmail.com"} target="_blank">
            <Mail className="hover:opacity-80 hover:scale-105 transition-all duration-150 ease-in-out hover:cursor-pointer " />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Socials;
