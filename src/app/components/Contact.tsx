import SkillBadge from './SkillBadge';
import skillData from '@/constants/skillData';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

const Contact = () => {
	return (
		<div className="p-4">
			<div className="flex gap-4">
				<div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-2 py-1 rounded-md border-2 border-border">
					<SiGithub className="text-xl text-primary" />
					<Link
						href="https://github.com/conlonj25"
						className="ml-2 text-xl text-foreground"
					>
						Github
					</Link>
				</div>
				<div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-2 py-1 rounded-md border-2 border-border">
					<SiLinkedin className="text-xl text-primary" />
					<Link
						href="https://www.linkedin.com/in/conlonj5"
						className="ml-2 text-xl text-foreground"
					>
						LinkedIn
					</Link>
				</div>
				<div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center px-2 py-1 rounded-md border-2 border-border">
					<SiGmail className="text-xl text-primary" />
					<Link
						href="mailto:conlonj25@gmail.com"
						className="ml-2 text-xl text-foreground"
					>
						Mail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
