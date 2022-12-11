import Head from 'next/head';
import Image from 'next/image';
import PromptForm from '../components/PromptForm';
import Imageoutput from '../components/ImageOutput';
import { useState } from 'react';

export default function Home() {
	const [ imageUrl, setImageUrl ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);
	const updateUrl = (url) => setImageUrl(url);
	return (
		<div className="homepage">
			<Head>
				<title>OpenAI Image Generation</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Using OpenAi Api to generate images based on user's prompts"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<PromptForm updateUrl={updateUrl} setIsLoading={setIsLoading} />
			<Imageoutput isLoading={isLoading} imageUrl={imageUrl} />
		</div>
	);
}
