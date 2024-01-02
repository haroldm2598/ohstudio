import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function AnimateUp({ containerSize, children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<section ref={ref}>
			<motion.section
				className={containerSize}
				variants={{
					hidden: { y: 250, opacity: 0 },
					visible: { y: 0, opacity: 1 }
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.4, delay: 0.25 }}
			>
				{children}
			</motion.section>
		</section>
	);
}

export default AnimateUp;
