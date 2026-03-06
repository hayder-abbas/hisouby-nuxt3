<template>
	<li
		class="flex justify-center w-full hover:bg-gray-200 cursor-pointer p-2 rounded-lg"
	>
		<img :src="`/images/avatars/${avatar}`" alt="Avatar" class="w-10" />
	</li>
</template>

<script setup lang="ts">
	defineProps<{
		avatar: string;
	}>();
</script>
