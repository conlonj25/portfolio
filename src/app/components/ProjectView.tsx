import Image from 'next/image';
import SkillBadge from './SkillBadge';
import { ProjectData } from '@/types';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type ProjectViewProps = {
	projectData: ProjectData;
};

const ProjectView = ({ projectData }: ProjectViewProps) => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="mb-3">{projectData.title}</CardTitle>
					<CardDescription>
						{projectData.description}
						<p className="text-primary my-1">
							{projectData.skills}
						</p>
					</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center">
					<Image
						className="rounded-md"
						width={250}
						height={200}
						src={projectData.imageLink}
						alt={'Everest'}
					/>
				</CardContent>
				<CardFooter className="flex justify-around m-2">
					{projectData.codeLink && (
						<a href={projectData.codeLink}>
							<button className="bg-secondary px-5 py-2 rounded-md text-secondary-foreground">
								Code
							</button>
						</a>
					)}
					{projectData.liveLink && (
						<a href={projectData.liveLink}>
							<button className="bg-primary px-5 py-2 rounded-md text-primary-foreground">
								Live
							</button>
						</a>
					)}
				</CardFooter>
			</Card>
		</>
	);
};

export default ProjectView;
