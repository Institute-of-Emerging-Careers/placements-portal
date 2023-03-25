import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { atom } from "jotai";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const router = useRouter();

	//check if user is logged in
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			router.push("/");
		}
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:3020/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			localStorage.removeItem("token");
			localStorage.setItem("token", data.token);

			if (data.success) {
				setErrorMsg("");
				setSuccessMsg(data.message);

				//route to dashboard after 1 second
				setTimeout(() => {
					router.push("/");
				}, 1000);
			} else {
				setSuccessMsg("");
				setErrorMsg(data.message);
			}
		} catch (err: any) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col h-screen bg-white text-black">
			<Navbar />

			<div className="self-center items-center mt-16">
				<p className="text-5xl font-bold">Login</p>
			</div>

			<div className="flex flex-col mt-32 self-center items-center text-black">
				<form action="">
					{successMsg && (
						<motion.div 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						drag
						dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
						initial={{ scale: 1.2, opacity: 0 }}
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
					<div className="form-control border shadow-md p-4 rounded-lg">
						<label className="label bg-blue">
							<span className="label-text text-black">Your Email</span>
						</label>
						<input
							type="text"
							placeholder="info@site.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input bg-white w-full border-blue-900"
						/>

						<label className="label bg-blue">
							<span className="label-text text-black">Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="input bg-white w-full border-blue-900"
						/>

						<button
							className="btn btn-primary mt-4 w-1/2 border-blue-900 mx-auto bg-white text-blue-900 hover:bg-blue-900 hover:text-white"
							onClick={handleSubmit}
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
