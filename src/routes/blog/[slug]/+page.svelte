<script>
    export let data;
</script>

<section>
	<h1>{data.post?.title}</h1>
    <div>{@html data.post?.content}</div>
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