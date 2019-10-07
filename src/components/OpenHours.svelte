<script>
	import CTA from '../components/CTA.svelte';
	import Title from '../components/Title.svelte';
</script>

<style>

	section {
		padding: 72px 0;
		background-image: url('img/open-hours.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		text-align: center;
	}


	.info {
		color: #fff;
		line-height: 1.7em;
		margin-bottom: 20px;
	}

	.info:last-of-type {
		margin-bottom: 40px;
	}

	@media (min-width: 992px) {

		.info {
			font-size: 1.5em;
		}
	}

</style>

<section>
	<Title title="Reserve a Table" subTitle="OPEN HOURS" theme="title-white"/>

	<p class="info">
		Monday – Friday: 10 AM – 11 PM
	</p>

	<p class="info">
		Saturday – Sunday: 9 AM – 1 PM
	</p>

	<CTA linkHref="#" linkTheme="link-light" linkTitle="Book now"/>

</section>
