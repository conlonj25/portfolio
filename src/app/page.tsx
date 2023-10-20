import Image from 'next/image';
import Projects from './components/Projects';

export default function Home() {
	return (
		<>
			<div className="p-5 bg-slate-500 mb-5">
				<div className="text-3xl font-bold text-white">
					James Conlon
				</div>
			</div>
			<div className="container mx-auto">
				<div className="mb-5">
					<Projects />
				</div>
				<div className="mb-5">
					<Projects />
				</div>
			</div>
		</>
	);
}
