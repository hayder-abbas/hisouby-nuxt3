<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس السادس"
				question="السؤال السادس"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="أرتب الأعداد من الأكبر الى الأصغر:">
				<div class="sm:w-md mx-auto">
					<div class="py-4 text-gray-500 text-sm">الأكبر</div>
					<Draggable
						v-model="items"
						item-key="id"
						@start="listAnswer = []"
						@end="fillListAnswer($event)"
						class="flex flex-col text-center gap-4"
					>
						<template #item="{ element }">
							<UiDraggableItem>
								{{ element.number }}
							</UiDraggableItem>
						</template>
					</Draggable>
					<div class="py-4 text-gray-500 text-sm">الأصغر</div>
				</div>
			</QuizQuestionContent>
			<!-- /Question Content -->
		</template>

		<!-- Quize footer -->
		<template #quiz_footer>
			<QuizFooter
				class="sticky bottom-0 w-full h-24 p-4 flex justify-between gap-2 border-t-1 border-gray-400"
			>
				<!-- Actions -->
				<div class="flex items-center gap-2">
					<UiPrimaryButton @click="check">النتيجة</UiPrimaryButton>
					<UiSecondaryButton @click="handelSkip"> مرر </UiSecondaryButton>
				</div>
				<!-- /Actions -->

				<QuizIndicator :quiz="quiz" />
				<QuizPopup :popup="popup" />
				<QuizSkipPopup :skipPopup="skipPopup" @skipQuestion="skipQuestion" />
			</QuizFooter>
		</template>
		<!-- /Quize footer -->
	</NuxtLayout>
</template>

<script setup lang="ts">
	import Draggable from "vuedraggable";

	definePageMeta({
		layout: false,
	});
	useHead({
		title: "الثالث الابتدائية - الفصل الأول",
	});

	const { $quizStore } = useNuxtApp();
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);

	const items = ref([
		{ id: 1, number: "٥٨٧١" },
		{ id: 2, number: "٥٠٧٢" },
		{ id: 3, number: "٥٨٧٠" },
	]);
	const listAnswer = ref<string[]>([]);

	function fillListAnswer(event: any): void {
		event.target.childNodes.forEach((element: any) => {
			listAnswer.value.push(element.innerText);
		});
	}

	function checkAnswer(): boolean {
		return (
			listAnswer.value[0] === "٥٨٧١" &&
			listAnswer.value[1] === "٥٨٧٠" &&
			listAnswer.value[2] === "٥٠٧٢"
		);
	}

	function check(): void {
		if (checkAnswer()) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz6/q7");
			quiz.value.q6 = 1;
		} else {
			$quizStore.setPopup("حاول مرة اخرى", false);
			quiz.value.q6 = -1;
		}
	}

	function handelSkip(): void {
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz6/q7");
		popup.value.open = false;
	}

	function skipQuestion(): void {
		quiz.value.q6 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
