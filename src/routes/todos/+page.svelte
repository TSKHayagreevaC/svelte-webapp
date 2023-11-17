<script>
// @ts-nocheck

	import { fly, slide} from 'svelte/transition';
	import {enhance} from '$app/forms';
	export let data;
	export let form;

	let creating = false;
	let deleting = [];
</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<label>
		add a todo:
		<input
			type="text"
			autocomplete="off"
			on:keydown={async (e) => {
				if (e.key === 'Enter') {
					const input = e.currentTarget;
					const description = input.value;
					
					const response = await fetch('/todos', {
						method: 'POST',
						body: JSON.stringify({ description }),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					const { id } = await response.json();

					data.todos = [...data.todos, {
						id,
						description
					}];

					input.value = '';
				}
			}}
		/>
	</label>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<label>
					<input
						type="checkbox"
						checked={todo.done}
						on:change={async (e) => {
							const done = e.currentTarget.checked;

							// TODO handle change
						}}
					/>

					<span>{todo.description}</span>
					<button
						aria-label="Mark as complete"
						on:click={async (e) => {
							// TODO handle delete
						}}
					/>
				</label>
			</li>
		{/each}
	</ul>

	{#if creating}
		<span class="saving">Saving...</span>
	{/if}

</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	ul {
		list-style: none;
		padding: 5px;
	}

	li {
		border: 1px solid grey;
		border-radius: 3px;
		margin-bottom: 0.5rem;
		background-color: white;
	}
	
	label {
		padding: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
