<template>
	<aside
		class="w-full md:w-2xl lg:basis-1/3 flex flex-col mx-auto mb-8 lg:p-4 lg:max-h-screen lg:min-h-screen overflow-y-auto bg-white"
	>
		<NuxtLink
			:to="link"
			class="w-full p-4 border-b-1 border-r-4 border-b-gray-300 border-r-blue-700 bg-gray-100"
		>
			<span class="text-gray-900 font-semibold block">{{ title }}</span>
			<span class="text-gray-500 text-sm">
				<span>{{ units }} فصول - </span>
				<span>{{ tests }} درس</span>
			</span>
		</NuxtLink>
		<!-- Sidebar links -->
		<slot></slot>
		<!-- /Sidebar links -->
	</aside>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	units: string;
	tests: string;
	link: string;
}>();
</script>
