import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

const Skills = () => {
	return (
		<div className="bg-pink-400 p-3 rounded-lg">
			<h1 className="text-3xl">Skills</h1>
			<div className="gap-4 p-4 flex-wrap">
				<div className="bg-slate-600 flex flex-none p-2 rounded-md items-center">
					<SiTypescript className="text-xl text-pink-400 ml-2" />
					<p className="text-pink-400 text-xl ml-5">Typescript</p>
				</div>
				<div className="bg-slate-600 flex p-2 rounded-md items-center">
					<SiJavascript className="text-xl text-pink-400 ml-2" />
					<p className="text-pink-400 text-xl ml-5">Javascript</p>
				</div>
				<div className="bg-slate-600 flex p-2 rounded-md items-center">
					<SiReact className="text-xl text-pink-400 ml-2" />
					<p className="text-pink-400 text-xl ml-5">React</p>
				</div>
			</div>
		</div>
	);
};
export default Skills;
