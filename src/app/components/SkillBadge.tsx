import { Skill } from '@/types';
import { IconType, IconBaseProps } from 'react-icons';
import {
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiNginx,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

type SkillBadgeProps = {
	skill: Skill;
};

const getIcon = (skill: Skill): IconType => {
	switch (skill) {
		case 'typescript':
			return SiTypescript;
		case 'javascript':
			return SiJavascript;
		case 'java':
			return FaJava;
		case 'python':
			return SiPython;
		case 'mysql':
			return SiMysql;
		case 'nginx':
			return SiNginx;
		case 'react':
			return SiReact;
		case 'next':
			return SiNextdotjs;
		case 'tailwind':
			return SiTailwindcss;
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
		case 'java':
			return 'Java';
		case 'python':
			return 'Python';
		case 'mysql':
			return 'MySQL';
		case 'nginx':
			return 'Nginx';
		case 'react':
			return 'React';
		case 'next':
			return 'Next JS';
		case 'tailwind':
			return 'Tailwind CSS';
		default:
			return 'Typescript';
	}
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
	const jam = SiTypescript();
	return (
		// transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
		<div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-2 py-1 rounded-md border-2 border-border">
			{getIcon(skill)({
				className: 'text-xl text-primary',
			})}
			<p className="ml-2 text-xl text-foreground">{getText(skill)}</p>
		</div>
	);
};
export default SkillBadge;
