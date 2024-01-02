import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';

import './assets/styles/main.scss';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='Profile' element={<Aboutus />} />
				<Route path='Contact' element={<Contact />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
