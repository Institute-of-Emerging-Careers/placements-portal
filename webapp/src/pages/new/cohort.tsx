import { Navbar } from "@/components/Navbar";
import { CohortsTable } from "@/components/CohortsTable";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function NewCohort() {
	const [cohortNumber, setCohortNumber] = useState("");
	const [cohortStartDate, setCohortStartDate] = useState("");
	const [cohortEndDate, setCohortEndDate] = useState("");
	const [cohortCourse, setCohortCourse] = useState<string>("");
	const [cohortCourses, setCohortCourses] = useState<string[]>([]);

	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			const response = await fetch("http://localhost:3020/api/cohort/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({
					cohortNumber: cohortNumber,
					startDate: cohortStartDate,
					endDate: cohortEndDate,
					coursesOffered: cohortCourses,
				}),
			});

			const data = await response.json();

			if (data.success) {
				setErrorMsg("");
				setSuccessMsg(data.message);
			} else {
				setErrorMsg(data.message);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const addCohortCourse = async (e: FormEvent) => {
		e.preventDefault();
		e.stopPropagation();

		setCohortCourses([...cohortCourses, cohortCourse]);
		setCohortCourse("");
	};

	const removeCourse = (course: string) => {
		setCohortCourses(cohortCourses.filter((c) => c !== course));
	};

	return (
		<>
			<input
				type="checkbox"
				id="my-modal-5"
				className="modal-toggle"
				data-theme="light"
			/>
			<div className="modal" data-theme="light">
				<div className="modal-box w-full max-w-7xl">
					<CohortsTable />
					<div className="modal-action" data-theme="light">
						<label htmlFor="my-modal-5" className="btn btn-accent">
							Close
						</label>
					</div>
				</div>
			</div>

			<div className="h-screen w-screen bg-white text-xl text-black">
				<Navbar />
				<div className="self-center justify-self-center flex flex-col items-center space-y-6">
					<p className="text-3xl mt-16">Create New Cohort 📅</p>
					<label htmlFor="my-modal-5" className="btn btn-accent btn-xs">
						Show current cohorts
					</label>
				</div>
				<motion.div
					initial={{ scale: 0.5, opacity: 0 }}
					animate={{
						scale: 1,
						opacity: 1,
						transition: {
							duration: 0.2,
						},
					}}
					className="flex flex-col items-center mt-16 bg-white"
				>
					<div className="flex flex-col items-center shadow-lg rounded-md p-10">
						{successMsg && (
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								drag
								dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
								initial={{ scale: 1.2, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								onClick={() => {
									setSuccessMsg("");
								}}
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
								className="alert alert-error shadow-lg mb-3"
								onClick={() => {
									setErrorMsg("");
								}}
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
						<div className="flex flex-col md:flex-row items-center justify-center ">
							<form
								id="main-form"
								action=""
								onSubmit={handleSubmit}
								className="flex flex-col space-y-10 p-5"
							>
								<div>
									<div className="form-control">
										<label className="label ">
											<span className="label-text text-black text-xl">
												Cohort Number
											</span>
										</label>
										<input
											type="number"
											value={cohortNumber}
											onChange={(e) => setCohortNumber(e.target.value)}
											className="input text-black bg-white border border-gray-200 text-xl appearance-none"
										/>
									</div>
									<div className="form-control">
										<label className="label ">
											<span className="label-text text-black text-xl">
												{" "}
												Start Date:
											</span>
										</label>
										<input
											type="date"
											value={cohortStartDate}
											onChange={(e) => setCohortStartDate(e.target.value)}
											className="input text-black bg-white border border-gray-200 text-xl"
										/>
									</div>
									<div className="form-control">
										<label className="label ">
											<span className="label-text text-black text-xl">
												End Date:
											</span>
										</label>
										<input
											type="date"
											value={cohortEndDate}
											onChange={(e) => setCohortEndDate(e.target.value)}
											className="input text-black bg-white border border-gray-200 text-xl"
										/>
									</div>
								</div>
							</form>
							<form
								action=""
								onSubmit={addCohortCourse}
								className="flex flex-col space-y-2 p-5 h-full w-full"
							>
								<div className="form-control">
									<label className="label ">
										<span className="label-text text-black text-xl">
											Courses Offered
										</span>
									</label>
									<input
										type="text"
										value={cohortCourse}
										onChange={(e) => setCohortCourse(e.target.value)}
										className="input text-black bg-white border border-gray-200 text-xl appearance-none"
									/>
								</div>
								<table className="table table-zebra" data-theme="light">
									<tbody className="bg-white">
										{cohortCourses.map((course, index) => {
											return (
												<tr className="">
													<th
														className="cursor-pointer"
														onClick={() => removeCourse(course)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="w-3 hover:fill-red-500 transition-all"
															viewBox="0 0 384 512"
														>
															<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
														</svg>
													</th>
													<td key={index}>{course}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</form>
						</div>
						<button
							form="main-form"
							className="btn btn-accent self-center text-white hover:scale-105 transition-all"
						>
							Create Cohort!
						</button>
					</div>
				</motion.div>
			</div>
		</>
	);
}
