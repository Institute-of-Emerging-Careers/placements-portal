import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface cohort {
	_id: string;
	cohortNumber: number;
	startDate: string;
	endDate: string;
	coursesOffered: string[];
}

export default function NewStudent() {
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [cohorts, setCohorts] = useState<cohort[]>([]);
	const [currentCohort, setCurrentCohort] = useState<cohort>();

	//get all the cohorts the student can be a part of, if a cohort is not yet created, it will need to be created first
	const getCohorts = async () => {
		try {
			const response = await fetch("http://localhost:3020/api/cohort/", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (response.status === 200) {
				const data = await response.json();
				
				setCohorts(data.cohorts);
				setCurrentCohort(data.cohorts[0]);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCohorts();
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const formData = new FormData(e.target);
			const data = Object.fromEntries(formData.entries());
			

			const response = await fetch("http://localhost:3020/api/student/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				const data = await response.json();

				if (data.success) {
					setErrorMsg("");
					setSuccessMsg(data?.message);
				} else {
					setErrorMsg(data?.message);
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="h-screen w-screen bg-white text-xl text-black">
			<Navbar />
			<div className="flex items-center justify-center">
				<p className="text-3xl mt-16">Create New Student 👩‍🎓</p>
			</div>
			<div className="flex items-center justify-center mt-10 w-full bg-white">
				<form
					action=""
					onSubmit={handleSubmit}
					className="p-10 shadow-lg flex flex-col rounded-md bg-white"
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
					<div className="flex flex-col md:flex-row md:space-x-10 ">
						<div className="flex flex-col">
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Name:</span>
								</label>
								<input
									type="text"
									name="name"
									required
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Gender:</span>
								</label>
								<select
									name="gender"
									id="gender"
									className="select bg-white select-bordered"
								>
									<option value="female">Female</option>
									<option value="male">Male</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">
										Province:
									</span>
								</label>
								<input
									type="text"
									name="province"
									required
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">City:</span>
								</label>
								<input
									type="text"
									name="city"
									required
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Email:</span>
								</label>
								<input
									type="text"
									name="email"
									required
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Cohort:</span>
								</label>
								<select
									name="cohort"
									id="cohort"
									className="select select-bordered bg-white"
									value={currentCohort?._id}
									onChange={(e) => {
										const value : string = e.target.value;
										let cohort = cohorts.find(
											(item) => (item._id as unknown as string) === value
										);

										setCurrentCohort(cohort);
									}}
								>
									{cohorts.map((item: any) => {
										return (
											<option key={item._id} value={item._id}>
												{item.cohortNumber}
											</option>
										);
									})}
								</select>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Course:</span>
								</label>
								<select
									name="course"
									id="course"
									className="select select-bordered bg-white"
								>
									{currentCohort?.coursesOffered.map((item: any, index) => {
										return (
											<option key={index} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Phone:</span>
								</label>
								<input
									type="text"
									name="phone"
									required
									className="input text-black bg-white border border-gray-200 text-lg"
								/>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Status:</span>
								</label>
								<select
									name="status"
									id="status"
									className="select select-bordered bg-white"
								>
									<option value="L1: Placed (+50k)">L1: Placed(+50k)</option>
									<option value="L2: Placed (<50k)">
										L2: Placed {"(<50k)"}
									</option>
									<option value="L3: Placed(Unpaid)">L3: Placed(Unpaid)</option>
									<option value="L4: Unemployed">L4: Unemployed</option>
									<option value="L5: Don't want to work">
										L5: Don't want to work
									</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label ">
									<span className="label-text text-black text-lg">Notes:</span>
								</label>
								<textarea
									name="notes"
									className="textarea bg-white text-lg border-gray-200 border"
									rows={4}
								></textarea>
							</div>
							<button className="btn btn-active mt-10 btn-primary text-white hover:scale-105 transition-all bg-blue-900 self-center justify-self-center">
								Create Student!
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
