<script>
	import Counter from "../Counter.svelte";
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Counter of this app" />
</svelte:head>

<div class="text-column">
	<h1>Counter</h1>

	<section>
		<Counter />
	</section>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can increment counter by clicking + button and decrement - to decrement counter.
	</p>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
