<script setup lang="ts">
	defineProps<{
		userLevel: number;
	}>();
</script>

<template>
	<div class="p-4 text-gray-900">
		<label class="flex items-center justify-between">
			<div>مستوى التقدم:</div>
			<div>{{ userLevel }}%</div>
		</label>
		<progress max="100" :value="userLevel"></progress>
	</div>
</template>

<style scoped lang="scss">
	$bg-color: #e2e8f0;
	$val-bg-color: #101828;
	$val-border-radius: 0.5rem;

	progress {
		/* Remove default look */
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;

		width: 100%;
		height: 0.5rem;
		border-radius: 0.75rem;
		background-color: $bg-color;

		/* Chrome / Safari */
		&::-webkit-progress-bar {
			background-color: $bg-color;
		}
		&::-webkit-progress-value {
			background-color: $val-bg-color;
			border-radius: $val-border-radius;
		}

		/* Firefox */
		&::-moz-progress-bar {
			background-color: $val-bg-color;
			border-radius: $val-border-radius;
		}
	}
</style>
