import { Navbar } from "@/components/Navbar";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function NewCompany() {
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log(e.target.name.value);
		console.log(e.target.linkedIn.value);
		console.log(e.target.website.value);
		console.log(e.target.poc1.value);
		console.log(e.target.poc2.value);
		console.log(e.target.verdict.value);
		console.log(e.target.name.value);
		console.log(e.target.name.value);
		console.log(e.target.name.value);
	};
	return (
		<div className="h-screen w-screen bg-white text-lg text-black">
			<Navbar />
			<div className="flex items-center justify-center">
				<p className="text-3xl mt-10">Create New Company 🏢</p>
			</div>
			<div className="flex items-center justify-center mt-10 bg-white">
				<form
					action=""
					onSubmit={handleSubmit}
					className="p-10 shadow-lg flex flex-col space-y-10 rounded-lg border-gray-200"
				>
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
							className="alert alert-success shadow-lg mb-3"
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
					
					<div className="flex flex-col md:flex-row md:space-x-10">
						<div className="flex flex-col">
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Company Name:
									</span>
								</label>
								<input
									type="text"
									name="name"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Website</span>
								</label>
								<input
									type="text"
									name="website"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Phone Number:
									</span>
								</label>
								<input
									type="number"
									name="phoneNumber"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										LinkedIn:
									</span>
								</label>
								<input
									type="string"
									name="linkedIn"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Contact:
									</span>
								</label>
								<input
									type="string"
									name="contact"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">City:</span>
								</label>
								<input
									type="string"
									name="city"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Point of Contact 1:
									</span>
								</label>
								<input
									type="string"
									name="poc1"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Point of Contact 2:
									</span>
								</label>
								<input
									type="string"
									name="poc2"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>

							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Status:</span>
								</label>
								<input
									type="string"
									name="status"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Verdict</span>
								</label>
								<input
									type="string"
									name="verdict"
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>

							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Notes:</span>
								</label>
								<textarea
									name="notes"
									className="textarea bg-white text-lg border-gray-200 border"
									rows = {4}
								></textarea>
							</div>
						</div>
					</div>

					<button className="btn btn-active btn-primary text-white hover:scale-105 transition-all bg-blue-900 self-center justify-self-center">
						Create Cohort!
					</button>
				</form>
			</div>
		</div>
	);
}
