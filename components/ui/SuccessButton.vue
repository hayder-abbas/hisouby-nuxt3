<template>
	<button
		:type="type"
		class="inline-flex items-center px-4 py-2 bg-lime-500 border border-transparent rounded-md font-semibold text-xs text-white hover:bg-lime-600 focus:bg-lime-600 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 transition ease-in-out duration-150"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		type?: "button" | "submit" | "reset";
	}>(),
	{
		type: "button",
	}
);
</script>
