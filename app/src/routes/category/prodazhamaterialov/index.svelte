<script>
	import { MarketingSectionV6 } from '$broker';

	export let seoTitle;
	export let seoDescription;
	export let contentMarketingSectionV6;
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
</svelte:head>

<MarketingSectionV6 {...contentMarketingSectionV6} />
