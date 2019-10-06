<script>
	import HeroBanner from '../components/Banner.svelte';
	import Overview from '../components/Overview.svelte';
	import OpenHours from '../components/OpenHours.svelte';
</script>

<style>
/* 	.hero-banner {
		height: 100vh;
		background-color: #555555;
		max-width: 100vw;
		overflow-x: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-img {
		object-fit: cover;
		object-position: center;
		height: 100%;
	}

	main {
		padding-top: 64px;
	} */
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<HeroBanner />
<Overview />
<OpenHours />







