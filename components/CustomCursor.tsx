"use client";

import { motion } from "motion/react";
import useMousePosition from "@/lib/hooks/usemousepos";

const CustomCursor = () => {
	const { x, y } = useMousePosition();

	return (
		<motion.div
			className="fixed animate-caret-blink font-mono font-extralight tracking-widest text-muted-foreground pointer-events-none z-99999"
			// Use animate prop to move the cursor based on mouse position
			// Subtract half of the cursor's size (e.g., 16px for a 32x32 cursor)
			// so the center of the cursor aligns with the mouse position.
			animate={{ x: x + 50, y: y + 50 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 100,
				mass: 1,
			}}
		>
			hello world
		</motion.div>
	);
};

export default CustomCursor;
