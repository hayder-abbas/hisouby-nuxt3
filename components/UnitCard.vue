<template>
	<div class="border-b-1 border-gray-300 px-4">
		<h2 v-show="title" class="text-gray-900 font-semibold mb-5">{{ title }}</h2>
		<div class="flex flex-wrap gap-x-4 gap-y-6 mb-5">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title: string;
	}>();
</script>
