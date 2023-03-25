import { Navbar } from "@/components/Navbar";
import { FormEvent, FormEventHandler, useState } from "react";

export default function NewCohort() {
	const [cohortNumber, setCohortNumber] = useState("");
	const [cohortStartDate, setCohortStartDate] = useState("");
	const [cohortEndDate, setCohortEndDate] = useState("");

	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:3020/api/cohort/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({
					cohortNumber: cohortNumber,
					cohortStartDate: cohortStartDate,
					cohortEndDate: cohortEndDate,
				}),
			});

            console.log(response);
            
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="h-screen w-screen bg-white text-xl text-black flex flex-col">
			<Navbar />
			<div className="self-center justify-self-center">
				<p className="text-3xl mt-16">Create New Cohort 📅</p>
			</div>
			<div className="flex items-center justify-center self-center mt-16">
				{successMsg && (
					<div className="alert alert-success shadow-lg mb-3">
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
					</div>
				)}
				{errorMsg && (
					<div className="alert alert-error shadow-lg mb-3">
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
					</div>
				)}
				<form
					action=""
					onSubmit={handleSubmit}
					className="p-10 shadow-lg flex flex-col space-y-10"
				>
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
							className="input text-black bg-white border border-gray-200 text-xl"
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
							<span className="label-text text-black text-xl">End Date:</span>
						</label>

						<input
							type="date"
							value={cohortEndDate}
							onChange={(e) => setCohortEndDate(e.target.value)}
							className="input text-black bg-white border border-gray-200 text-xl"
						/>
					</div>

					<button className="btn btn-active btn-primary text-white hover:scale-105 transition-all bg-blue-900">
						Create Cohort!
					</button>
				</form>
			</div>
		</div>
	);
}
