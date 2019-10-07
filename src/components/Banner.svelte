<script>
	import CTA from '../components/CTA.svelte';
</script>

<style>
	.hero-banner {
		padding-top: 64px;
		padding-bottom: 64px;
		background-color: #555555;
		max-width: 100vw;
		overflow-x: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-image: url('img/img-2.jpg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		width: 100%;
		text-align: center;
	}

	.hero-banner:before {
		content: '';
		background: rgba(25, 32, 46, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
	}

	h1, p {
		position: relative;
		z-index: 2;;
	}

	h1 {
		font-size: 36px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #ffffff;
		font-weight: 700;
	}

	p {
		font-size: 16px;
		color: #ffffff;
		font-weight: 300;
		margin-bottom: 24px;
	}

	@media only screen and (min-width: 768px) {
		.hero-banner {
			height: 100vh;
		}

		h1 {
			font-size: 108px;
		}

		p {
			font-size: 20px;
		}
	}
</style>

<div class="hero-banner">
	<h1>
		Welcome
	</h1>
	<p>
		You should come and taste for yourself
	</p>
	<CTA linkHref="#" linkTheme="link-light" linkTitle="Book a table"/>
</div>
