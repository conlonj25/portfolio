import Image from 'next/image';

const ProjectView = () => {
	return (
		<div className="bg-slate-400 flex-col rounded-lg p-2">
			<Image
				className="rounded-md"
				width={250}
				height={200}
				src="/everest.jpg"
				alt={'Everest'}
			/>
			<p className="text-lg text-center m-2 text-white">
				Minecraft Clone
			</p>
			<p className="text-lg text-center m-2 text-pink-500">
				Javascript, JQuery, OSG.JS
			</p>
			<p className="text-lg text-center m-2 text-white">
				In-browser clone of the popular video game
			</p>
			<div className="flex justify-around m-2">
				<button className="bg-pink-500 px-5 py-2 rounded-md text-white">
					Code
				</button>
				<button className="bg-pink-500 px-5 py-2 rounded-md text-white">
					Live
				</button>
			</div>
		</div>
	);
};

export default ProjectView;
