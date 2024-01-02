import { motion } from 'framer-motion';

function AnimateHeading({ customStyle, children }) {
	return (
		<motion.section
			className={`${customStyle} max-w-3xl mx-auto`}
			initial={{ y: 250, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.4, type: 'tween', stiffness: 120 }}
		>
			{children}
		</motion.section>
	);
}

export default AnimateHeading;
