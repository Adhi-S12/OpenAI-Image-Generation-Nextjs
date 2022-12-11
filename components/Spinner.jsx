import React, { useEffect, useRef } from 'react';

const Spinner = () => {
	const ref = useRef(null);
	useEffect(() => {
		import('@lottiefiles/lottie-player');
	});
	return (
		<div>
			<lottie-player
				id="firstLottie"
				ref={ref}
				autoplay
				mode="normal"
				src="https://assets7.lottiefiles.com/packages/lf20_XNkmTcRLYp.json"
				loop
			/>
		</div>
	);
};
export default Spinner;
