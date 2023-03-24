import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CreateNew() {
	return (
		<div className="w-screen h-screen bg-gray-100 flex flex-col text-black text-xl">
			<Navbar />
			<motion.div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
				<InputIsland slug="cohort" />
				<InputIsland slug="student" />
				<InputIsland slug="company" />
			</motion.div>
		</div>
	);
}

interface InputIslandProps {
	slug: string;
}

const InputIsland = ({ slug }: InputIslandProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			drag
			dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
			className={`h-1/4 w-1/4 p-10 m-10 bg-blue-900 rounded-lg shadow-lg flex items-center justify-center text-3xl font-semibold text-white`}
		>
			<Link href={`/new/${slug}`}>
				<div className="">
					{" "}
					{slug.toUpperCase().slice(0, 1) + slug.slice(1)}
				</div>
			</Link>
		</motion.div>
	);
};
