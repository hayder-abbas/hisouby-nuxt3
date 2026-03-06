<template>
	<table class="w-full text-center">
		<thead>
			<tr>
				<th
					v-for="(th, index) in tHeads"
					:key="index"
					v-text="th"
					class="text-sm md:text-base border-1 border-gray-400 bg-amber-300"
				></th>
			</tr>
		</thead>
		<tbody>
			<slot></slot>
		</tbody>
	</table>
</template>

<script setup lang="ts">
	defineProps<{
		tHeads: string[];
	}>();
</script>
