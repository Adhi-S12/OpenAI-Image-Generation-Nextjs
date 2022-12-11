import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAPI_KEY,
});

const handler = async (req, res) => {
	const { n, size, prompt } = req.body;
	const imageSize =
		size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

	const openai = new OpenAIApi(configuration);

	if (req.method === 'POST') {
		console.log('REQUESTING IMAGE GENERATION');
		try {
			const response = await openai.createImage({
				prompt,
				n,
				size: imageSize,
			});
			if (response) {
				const imageUrl = response.data.data[0].url;
				res.status(200).json({ message: 'Success', imageUrl });
			}
		} catch (error) {
			if (error.response) {
				console.log(error.response.status);
				console.log(error.response.data);
			} else {
				console.log(error.message);
			}
			res
				.status(400)
				.json({ success: false, error: 'The image could not be generated' });
		}
	}
};

export default handler;
