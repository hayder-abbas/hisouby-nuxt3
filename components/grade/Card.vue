<script setup lang="ts">
	defineProps<{
		to: string;
		title: string;
		icon: string;
		color: string;
	}>();
</script>

<template>
	<NuxtLink
		:to="to"
		class="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-slate-300"
	>
		<!-- Background gradient effect -->
		<div
			class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
			:class="color"
		></div>

		<!-- Icon -->
		<div
			:class="`${color} w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`"
		>
			{{ icon }}
		</div>

		<!-- Text -->
		<h3
			class="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors duration-300"
		>
			{{ title }}
		</h3>
		<p class="text-sm text-slate-500 mt-2">الانتقال إلى الدروس</p>

		<!-- Arrow icon -->
		<div
			class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		>
			<IconArrow />
		</div>
	</NuxtLink>
</template>
