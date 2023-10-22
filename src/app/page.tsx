import Image from 'next/image';
import Projects from './components/Projects';
import Skills from './components/Skills';

import { ModeToggle } from './components/ModeToggle';
import Shields from './components/Shields';

export default function Home() {
	return (
		<>
			<div className="p-5 bg-secondary mb-5 flex justify-between">
				<div className="text-3xl font-bod">James Conlon</div>
				<ModeToggle />
			</div>

			<div className="container mx-auto">
				<div className="mb-5">
					<Skills />
				</div>
				<div className="mb-5">
					<Shields />
				</div>
				<div className="mb-5">
					<Projects />
				</div>
			</div>
		</>
	);
}
