import { motion } from 'framer-motion';

function GridImage({ data }) {
	return (
		<motion.section
			className='max-w-7xl mx-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5'
			initial={{ y: 250, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.6, type: 'tween', stiffness: 120 }}
		>
			{data?.map((item, index) => (
				<div key={index} className='h-[28rem] w-full'>
					<img
						src={item.image}
						alt='Photo'
						className='h-full w-full object-cover rounded-lg'
					/>
				</div>
			))}
		</motion.section>
	);
}

export default GridImage;
