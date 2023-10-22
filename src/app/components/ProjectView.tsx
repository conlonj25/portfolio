import Image from 'next/image';
import SkillBadge from './SkillBadge';
import { ProjectData } from '@/types';

type ProjectViewProps = {
	projectData: ProjectData;
};

const ProjectView = ({ projectData }: ProjectViewProps) => {
	return (
		<div className="bg-card flex-col rounded-md border-2 border-border p-2">
			<Image
				className="rounded-md"
				width={250}
				height={200}
				src={projectData.imageLink}
				alt={'Everest'}
			/>
			<p className="text-lg text-center m-2 text-foreground">
				{projectData.title}
			</p>
			<p className="text-lg text-center m-2 text-primary">
				{projectData.skills}
			</p>
			<p className="text-lg text-center m-2 text-foreground">
				{projectData.description}
			</p>
			<div className="flex justify-around m-2">
				<a href={projectData.codeLink}>
					<button className="bg-secondary px-5 py-2 rounded-md text-secondary-foreground">
						Code
					</button>
				</a>
				<a href={projectData.liveLink}>
					<button className="bg-primary px-5 py-2 rounded-md text-primary-foreground">
						Live
					</button>
				</a>
			</div>
		</div>
	);
};

export default ProjectView;
