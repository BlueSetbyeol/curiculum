import Image from "next/image";

export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-[3vh] border-black-600 border-2 w-[99vw] mx-1">
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://www.linkedin.com/in/jessica-couble-5668b545/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/logos/linkedin.png"
					alt="File icon"
					width={16}
					height={16}
				/>
				Reach out
			</a>
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/logos/github-mark-white.svg"
					alt="Window icon"
					width={16}
					height={16}
					className="bg-black rounded-xl"
				/>
				GitHub
			</a>
			<a
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://github.com/BlueSetbyeol"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p>Credit :</p>
				<Image
					aria-hidden
					src="/logos/globe.svg"
					alt="Globe icon"
					width={16}
					height={16}
				/>
				Go to nextjs
			</a>
		</footer>
	);
}
