import Image from "next/image";
import Project from "./UI/Project";

export default function Home() {
	return (
		<div className="grid grid-rows-[35vh_20vh_35vh] grid-cols-[32vw_20vw_32vw] gap-1">
			<article className="border-2 border-grey-500 row-start-1 row-end-3 col-start-1 col-end-2">
				1
			</article>
			<article className="border-2 border-grey-500 row-start-1 row-end-2 col-start-2 col-end-5">
				<Project />
			</article>
			<section className="bg-cyan-700 col-span-1 row-span-1 overflow-hidden">
				<Image
					aria-hidden
					src="/sica-id.jpg"
					alt="File icon"
					width={208.4}
					height={1}
				/>
			</section>
			<article className="border-2 border-grey-500 row-start-3 row-end-4 col-start-1 col-end-3">
				3
			</article>
			<article className="border-2 border-grey-500 row-start-2 row-end-4 col-start-3 col-end-5">
				4
			</article>
		</div>
	);
}
