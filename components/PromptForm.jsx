import React, { useState } from 'react';
import styles from './promptform.module.css';

const PromptForm = ({ updateUrl, setIsLoading }) => {
	const [ prompt, setPrompt ] = useState('');
	const [ size, setSize ] = useState('medium');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (prompt === '' || size === '') return;
		try {
			const response = await fetch('/api/openai', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ prompt, size }),
			});
			const data = await response.json();
			updateUrl(data.imageUrl);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.form}>
			<form className={styles.formContainer} onSubmit={handleSubmit}>
				<div className={styles.formControl}>
					<label htmlFor="prompt">prompt</label>
					<input
						type="text"
						name="prompt"
						id="prompt"
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)}
					/>
				</div>
				<button type="submit">Generate Image</button>
			</form>
		</div>
	);
};

export default PromptForm;

{
	/* <div className={styles.formControl}>
					<label htmlFor="size">size</label>
					<select
						name="size"
						id="size"
						value={size}
						onChange={(e) => setSize(e.target.value)}
					>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</div> */
}
