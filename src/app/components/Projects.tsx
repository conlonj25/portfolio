import ProjectView from './ProjectView';
import projectData from '../../constants/projectData';

const Projects = () => {
	return (
		<div className="bg-card p-3 rounded-md border-2 border-border">
			<h1 className="text-3xl mv-3">Projects</h1>
			<div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				{projectData.map((projectData, i) => {
					return (
						<ProjectView
							key={`project-${i}`}
							projectData={projectData}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
