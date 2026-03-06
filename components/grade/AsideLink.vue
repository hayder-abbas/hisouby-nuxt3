<template>
	<NuxtLink
		:to="link"
		class="w-full p-4 border-b-1 border-b-gray-300 hover:bg-gray-100"
	>
		<h2 class="text-gray-500 text-sm">{{ title }}</h2>
		<p class="text-gray-900">{{ topic }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	topic: string;
	link: string;
}>();
</script>
