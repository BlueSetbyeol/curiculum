import Image from "next/image";

export default function Project() {
	return (
		<>
			<section className="rounded-xl overflow-hidden w-[10vw]">
				<Image
					aria-hidden
					src="/sap.png"
					alt="File icon"
					width={150}
					height={16}
				/>
			</section>
		</>
	);
}
