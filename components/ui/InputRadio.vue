<template>
	<label
		class="w-full border border-gray-500 rounded-3xl text-gray-900 flex justify-center gap-4 px-4 py-2 has-[input]:has-checked:bg-gray-900 has-[input]:has-checked:text-gray-50 lg:hover:bg-gray-300"
		:for="forId"
	>
		<input type="radio" :id="forId" :name="name" :hidden="hidden" />
		{{ title }}
	</label>
</template>

<script setup lang="ts">
defineProps<{
	forId: string;
	name: string;
	title: string;
	hidden?: boolean;
}>();
</script>
