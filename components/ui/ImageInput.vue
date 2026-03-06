<template>
	<label
		class="block relative -top-24 right-[50%] translate-x-[50%] bg-gray-100 w-32 h-32 p-4 rounded-full"
	>
		<span
			class="absolute top-0 left-0 flex items-center justify-center z-10 bg-[rgb(0,0,0,0.3)] hover:bg-[rgb(0,0,0,0.2)] w-full h-full rounded-full cursor-pointer"
		>
			<IconCamera class="w-10 text-gray-50" />
		</span>

		<img :src="src || '/images/no-image.png'" :alt="alt" class="w-full" />
	</label>
</template>

<script setup lang="ts">
	defineProps<{
		src: string;
		alt: string;
	}>();
</script>
