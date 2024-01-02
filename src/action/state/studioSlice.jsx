import { createSlice } from '@reduxjs/toolkit';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';

import workImg1 from '../../assets/images/workImg1.webp';
import workImg2 from '../../assets/images/workImg2.webp';
import workImg3 from '../../assets/images/workImg3.webp';
import workImg4 from '../../assets/images/workImg4.webp';
import workImg5 from '../../assets/images/workImg5.webp';
import workImg6 from '../../assets/images/workImg6.webp';
import workImg7 from '../../assets/images/workImg7.webp';
import workImg8 from '../../assets/images/workImg8.webp';
import workImg9 from '../../assets/images/workImg9.webp';
import workImg10 from '../../assets/images/workImg10.webp';
import workImg11 from '../../assets/images/workImg11.webp';
import workImg12 from '../../assets/images/workImg12.webp';

const initialState = {
	isActive: 0,
	navLinks: [
		{ link: 'Home', path: '/' },
		{ link: 'Profile', path: '/Profile' },
		{ link: 'Contact', path: '/Contact' }
	],
	footerLinks: [
		{ link: 'Twitter', path: '/' },
		{ link: 'Linkedin', path: '/' },
		{ link: 'Mail', path: '/' }
	],
	tags: ['Branding', 'Product', 'Design Systems'],
	homeImg: [
		{ image: img1 },
		{ image: img2 },
		{ image: img3 },
		{ image: img4 },
		{ image: img5 },
		{ image: img6 },
		{ image: img7 },
		{ image: img8 },
		{ image: img9 },
		{ image: img10 },
		{ image: img11 },
		{ image: img12 }
	],
	aboutImg: [{ image: img13 }, { image: img14 }],
	workExperience: [
		{
			date: '2017 - Present',
			companyName: 'OH.STUDIO',
			position: 'Freelance Designer',
			jobType: 'Director'
		},
		{
			date: '2021 — Present',
			companyName: 'Friendly Studio',
			position: 'Lead Product Designer',
			jobType: 'Freelance'
		},
		{
			date: '2022',
			companyName: 'R/GA',
			position: 'Senior Visual Designer',
			jobType: 'Freelance'
		},
		{
			date: '2021',
			companyName: 'R/GA',
			position: 'Senior Visual Designer',
			jobType: 'Freelance'
		},
		{
			date: '2021',
			companyName: 'AKQA',
			position: 'Senior Designer',
			jobType: 'Freelance'
		},
		{
			date: '2020',
			companyName: 'AKQA',
			position: 'Senior Designer',
			jobType: 'Freelance'
		},
		{
			date: '2019',
			companyName: 'UI Centric',
			position: 'Senior Product Designer',
			jobType: 'Freelance'
		},
		{
			date: '2017',
			companyName: 'Agency TK',
			position: 'Senior Digital Designer',
			jobType: 'Permanent'
		},
		{
			date: '2012',
			companyName: 'Agency TK',
			position: 'Digital Designer',
			jobType: 'Permanent'
		},
		{
			date: '2009',
			companyName: 'Next Level',
			position: 'Digital Designer',
			jobType: 'Permanent'
		},
		{
			date: '2008',
			companyName: 'Next Level',
			position: 'Junior Digital Designer',
			jobType: 'Permanent'
		}
	],
	companiesImage: [
		workImg1,
		workImg2,
		workImg3,
		workImg4,
		workImg5,
		workImg6,
		workImg7,
		workImg8,
		workImg9,
		workImg10,
		workImg11,
		workImg12
	]
};

const dataSlice = createSlice({
	name: 'studio',
	initialState,
	reducers: {
		handleNavbar: (state, action) => {
			if (state.isActive === action.payload) {
				state.isActive = null;
			}
			state.isActive = action.payload;
		}
	}
});

export const { handleNavbar } = dataSlice.actions;
export default dataSlice.reducer;
