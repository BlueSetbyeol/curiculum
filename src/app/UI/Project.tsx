"use client";

import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

interface ProjectProps {
	project: number;
	setProject: Dispatch<SetStateAction<number>>;
	projectsList: {
		id: number;
		name: string;
		src: string;
	}[];
}

export default function Project({
	project,
	setProject,
	projectsList,
}: ProjectProps) {
	return (
		<>
			<section className="rounded-xl overflow-hidden w-[50vw] flex flex-row justify-around p-2">
				{project > 0 ? (
					<button type="button" onClick={() => setProject(project - 1)}>
						<img
							src="/logos/before.png"
							alt="previous project"
							className="w-[4vw]"
						/>
					</button>
				) : (
					<p> </p>
				)}
				{project > 0 ? (
					<Image
						aria-hidden
						src={projectsList[project - 1].src}
						alt={projectsList[project - 1].name}
						width={140}
						height={1}
						key={projectsList[project - 1].id}
					/>
				) : (
					<p> </p>
				)}
				<Image
					aria-hidden
					src={projectsList[project].src}
					alt={projectsList[project].name}
					width={140}
					height={1}
					key={projectsList[project].id}
				/>
				<Image
					aria-hidden
					src={projectsList[project + 1].src}
					alt={projectsList[project + 1].name}
					width={140}
					height={1}
					key={projectsList[project + 1].id}
				/>
				{project + 1 <= projectsList.length - 2 ? (
					<button type="button" onClick={() => setProject(project + 1)}>
						<img
							src="/logos/after.png"
							alt="next project"
							className="w-[4vw]"
						/>
					</button>
				) : (
					<p> </p>
				)}
			</section>
		</>
	);
}
