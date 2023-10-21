import Image from 'next/image';
import Projects from './components/Projects';
import Skills from './components/Skills';

import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/ModeToggle';

export default function Home() {
	return (
		<>
			<div className="p-5 bg-slate-500 mb-5 flex justify-between">
				<div className="text-3xl font-bold text-white">
					James Conlon
				</div>
				<ModeToggle />
			</div>

			<div>
				<Button className="bg-warning text-warning-foreground">
					Click me
				</Button>
			</div>

			<div className="container mx-auto">
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
