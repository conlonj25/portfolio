export type ProjectData = {
	title: string;
	skills: string;
	description: string;
	imageLink: string;
	codeLink: string | undefined;
	liveLink: string | undefined;
};

export type Skill =
	| 'typescript'
	| 'javascript'
	| 'java'
	| 'python'
	| 'mysql'
	| 'nginx'
	| 'react'
	| 'next'
	| 'tailwind';
