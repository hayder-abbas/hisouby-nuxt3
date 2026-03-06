<template>
	<figure class="">
		<img :src="imgSrc" :alt="imgAlt" class="w-full object-cover" />
	</figure>
</template>

<script setup lang="ts">
defineProps<{
	imgSrc: string;
	imgAlt: string;
}>();
</script>
