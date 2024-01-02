import AnimateUp from '../../components/AnimateUp';

function Outro({ customStyle }) {
	return (
		<AnimateUp containerSize='max-w-3xl mx-auto my-32 [&>*]:my-2'>
			<h1 className={`${customStyle} text-center text-4xl font-semibold`}>
				Lets work together.
			</h1>
			<h1
				className={`${customStyle} outroHeading text-center text-4xl font-semibold`}
			>
				<a href='/contact'>Get in touch.</a>
			</h1>
		</AnimateUp>
	);
}

export default Outro;
