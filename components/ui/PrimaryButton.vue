<template>
	<button
		:type="type"
		class="p-3 bg-blue-500 border border-blue-500 rounded-md text-white text-sm font-bold uppercase shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
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
