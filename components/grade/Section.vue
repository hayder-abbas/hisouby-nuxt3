<script setup lang="ts">
	defineProps<{
		isOpen: boolean;
		title: string;
	}>();
</script>

<template>
	<section class="overflow-hidden">
		<button
			@click="$emit('click')"
			class="w-full flex items-center justify-between gap-4 px-6 py-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group"
		>
			<div class="flex items-center gap-3">
				<div
					class="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
				>
					<IconAbacus class="w-5 h-5 text-slate-600" />
				</div>
				<h2 class="text-lg font-semibold text-slate-900">{{ title }}</h2>
			</div>
			<IconChevronDown
				class="w-5 h-5 text-slate-600 transition-transform duration-300"
				:class="isOpen ? 'rotate-180' : ''"
			/>
		</button>

		<transition
			enter-active-class="transition-all duration-300 ease-out"
			leave-active-class="transition-all duration-300 ease-in"
			enter-from-class="opacity-0 -translate-y-2"
			enter-to-class="opacity-100 translate-y-0"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 -translate-y-2"
		>
			<ul v-if="isOpen" class="mt-2 space-y-1 px-2">
				<slot></slot>
			</ul>
		</transition>
	</section>
</template>
