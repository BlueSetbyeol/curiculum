"use Client";

import type { Dispatch, SetStateAction } from "react";

interface ProjectProps {
	project: number;
	projectsList: {
		id: number;
		name: string;
		src: string;
	}[];
}

export default function ProjectDetails({
	project,
	projectsList,
}: ProjectProps) {
	return <></>;
}
