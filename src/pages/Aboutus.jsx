import { useSelector } from 'react-redux';

import GridImage from '../components/GridImage';

import Intro from './About/Intro';
import Info from './About/Info';
import Works from './About/Works';
import Outro from './Home/Outro';

function Aboutus() {
	const { aboutImg } = useSelector((state) => state.studioTemplate);

	return (
		<section>
			<Intro />
			<GridImage data={aboutImg} />
			<Info />
			<Works />
			<Outro />
		</section>
	);
}

export default Aboutus;
