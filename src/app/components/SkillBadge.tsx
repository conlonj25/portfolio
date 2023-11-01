import { Skill } from '@/types';
import { IconType, IconBaseProps } from 'react-icons';
import {
	SiAmazonaws,
	SiAzuredevops,
	SiDigitalocean,
	SiDocker,
	SiGithub,
	SiGitlab,
	SiJavascript,
	SiJest,
	SiKubernetes,
	SiMaterialdesign,
	SiNextdotjs,
	SiNuke,
	SiPostgresql,
	SiPostman,
	SiPython,
	SiReact,
	SiRubyonrails,
	SiTailwindcss,
	SiTestinglibrary,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

type SkillBadgeProps = {
	skill: Skill;
};

const getIcon = (skill: Skill): IconType => {
	switch (skill) {
		case 'typescript':
			return SiTypescript;
		case 'javascript':
			return SiJavascript;
		case 'python':
			return SiPython;
		case 'java':
			return FaJava;
		case 'react':
			return SiReact;
		case 'tailwind':
			return SiTailwindcss;
		case 'materialUI':
			return SiMaterialdesign;
		case 'next':
			return SiNextdotjs;
		case 'rails':
			return SiRubyonrails;
		case 'postgreSQL':
			return SiPostgresql;
		case 'docker':
			return SiDocker;
		case 'kubernetes':
			return SiKubernetes;
		case 'gitlabCI':
			return SiGitlab;
		case 'githubActions':
			return SiGithub;
		case 'AzureDevops':
			return SiAzuredevops;
		case 'digitalOcean':
			return SiDigitalocean;
		case 'aws':
			return SiAmazonaws;
		case 'vercel':
			return SiVercel;
		case 'jest':
			return SiJest;
		case 'reactTestingLibrary':
			return SiTestinglibrary;
		case 'postman':
			return SiPostman;
		default:
			return SiTypescript;
	}
};

const getText = (skill: Skill): string => {
	switch (skill) {
		case 'typescript':
			return 'Typescript';
		case 'javascript':
			return 'Javascript';
		case 'python':
			return 'Python';
		case 'java':
			return 'Java';
		case 'react':
			return 'React';
		case 'tailwind':
			return 'Tailwind';
		case 'materialUI':
			return 'Material UI';
		case 'next':
			return 'Next JS';
		case 'rails':
			return 'Rails';
		case 'postgreSQL':
			return 'PostgreSQL';
		case 'docker':
			return 'Docker';
		case 'kubernetes':
			return 'Kubernetes';
		case 'gitlabCI':
			return 'Gitlab CI';
		case 'githubActions':
			return 'Github Actions';
		case 'AzureDevops':
			return 'Azure Devops';
		case 'digitalOcean':
			return 'Digital Ocean';
		case 'aws':
			return 'AWS';
		case 'vercel':
			return 'Vercel';
		case 'jest':
			return 'Jest';
		case 'reactTestingLibrary':
			return 'React Testing Library';
		case 'postman':
			return 'Postman';
		default:
			return '';
	}
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
	const jam = SiTypescript();
	return (
		<div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-2 py-1 rounded-md border-2 border-border">
			{getIcon(skill)({
				className: 'text-xl text-primary',
			})}
			<p className="ml-2 text-xl text-foreground">{getText(skill)}</p>
		</div>
	);
};
export default SkillBadge;
