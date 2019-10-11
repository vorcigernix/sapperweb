<script>
  import HeroBanner from "../components/Banner.svelte";
  import Overview from "../components/Overview.svelte";
  import OpenHours from "../components/OpenHours.svelte";
  import { fade } from "svelte/transition";
  import IntersectionObserver from "../components/Intersection.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div>
  <HeroBanner
    bannerSubtitle="You should come and taste for yourself"
    bannerTitle="Welcome"
    themeBannerHeight="hero-banner--full-height"
    hasButton="true"
    bannerImg="hero-banner--homepage" />
  <IntersectionObserver once let:intersecting top={400}>
    {#if intersecting}
		<div>fkin observer </div>
    {/if}
  </IntersectionObserver>
      <Overview />
      <OpenHours />
</div>
