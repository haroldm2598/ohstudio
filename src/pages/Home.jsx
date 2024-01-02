import { useSelector } from 'react-redux';
import GridImage from '../components/GridImage';
import Intro from './Home/Intro';
import Outro from './Home/Outro';

function Home() {
	const { homeImg } = useSelector((state) => state.studioTemplate);

	return (
		<section>
			<Intro />
			<GridImage data={homeImg} />
			<Outro />
		</section>
	);
}

export default Home;
