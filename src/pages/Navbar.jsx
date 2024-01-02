import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleNavbar } from '../action/state/studioSlice';

function Navbar() {
	const { navLinks, isActive } = useSelector((state) => state.studioTemplate);
	const dispatch = useDispatch();

	return (
		// polish btn of active
		<header className='nav max-w-xs mx-auto my-10 p-1 rounded-full'>
			<ul className='flex flex-row items-center justify-between'>
				{navLinks?.map((item, index) => (
					<li
						key={index}
						className={`${
							isActive === index ? 'nav__active' : ''
						} nav__items font-semibold rounded-full`}
						onClick={() => dispatch(handleNavbar(index))}
					>
						<NavLink to={item.path}>{item.link}</NavLink>
					</li>
				))}
			</ul>
		</header>
	);
}

export default Navbar;
