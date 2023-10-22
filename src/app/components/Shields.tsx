import Image from 'next/image';

const Shields = () => {
	return (
		<div className="p-4 rounded-md border-2 border-border">
			<h1 className="text-3xl mb-3">Shields</h1>
			<div className="flex flex-wrap gap-2">
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={
						'https://img.shields.io/badge/Typescript-grey?logo=typescript'
					}
					alt={'Everest'}
				/>
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={
						'https://img.shields.io/badge/Javascript-grey?logo=javascript'
					}
					alt={'Everest'}
				/>
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={'https://img.shields.io/badge/Astro-grey?logo=astro'}
					alt={'Everest'}
				/>
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={'https://img.shields.io/badge/Python-grey?logo=python'}
					alt={'Everest'}
				/>
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={'https://img.shields.io/badge/MySQL-grey?logo=mysql'}
					alt={'Everest'}
				/>
				<Image
					className="rounded-md"
					width={80}
					height={10}
					src={'https://img.shields.io/badge/Nginx-grey?logo=nginx'}
					alt={'Everest'}
				/>
			</div>
		</div>
	);
};
export default Shields;
