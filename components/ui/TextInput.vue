<template>
	<input
		type="text"
		class="text-center bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600"
		v-model="model"
	/>
</template>

<script setup lang="ts">
	const model = defineModel<string | null>({ required: false });
</script>
