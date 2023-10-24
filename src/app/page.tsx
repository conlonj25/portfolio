import Image from 'next/image';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Bio from './components/Bio';

import { ModeToggle } from './components/ModeToggle';
import Contact from './components/Contact';

export default function Home() {
	return (
		<>
			<div className="p-5 bg-secondary mb-5 flex justify-between">
				<div className="text-3xl font-bod">James Conlon</div>
				<ModeToggle />
			</div>

			<div className="container mx-auto">
				<div className="flex flex-row items-stretch gap-4">
					<div className="mb-5">
						<Bio />
					</div>
					<div className="mb-5">
						<Contact />
					</div>
				</div>
				<div className="mb-5">
					<Skills />
				</div>
				<div className="mb-5">
					<Projects />
				</div>
			</div>
		</>
	);
}
