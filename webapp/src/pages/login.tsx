import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { atom } from "jotai";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

			alert(data.message);

			router.push("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col h-screen bg-white text-black">
			<Navbar />

			<div className="flex h-full items-center justify-center text-black">
				<form action="">
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
