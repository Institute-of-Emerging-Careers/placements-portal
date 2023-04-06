import { Navbar } from "@/components/Navbar";
import { StudentsCard } from "@/components/StudentsCard";
import { useEffect, useState } from "react";

export default function Student() {
	const [students, setStudents] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const getAllStudents = async () => {
		setLoading(true);
		const response = await fetch("http://localhost:3020/api/student/all", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem("token"),
			},
		});

		const data = await response.json();
		console.log(data);
		
		setStudents(data.students);
		setLoading(false);
	};

	useEffect(() => {
		getAllStudents();
	}, []);

	return (
		<div className="bg-gray-200 h-screen text-black">
			<Navbar />
			<div className=" w-full flex items-center justify-center mt-10 text-4xl ">
				<h1>Students Sheet 📊</h1>
			</div>
			<div className="bg-gray-200 w-full items-center justify-center flex flex-col mt-16">
				{loading ? (
					<div className="w-full items-center justify-center flex flex-col mt-16">
						<h1>Loading...</h1>
						</div>
				) : (
					<div className="w-full items-center justify-center flex flex-col mt-16 space-y-20 mb-10">
						{students.map((student : any) => (
							<StudentsCard
								key={student._id}
								student={student}
							/>
						))}
						</div>
				)}

			</div>
		</div>
	);
}
