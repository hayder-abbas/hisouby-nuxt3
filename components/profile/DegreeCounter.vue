<template>
	<div
		class="w-full flex justify-center items-center font-semibold gap-2"
		:class="colorList[degree]"
	>
		<span>{{ title }}:</span>
		<span>{{ degreeCount }}</span>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		degreeCount: number;
		title: string;
		degree: string;
	}>();

	let colorList = reactive<any>({
		excellent: "text-lime-600",
		good: "text-amber-600",
		poor: "text-rose-600",
	});
</script>
