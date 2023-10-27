import SkillBadge from './SkillBadge';
import skillData from '@/constants/skillData';
import Image from 'next/image';

const Bio = () => {
	return (
		<div className="p-4">
			<p className="text-xl mb-3">
				{"Hi, I'm James."}
				<br />
				{"I'm an Irish web developer based in Barcelona."}
				<br />
				{'Check out some of my projects!'}
				<br />
			</p>
		</div>
	);
};

export default Bio;
