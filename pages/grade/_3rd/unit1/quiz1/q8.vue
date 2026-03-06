<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الأول"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="في الملعب ٤٠٠٠ مشجع كم عشرة من المشجعين في الملعب؟"
			>
				<QuizMultipleChoiseCard>
					<UiInputRadio
						@click="answer = 4"
						forId="answer1"
						name="answer"
						title="٤ عشرة"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 40"
						forId="answer2"
						name="answer"
						title="٤٠ عشرة"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 400"
						forId="answer3"
						name="answer"
						title="٤٠٠ عشرة"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 4000"
						forId="answer4"
						name="answer"
						title="٤٠٠٠ عشرة"
						:hidden="true"
					/>
				</QuizMultipleChoiseCard>
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
					<UiSecondaryButton @click="handleSkip"> مرر </UiSecondaryButton>
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
	definePageMeta({
		layout: false,
	});

	useHead({
		title: "الثالث الابتدائية - الفصل الأول",
	});

	const { $userStore, $quizStore } = useNuxtApp();
	const { userInfo } = storeToRefs($userStore);
	const { skipPopup, popup, quiz, NUMBER_OF_UNITS } = storeToRefs($quizStore);
	const units = ref(userInfo.value?.grades?.g3);
	const quizes = ref(units.value?.unit1 || {});
	const answer = ref<number>(0);

	function check(): void {
		if (answer.value === 400) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz2/q1", true);
			quiz.value.q8 = 1;
			if (userInfo.value) {
				quizes.value.quiz1 = $quizStore.getDegree();
				$quizStore.setDegreesCounter(units.value);
				$quizStore.updateQuiz({
					g3: {
						...units.value,
						unit1: {
							...quizes.value,
						},
					},
				});
				$userStore.setUserLevel(units.value, NUMBER_OF_UNITS.value);
			}
		} else {
			quiz.value.q8 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "", true);
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz2/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		if (userInfo.value) {
			quizes.value.quiz1 = $quizStore.getDegree();
			$quizStore.setDegreesCounter(units.value);
			$quizStore.updateQuiz({
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
					},
				},
			});
			$userStore.setUserLevel(units.value, 9);
		}
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
