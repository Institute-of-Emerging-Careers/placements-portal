import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CreateNew() {
	return (
		<div className="w-screen h-screen bg-gray-100 flex flex-col text-black text-xl">
			<Navbar />
			<div className="flex flex-col h-full w-full items-center justify-center">
				<div className="w-full basis-1/6 flex items-center justify-center ">
					<p className="text-5xl font-bold md:mt-10 text-black">
						Create new...
					</p>
				</div>
				<motion.div className="w-full h-full flex flex-col md:flex-row items-center justify-center basis-5/6 md:-mt-32  space-y-10 md:space-y-0 md:space-x-10">
					<InputIsland slug="cohort" />
					<InputIsland slug="student" />
					<InputIsland slug="company" />
				</motion.div>
			</div>
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
			initial={{ scale: 1.2, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			className={`h-1/4 w-1/2 md:w-1/4  bg-blue-900 rounded-lg shadow-lg text-3xl font-semibold text-white`}
		>
			<Link
				href={`/new/${slug}`}
				className="w-full h-full flex items-center justify-center"
			>
				<div className="">{slug.toUpperCase().slice(0, 1) + slug.slice(1)}</div>
			</Link>
		</motion.div>
	);
};
