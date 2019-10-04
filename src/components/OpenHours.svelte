<script>
	import CTA from '../components/CTA.svelte';
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

	.title {
		color: #fff;
		font-size: 16px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.subtitle {
		color: #fff;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 42px;
		position: relative;
		display: inline-block;
		margin-bottom: 25px;
	}

	.subtitle:after,
	.subtitle:before {
		content: '';
		width: 100%;
		height: 1px;
		background: #fff;
		bottom: 0;
		left: 0;
		position: absolute;
	}

	.subtitle:after {
		height: 5px;
		bottom: -7px;
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
		.subtitle {
			font-size: 54px;
		}

		.info {
			font-size: 1.5em;
		}
	}

</style>

<section>
	<h3 class="title">
		Reserve a Table
	</h3>

	<p class="subtitle">
		Open Hours
	</p>

	<p class="info">
		Monday – Friday: 10 AM – 11 PM
	</p>

	<p class="info">
		Saturday – Sunday: 9 AM – 1 PM
	</p>

	<CTA />

</section>
