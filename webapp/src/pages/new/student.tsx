import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewStudent() {
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	return (
		<div className="h-screen w-screen bg-white text-xl text-black flex flex-col">
			<Navbar />
			<div className="self-center justify-self-center">
				<p className="text-3xl mt-16">Create New Student 👩‍🎓</p>
			</div>
			<div>
            {successMsg && (
						<motion.div 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						drag
						dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
						initial={{ scale: 1.2, opacity: 0 }}
                        onClick={() => {
                            setSuccessMsg("");
                        }}
						animate={{ scale: 1, opacity: 1 }}
						 className="alert alert-success shadow-lg mb-3">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{successMsg}</span>
							</div>
						</motion.div>
					)}
					{errorMsg && (
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							drag
							dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
							initial={{ scale: 1.2, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
                            onClick={() => {
								setErrorMsg("");
							}}
							className="alert alert-error shadow-lg mb-3"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
									/>
								</svg>
								<span>{errorMsg}</span>
							</div>
						</motion.div>
					)}
			</div>
		</div>
	);
}
