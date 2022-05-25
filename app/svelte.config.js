import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		alias: {
			$broker: 'src/broker',
			$components: 'src/components',
			$utils: 'src/utils',
			$layout: 'src/layout',
		}
	},
};

export default config;
