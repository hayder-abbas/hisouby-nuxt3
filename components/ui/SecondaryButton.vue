<template>
	<button
		:type="type"
		class="p-3 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-bold uppercase shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
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
