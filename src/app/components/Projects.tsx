const Projects = () => {
	return (
		<div className="bg-pink-400 p-3 rounded-lg">
			<h1 className="text-3xl">Projects</h1>
			<div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				<img className="aspect-square" src="/everest.jpg" />
				<img className="aspect-square" src="/everest.jpg" />
				<img className="aspect-square" src="/everest.jpg" />
				<img className="aspect-square" src="/everest.jpg" />
				<img className="aspect-square" src="/everest.jpg" />
				<img className="aspect-square" src="/everest.jpg" />
			</div>
		</div>
	);
};

export default Projects;
