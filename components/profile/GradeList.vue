<template>
	<li class="basis-17 p-2 text-xs bg-gray-100 rounded-md">
		<figure>
			<img :src="src" alt="class badge" class="mb-2 w-full rounded-full" />
			<figcaption class="text-center">{{ title }}</figcaption>
		</figure>
	</li>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string;
		badgeImage?: string;
	}>();

	let src = props.badgeImage
		? ref<string>(`/images/badges/${props.badgeImage}`)
		: ref<string>("/images/blank-img.webp");
</script>
