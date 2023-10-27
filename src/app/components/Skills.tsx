import SkillBadge from './SkillBadge';
import skillData from '@/constants/skillData';
import Image from 'next/image';

const Skills = () => {
	return (
		<div>
			<h1 className="text-3xl mb-5">I use...</h1>
			<div className="flex flex-wrap gap-2">
				{skillData.map((skill, i) => {
					return <SkillBadge key={`skill-${i}`} skill={skill} />;
				})}
			</div>
		</div>
	);
};
export default Skills;
