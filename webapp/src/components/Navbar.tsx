import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setLoggedIn(true);
		} else {
			router.push("/login");
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		router.push("/login");
	};

	return (
		<div className="w-full bg-white border shadow-black-500 h-20 shadow-sm flex text-black">
			{/* the logo floating left */}
			<div className="self-start justify-self-start flex flex-row items-center justify-between h-full">
				{/* use the next svg here from the public folder*/}
				<img
					src="/next.svg"
					alt="nextjs logo"
					className=" h-20 w-20 p-2 ml-2"
				/>
			</div>

			{/* only show nav and logout logos if the user is logged in */}
			{loggedIn && (
				<>
					<ul className="basis-full flex md:space-x-32 p-2 text-xl justify-center items-center">
						<li className="flex h-full items-center justify-center hover:scale-105 transition-all duration-150 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 512 512"
							>
								<path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
							</svg>
							<p className="p-4">Dashboard</p>
						</li>

						<li className="flex h-full items-center justify-center hover:scale-105 transition-all duration-150 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 640 512"
							>
								<path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
							</svg>
							<p className="p-4">Students Sheet</p>
						</li>
					</ul>

					<div className="self-end justify-self-end flex items-center justify-center h-full hover:scale-105 transition-all duration-150">
						<a
							href=""
							onClick={handleLogout}
							className="flex items-center justify-center h-full"
						>
							<svg
								className="h-1/3 m-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
							</svg>
						</a>
					</div>
				</>
			)}
		</div>
	);
};
