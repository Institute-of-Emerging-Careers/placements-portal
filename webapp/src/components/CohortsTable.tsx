import { useEffect, useState } from "react";
import dateformat from "dateformat";

interface cohort {
	_id: string;
	cohortNumber: number;
	startDate: string;
	endDate: string;
	coursesOffered: string[];
}

export const CohortsTable = () => {
	const [cohorts, setCohorts] = useState<cohort[]>([]);

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
			}
		} catch (err) {
			console.log(err);
		}
	};

	const removeCohort = async (id: string) => {
		try {
			const response = await fetch(`http://localhost:3020/api/cohort/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			const data = await response.json();
			if (data.success) {
				setCohorts(cohorts.filter((cohort) => cohort._id !== id));
			}
			alert(data.message);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCohorts();
	}, []);

	return (
		<div className="overflow-x-auto rounded-md" data-theme="light">
			<table className="table table-zebra w-full">
				{/* head */}
				<thead>
					<tr>
						<th>Cohort Number</th>
						<th>Start date</th>
						<th>End Date</th>
						<th>Courses</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{cohorts.map((cohort) => {
						return (
							<tr key={cohort._id}>
								<td>{cohort.cohortNumber}</td>
								<td>{dateformat(cohort.startDate, "dddd, mmmm dS, yyyy")}</td>
								<td>{dateformat(cohort.endDate, "dddd, mmmm dS, yyyy")}</td>
								<td>{cohort.coursesOffered.flat().join(", ")}</td>
								<th
									className="cursor-pointer"
									onClick={() => removeCohort(cohort._id)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-3 hover:fill-red-500 transition-all"
										viewBox="0 0 384 512"
									>
										<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
									</svg>
								</th>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
