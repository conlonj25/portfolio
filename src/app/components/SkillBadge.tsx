import { IconType, IconBaseProps } from 'react-icons';
import {
	SiAstro,
	SiGitlab,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTypescript,
} from 'react-icons/si';

type Skill =
	| 'typescript'
	| 'javascript'
	| 'react'
	| 'next'
	| 'astro'
	| 'gitlab';

type SkillBadgeProps = {
	skill: Skill;
};

const getIcon = (skill: Skill): IconType => {
	switch (skill) {
		case 'typescript':
			return SiTypescript;
		case 'javascript':
			return SiJavascript;
		case 'react':
			return SiReact;
		case 'next':
			return SiNextdotjs;
		case 'astro':
			return SiAstro;
		case 'gitlab':
			return SiGitlab;
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
		case 'react':
			return 'React';
		case 'next':
			return 'Next JS';
		case 'astro':
			return 'Astro';
		case 'gitlab':
			return 'Gitlab';
		default:
			return 'Typescript';
	}
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
	const jam = SiTypescript();
	return (
		<div className="flex items-center px-2 py-1 rounded-md border-2 border-border">
			{getIcon(skill)({ className: 'text-xl text-primary' })}
			<p className="ml-2 text-xl text-foreground">{getText(skill)}</p>
		</div>
	);
};
export default SkillBadge;
