import { ProjectData } from '@/types';

const projectData: ProjectData[] = [
	{
		title: 'James-Conlon.dev',
		skills: 'React JS, Next JS, Tailwind CSS, AWS',
		description:
			'This website is actually a full-blown React application running on Next JS and deployed on AWS',
		imageLink: '/james.gif',
		codeLink: 'https://github.com/conlonj25/james-conlon-dev',
		liveLink: 'https://www.james-conlon.dev/',
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
		description: 'In-browser clone of the popular video game',
		imageLink: '/minecraft.gif',
		codeLink: 'https://github.com/conlonj25/Minecraft_Clone',
		liveLink: 'https://conlonj25.github.io/',
	},
	{
		title: 'PYNQ Crowd Counting',
		skills: 'Python, OpenCV, Xilinx PYNQ',
		description:
			'Hardware application designed to count people on CCTV footage in real-time',
		imageLink: '/cctv.gif',
		codeLink: 'https://github.com/conlonj25/Masters_Project_EE595',
		liveLink: undefined,
	},
	{
		title: 'Igntion SCADA Demo',
		skills: 'Ignition SCADA, Linode',
		description:
			'Industrial SCADA application. This is a demo project for an engineering firm. Deployed on Linode.',
		imageLink: '/ignition.gif',
		codeLink: undefined,
		liveLink:
			'http://178.79.174.57:8088/data/perspective/client/SL_Controls_Demo/',
	},
];

export default projectData;
