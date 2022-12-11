import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ImageOutput.module.css';
import Spinner from './Spinner';

const ImageOutput = ({ isLoading, imageUrl }) => {
	if (isLoading) {
		return (
			<div className={styles.imageContainer}>
				<Spinner />
			</div>
		);
	}
	if (imageUrl.length === 0) {
		return (
			<h3 className={styles.imageContainer}>
				Enter a prompt to start AI Image Generation
			</h3>
		);
	}
	return (
		<div className={styles.imageContainer}>
			{!isLoading && (
				<Image src={imageUrl} alt="test" width={512} height={512} />
			)}
		</div>
	);
};

export default ImageOutput;
