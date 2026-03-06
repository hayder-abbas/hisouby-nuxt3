<template>
	<article class="lg:basis-2/3 w-full md:w-2xl mx-auto lg:p-4">
		<header>
			<h1
				class="text-3xl font-semibold py-8 text-center lg:text-start"
				v-text="title"
			></h1>
		</header>

		<slot></slot>
	</article>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
}>();
</script>
