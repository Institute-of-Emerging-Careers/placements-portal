export const StudentsCard = (props: any) => {
	console.log(props.student);
	
	return (
		<div className="bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg mx-20 p-4">
			<div
				id="header"
				className="flex flex-row items-center justify-center space-x-6"
			>
				<div id="header-image">
					<img
						src="next.svg"
						alt="header image"
						className="h-32 w-32 rounded-full border border-blue-900 p-2"
					/>
				</div>
				<div id="header-data" className="flex flex-col space-y-2">
					<p className="whitespace-nowrap text-2xl">{props.student.name}</p>

					<div className="flex flex-row space-x-4 ">
						{props.student.gender === "female" ? <svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-4"
							viewBox="0 0 320 512"
						>
							<path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
						</svg>
						:
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-4"
							viewBox="0 0 320 512"
						>
							<path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
						</svg>}
						<p className="whitespace-nowrap bg-green-700 rounded-full px-4 text-white">
							{(props.student.status).split(":")[0]}
						</p>
					</div>

					<div className="flex flex-row space-x-4 ">
						<p className="whitespace-nowrap bg-red-700 rounded-full px-1 text-white mr-4">
							C {props.student.cohort?.cohortNumber}
						</p>

						<p className="whitespace-nowrap bg-purple-700 rounded-full px-4 text-white">
							{props.student.course}
						</p>
					</div>

					<div className="flex flex-row space-x-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-4"
							viewBox="0 0 384 512"
						>
							<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
						</svg>
						<p className="whitespace-nowrap px-4">{props.student.city + ", " + props.student.province}</p>
					</div>
				</div>
			</div>
			<div
				id="details"
				className="grid grid-cols-4 space-x-6"
				data-theme="light"
			>
				<div className="p-10 basis-full space-x-4 flex" id="employment">
					<div id="left" className="flex flex-col">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 512 512"
						>
							<path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
						</svg>
						{/* <hr className="h-full bg-blue-900"/> */}
						<div className="h-full w-full self-center flex items-center justify-center ">
							<div className="mt-4 w-px border-l-2 border-black h-full"></div>
						</div>
					</div>
					<div id="right" className="flex flex-col space-y-6">
						<p className="flex space-x-2 text-xl">Employment</p>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 512 512"
							>
								<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
							</svg>
							<p className="whitespace-nowrap">{props.student.status}</p>
						</div>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 384 512"
							>
								<path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
							</svg>
							<p className="whitespace-nowrap">{props.student?.placements[0]?.company?.name || "Company name"}</p>
						</div>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 320 512"
							>
								<path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
							</svg>
							<p className="whitespace-nowrap">{props.student?.placements[0]?.salary || "100,000"}</p>
						</div>
					</div>
				</div>

				<div className="p-10 basis-full space-x-4 flex" id="lec-status">
					<div id="left" className="flex flex-col">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 576 512"
						>
							<path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
						</svg>
						<div className="h-full w-full self-center flex items-center justify-center ">
							<div className="mt-4 w-px border-l-2 border-black h-full"></div>
						</div>
					</div>
					<div id="right" className="flex flex-col space-y-6">
						<p className="flex space-x-2 text-xl">LEC Status</p>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 512 512"
							>
								<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
							</svg>

							<p className="whitespace-nowrap">{props.student.lecAccount.accountClosed? "Account Closed" : props.student.lecAccount.accountActive ? "Paying" : "Not Paying"}</p>
						</div>
						<div className="flex flex-col space-y-2">
							<p className="whitespace-nowrap">Total LEC Due: {props.student.lecAccount.pledgedAmount}</p>
							<p className="whitespace-nowrap">Total LEC Paid: {props.student.lecAccount.paidAmount}</p>
							<p className="whitespace-nowrap">Total LEC Left: {props.student.lecAccount.pledgedAmount - props.student.lecAccount.paidAmount}</p>
						</div>
					</div>
				</div>

				<div className="p-10 basis-full space-x-4 flex" id="notes">
					<div id="left" className="flex flex-col">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 384 512"
						>
							<path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
						</svg>
						<div className="h-full w-full self-center flex items-center justify-center ">
							<div className="mt-4 w-px border-l-2 border-black h-full"></div>
						</div>
					</div>
					<div id="right" className="flex flex-col space-y-6">
						<div className="flex">
							<p className="flex space-x-2 text-xl">Notes</p>
							<div className="w-full flex items-center justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 justify-self-end"
									viewBox="0 0 512 512"
								>
									<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
								</svg>
							</div>
						</div>

						<div className="flex flex-row space-x-4 h-full">
							<p className="h-32 overflow-y-auto ">
								{props.student.notes}
							</p>
						</div>
					</div>
				</div>

				<div className="p-10 basis-full space-x-4 flex" id="contact">
					<div id="left" className="flex flex-col">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 576 512"
						>
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
						</svg>
						<div className="h-full w-full self-center flex items-center justify-center ">
							<div className="mt-4 w-px border-l-2 border-black h-full"></div>
						</div>
					</div>
					<div id="right" className="flex flex-col space-y-6">
						<p className="flex space-x-2 text-xl">Contact Details</p>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="h-6 w-6"
							>
								<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
							</svg>
							<p className="whitespace-nowrap">{props.student.phone}</p>
						</div>
						<div className="flex flex-row space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="h-6 w-6"
							>
								<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
							</svg>
							<a
								href="mailto:abdul6wahab6@gmail.com"
								className="whitespace-nowrap"
							>
								{props.student.email}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
