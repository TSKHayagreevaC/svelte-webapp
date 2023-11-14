<script>
    import { page } from "$app/stores";
</script>

<section>
	<h1>Blog: {$page.params.slug}</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>