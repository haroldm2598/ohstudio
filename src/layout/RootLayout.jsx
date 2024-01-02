import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

function RootLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default RootLayout;
