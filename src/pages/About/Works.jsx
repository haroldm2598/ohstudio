import { useSelector } from 'react-redux';
import AnimateUp from '../../components/AnimateUp';
import Heading from '../../components/Heading';

function Works() {
	const { workExperience, companiesImage } = useSelector(
		(state) => state.studioTemplate
	);

	return (
		<section>
			<AnimateUp>
				<div className='flex justify-center'>
					<h1 className='btn font-semibold rounded-full'>Experience</h1>
				</div>
				<Heading title="Where I've worked" customStyle='text-3xl' />
			</AnimateUp>

			<AnimateUp containerSize='max-w-6xl mx-auto my-20 grid grid-cols-2 lg:grid-cols-3 place-items-center text-center gap-5'>
				{workExperience?.map((item, index) => (
					<div key={index} className='[&>*]:mb-4'>
						<h2 className='font-light opacity-80'>{item.date}</h2>
						<h1 className='text-2xl font-medium'>{item.companyName}</h1>
						<h2 className='font-light opacity-80'>{item.position}</h2>
						<h2 className='btn font-medium rounded-full'>{item.jobType}</h2>
					</div>
				))}
			</AnimateUp>

			<AnimateUp>
				<div className='flex justify-center'>
					<h1 className='btn font-semibold rounded-full'>Experience</h1>
				</div>
				<Heading title="Who I've worked with" customStyle='text-3xl' />
			</AnimateUp>

			<AnimateUp containerSize='max-w-6xl mx-auto my-20 grid grid-cols-2 lg:grid-cols-4 place-items-center gap-5'>
				{companiesImage?.map((item, index) => (
					<div key={index}>
						<img src={item} alt='company logo' className='grayscale' />
					</div>
				))}
			</AnimateUp>
		</section>
	);
}

export default Works;
