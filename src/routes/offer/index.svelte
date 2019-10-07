<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`offer.json`).then(r => r.json()).then(posts => {
			console.log(posts);
			return { posts };

		});
	}
</script>

<script>
	import Title from '../../components/Title.svelte';
	import { fade } from 'svelte/transition';
	import Product from '../../components/Products.svelte'
	export let posts;

	let current = 'foo';
</script>

<style>

	button {
		display: block;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}


	section {
		text-align: center;
	}

	.category__item {
		margin-bottom: 24px;
		text-align: left;
	}

	.category__title {
		letter-spacing: 1px;
		padding: 8px 24px 8px 31px;
		text-transform: uppercase;
		cursor: pointer;
		border: 5px solid #252525;
		background: #ffffff;
		transition: all 0.5s ease-in-out 0s;
		font-size: 32px;
		color: #252525;
		font-weight: 700;
		position: relative;
	}

	.category__title:hover {
		background: #252525;
		color: #fff;
	}

	.category__title:hover:after,
	.category__title:hover:before {
		background: #fff;
	}

	.item-active .category__title:after {
		transform: rotate(45deg);
	}

	.item-active .category__title:before {
		transform: rotate(-45deg);
	}

	.category__title:after,
	.category__title:before {
		position: absolute;
		content: '';
		width: 10px;
		height: 3px;
		left: 6px;
		top: 50%;
		background-color: #252525;
		transform: rotate(45deg);
		transition: all 0.5s ease-in-out 0s;
	}

	.category__title:before {
		transform: rotate(-45deg);
		left: 12px;
	}

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 16px;
		row-gap: 16px;
		padding-top: 16px;
		padding-bottom: 16px;
	}

	.item {
		display: flex;
		align-items: center;
	}

	.item-img {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.item-name {
		display: flex;
		justify-content: space-between;
	}

	.item > div {
		flex: 1 0 auto;
	}

	.category__content {
		display: none;
	}

	.item-is-open .category__content {
		display: block;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}

	@media only screen and (min-width: 992px) {
		section {
			text-align: left;
		}

		.items {
			column-gap: 32px;
			row-gap: 32px;
		}
	}

</style>

<svelte:head>
	<title>offer</title>
</svelte:head>

<section>
	<div class="container"  transition:fade>
		<Title title="DISCOVER" subTitle="Our Menu" theme="title-dark"/>

		<p>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</p>

		<ul class="category">
			<li class:active="{current === 'foo'}">
				<h4 class="category__title">
					category 1
				</h4>
				<div class="category__content">
					<ul class="items">
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li class:active="{current === 'foo'}">
				<h4 class="category__title">
					category 1
				</h4>
				<div class="category__content">
					<ul class="items">
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li class="category__item" class:active="{current === 'foo'}">
				<h4 class="category__title">
					category 1
				</h4>
				<div class="category__content">
					<ul class="items">
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
						<li class="item">
							<img src="img/thumb.jpg" class="item-img" alt="">
							<div>
								<p class="item-name">
									<span>AVOCADO & MANGO SALSA</span> $4.00
								</p>
								<p class="item-ingredients">
									Avocado / Mango / Tomatoes
								</p>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		<ul>
			{#each posts as post}
			<!-- we're using the non	-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<li><a rel='prefetch' href='offer/{post.data.slug}'>{post.data.title}</a></li>
			{/each}
		</ul>
	</div>

	<button
			class:active="{current === 'foo'}"
			on:click="{() => current = 'foo'}"
	>foo</button>

	<button
			class:active="{current === 'bar'}"
			on:click="{() => current = 'bar'}"
	>bar</button>

	<button
			class:active="{current === 'baz'}"
			on:click="{() => current = 'baz'}"
	>baz</button>

</section>

<ul transition:fade>
	{#each posts as post}
		<li>{post.data.title[0].text}</li>
		<Product categoryid={post.id} />
	{/each}
</ul>
