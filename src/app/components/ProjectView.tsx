import Image from 'next/image';
import SkillBadge from './SkillBadge';

const ProjectView = () => {
	return (
		<div className="bg-card flex-col rounded-md border-2 border-border p-2">
			<Image
				className="rounded-md"
				width={250}
				height={200}
				src="/everest.jpg"
				alt={'Everest'}
			/>
			<p className="text-lg text-center m-2 text-foreground">
				Minecraft Clone
			</p>
			<p className="text-lg text-center m-2 text-primary">
				Javascript, JQuery, OSG.JS
			</p>
			<p className="text-lg text-center m-2 text-foreground">
				In-browser clone of the popular video game
			</p>
			<div className="flex justify-around m-2">
				<button className="bg-secondary px-5 py-2 rounded-md text-secondary-foreground">
					Code
				</button>
				<button className="bg-primary px-5 py-2 rounded-md text-primary-foreground">
					Live
				</button>
			</div>
		</div>
	);
};

export default ProjectView;
