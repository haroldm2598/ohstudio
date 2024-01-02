function Heading({ title, customStyle }) {
	return (
		<h1 className={` ${customStyle} text-center font-semibold leading-snug`}>
			{title}
		</h1>
	);
}

export default Heading;
