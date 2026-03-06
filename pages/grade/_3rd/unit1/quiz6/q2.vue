<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس السادس"
				question="السؤال الثاني"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="أرتب الأعداد من الأصغر الى الأكبر:">
				<div class="sm:w-md mx-auto">
					<div class="py-4 text-gray-500 text-sm">الأصغر</div>
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
					<div class="py-4 text-gray-500 text-sm">الأكبر</div>
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
		{ id: 1, number: "٨٩٢٤" },
		{ id: 2, number: "٨٤٩٢" },
		{ id: 3, number: "٨٩٤٢" },
	]);
	const listAnswer = ref<string[]>([]);

	function fillListAnswer(event: any): void {
		event.target.childNodes.forEach((element: any) => {
			listAnswer.value.push(element.innerText);
		});
	}

	function checkAnswer(): boolean {
		return (
			listAnswer.value[0] === "٨٤٩٢" &&
			listAnswer.value[1] === "٨٩٢٤" &&
			listAnswer.value[2] === "٨٩٤٢"
		);
	}

	function check(): void {
		if (checkAnswer()) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz6/q3");
			quiz.value.q2 = 1;
		} else {
			$quizStore.setPopup("حاول مرة اخرى", false);
			quiz.value.q2 = -1;
		}
	}

	function handelSkip(): void {
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz6/q3");
		popup.value.open = false;
	}

	function skipQuestion(): void {
		quiz.value.q2 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
