import { useSelector } from 'react-redux';

function Footer() {
	const { footerLinks } = useSelector((state) => state.studioTemplate);
	return (
		<footer className='max-w-7xl mx-auto my-10 flex flex-col lg:flex-row justify-start items-center lg:justify-between'>
			<h1>© Oli Harris 2023</h1>
			<div className='flex flex-col lg:flex-row gap-2 md:gap-10'>
				{footerLinks?.map((item, index) => (
					<h1 key={index} className='text-center lg:text-start'>
						{item.link}
					</h1>
				))}
			</div>
		</footer>
	);
}

export default Footer;
