import Image from 'next/image';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Bio from './components/Bio';

import { ModeToggle } from './components/ModeToggle';
import Contact from './components/Contact';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className="p-5 bg-secondary mb-5 flex justify-between">
				<div className="text-3xl">James Conlon</div>
				<ModeToggle />
			</div>

			<div className="container mx-auto">
				<div className="flex flex-row justify-around gap-4 mb-5">
					<div>
						<Bio />
					</div>
					<div className="flex items-center">
						<Contact />
					</div>
				</div>
				<div className="mb-10">
					<Skills />
				</div>
				<div className="mb-10">
					<Projects />
				</div>
			</div>
		</>
	);
}
