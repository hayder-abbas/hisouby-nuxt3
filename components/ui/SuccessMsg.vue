<template>
	<div class="absolute top-4 right-0 w-full sm:px-4">
		<div class="py-3 w-80 mx-auto sm:mx-0 bg-lime-200 rounded-md border-r-6 border-lime-600 shadow-md">
			<p
				class="font-semibold text-sm text-center text-lime-600"
				v-text="msg"
			></p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	msg: string | null;
}>();
</script>
