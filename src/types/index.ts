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
	| 'python'
	| 'java'
	| 'react'
	| 'tailwind'
	| 'materialUI'
	| 'next'
	| 'rails'
	| 'postgreSQL'
	| 'docker'
	| 'kubernetes'
	| 'gitlabCI'
	| 'githubActions'
	| 'AzureDevops'
	| 'digitalOcean'
	| 'aws'
	| 'vercel'
	| 'jest'
	| 'reactTestingLibrary'
	| 'postman';
