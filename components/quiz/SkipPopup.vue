<template>
	<div
		v-if="skipPopup.open"
		class="absolute -top-32 left-[50%] -translate-x-[50%] z-10 bg-gray-50 w-56 p-4 border-1 border-gray-300 rounded-lg"
	>
		<div class="text-center mb-4">هل انت متأكد؟</div>
		<div class="flex justify-between">
			<UiFailedButton @click="$emit('skipQuestion'), resetQuiz()">
				<NuxtLink :to="skipPopup.next">نعم</NuxtLink>
			</UiFailedButton>

			<UiSuccessButton @click="skipPopup.open = false">
				الغاء
			</UiSuccessButton>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	skipPopup: any;
}>();

const { $quizStore } = useNuxtApp();

function resetQuiz() {
	if (props.skipPopup.resetQuiz) {
		$quizStore.resetQuiz();
	}
}
</script>
