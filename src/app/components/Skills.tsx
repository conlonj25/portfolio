import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import SkillBadge from './SkillBadge';

const Skills = () => {
	return (
		<div className="p-4 rounded-md border-2 border-border">
			<h1 className="text-3xl mb-3">Skills</h1>
			<div className="flex flex-wrap gap-2">
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'gitlab'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'astro'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'next'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'astro'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'gitlab'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
				<SkillBadge skill={'typescript'} />
			</div>
		</div>
	);
};
export default Skills;
