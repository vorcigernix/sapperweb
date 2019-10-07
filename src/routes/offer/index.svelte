<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`offer.json`).then(r => r.json()).then(posts => {
			console.log(posts);
			return { posts };
			
		});
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import Product from '../../components/Products.svelte'
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>offer</title>
</svelte:head>

<h1>Recent posts</h1>

<ul transition:fade>
	{#each posts as post}
		<li>{post.data.title[0].text}</li>
		<Product categoryid={post.id} />
	{/each}
</ul>