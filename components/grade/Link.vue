<script setup lang="ts">
	defineProps<{
		to: string;
		title: string;
	}>();
</script>

<template>
	<li class="transition-all duration-200">
		<NuxtLink
			:to="to"
			class="block px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 hover:font-semibold transition-all duration-200 border border-transparent hover:border-slate-200"
		>
			{{ title }}
		</NuxtLink>
	</li>
</template>
