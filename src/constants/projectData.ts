import { ProjectData } from '@/types';

const projectData: ProjectData[] = [
	{
		title: 'James-Conlon.dev',
		skills: 'React JS, Next JS, Tailwind CSS, AWS',
		description: 'View the source for this page',
		imageLink: '/james.png',
		codeLink: 'https://github.com/conlonj25/portfolio',
		liveLink: 'https://www.jamesconlon.dev/',
	},
	{
		title: 'Bookshelf',
		skills: 'Java, JDBC, MySQL',
		description: 'Mock-up web application. Online book retailer.',
		imageLink: '/bookshelf.png',
		codeLink: 'https://github.com/conlonj25/Bookshelf',
		liveLink: undefined,
	},
	{
		title: 'Minecraft Clone',
		skills: 'Javascript, JQuery, OSG.JS',
		description: 'Runs on pure Javascript. Try it!',
		imageLink: '/minecraft.gif',
		codeLink: 'https://github.com/conlonj25/Minecraft_Clone',
		liveLink: 'https://conlonj25.github.io/',
	},
	{
		title: 'PYNQ Crowd Counting',
		skills: 'Python, OpenCV, Xilinx PYNQ',
		description:
			'Computer vision project for real-time crowd counting on edge hardware',
		imageLink: '/cctv.gif',
		codeLink: 'https://github.com/conlonj25/Masters_Project_EE595',
		liveLink: undefined,
	},
	{
		title: 'Ignition SCADA Demo',
		skills: 'Ignition SCADA, Linode',
		description:
			'Industrial SCADA application. Demo project for an engineering firm.',
		imageLink: '/ignition.gif',
		codeLink: undefined,
		liveLink: undefined,
	},
];

export default projectData;
