<template>
	<section class="sticky top-0 bg-gray-50">
		<div
			class="w-full p-4 mx-auto flex justify-start items-center border-b-1 border-gray-400"
		>
			<NuxtLink :to="href" @click="resetQuiz">
				<IconHome class="w-6 h-6 text-gray-900" />
			</NuxtLink>
			<IconCircle class="w-1 mx-1 pt-3 text-gray-900" />
			<span class="text-xs mx-1 text-gray-700">{{ unit }}</span>
			<IconCircle class="w-1 mx-1 pt-3 text-gray-900" />
			<span class="text-xs mx-1 text-gray-700">{{ quize }}</span>
			<IconCircle class="w-1 mx-1 pt-3 text-gray-900" />
			<span class="text-xs text-gray-700 mx-1 font-semibold">{{ question }}</span>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	unit: string;
	quize: string;
	question: string;
	href: string;
}>();

const { $quizStore } = useNuxtApp();

function resetQuiz() {
	$quizStore.resetQuiz();
}
</script>
