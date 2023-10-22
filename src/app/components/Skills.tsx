import SkillBadge from './SkillBadge';
import skillData from '@/constants/skillData';
import Image from 'next/image';

const Skills = () => {
	return (
		<div className="p-4 rounded-md border-2 border-border">
			<h1 className="text-3xl mb-3">Skills</h1>
			<div className="flex flex-wrap gap-2">
				{skillData.map((skill, i) => {
					return <SkillBadge key={`skill-${i}`} skill={skill} />;
				})}
			</div>
		</div>
	);
};
export default Skills;
