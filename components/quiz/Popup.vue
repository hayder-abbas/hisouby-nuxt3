<template>
	<div
		v-if="popup.open"
		class="absolute -top-32 left-[50%] -translate-x-[50%] z-10 bg-gray-50 w-56 p-4 border-1 border-gray-300 rounded-lg"
	>
		<div class="text-center mb-4" v-text="popup.popupTitle"></div>
		<div class="flex justify-between">
			<UiSuccessButton v-if="popup.successBtn" @click="resetQuiz">
				<NuxtLink :to="popup.next">التالي</NuxtLink>
			</UiSuccessButton>

			<UiFailedButton v-else @click="popup.open = false">حسنا</UiFailedButton>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	popup: any;
}>();

const { $quizStore } = useNuxtApp();

function resetQuiz() {
	if (props.popup.resetQuiz) {
		$quizStore.resetQuiz();
	}
}
</script>
