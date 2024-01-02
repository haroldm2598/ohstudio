import AnimateHeading from '../../components/AnimateHeading';
import Heading from '../../components/Heading';

function Intro() {
	return (
		<>
			<AnimateHeading customStyle='my-32'>
				<Heading
					title="Hey 👋🏼 I'm Oli"
					customStyle='text-3xl md:text-5xl lg:text-7xl'
				/>
			</AnimateHeading>
		</>
	);
}

export default Intro;
