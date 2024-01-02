import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Heading from '../../components/Heading';

function Intro() {
	const { tags } = useSelector((state) => state.studioTemplate);

	return (
		<motion.section
			className='max-w-3xl mx-auto [&>*]:my-10'
			initial={{ y: 250, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.4, type: 'tween', stiffness: 120 }}
		>
			<Heading
				title='A brand and product designer working with clients globally'
				customStyle='text-3xl md:text-5xl lg:text-7xl'
			/>

			<div className='mx-20 flex flex-row justify-center items-center gap-5'>
				<h1 className='font-semibold'>Expertise</h1>
				{tags?.map((item, index) => (
					<h1 key={index} className='btn font-semibold rounded-full'>
						{item}
					</h1>
				))}
			</div>
		</motion.section>
	);
}

export default Intro;
