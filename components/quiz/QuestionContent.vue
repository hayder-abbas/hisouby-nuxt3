<template>
	<section class="my-8 mx-4 md:mx-0">
		<div class="w-full p-4 md:px-0 bg-white rounded-xl shadow-md">
			<!-- Question -->
			<h2 class="flex gap-2 py-4 md:px-4 mb-6 text-gray-900">
				<div>
					<IconQuestionMark class="place-self-start min-w-7 max-w-7" />
				</div>
				<div class="place-self-end">
					{{ question }}
				</div>
			</h2>
			<!-- /Question -->

			<!-- Answer -->
			<slot></slot>
			<!-- /Answer -->
		</div>
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		question: string;
	}>();
</script>
