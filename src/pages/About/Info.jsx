import AnimateUp from '../../components/AnimateUp';
import Heading from '../../components/Heading';

function Info() {
	return (
		<AnimateUp containerSize='my-20 [&>*]:my-10'>
			<div className='flex justify-center'>
				<h1 className='btn font-semibold rounded-full'>About</h1>
			</div>
			<Heading
				title='A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.'
				customStyle='max-w-xl mx-auto text-3xl'
			/>
		</AnimateUp>
	);
}

export default Info;
