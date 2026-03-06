<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثاني"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="مع زينب ٥ مئات + ٤ الاف, كم ديناراً مع زينب?"
			>
				<QuizMultipleChoiseCard>
					<UiInputRadio
						@click="answer = 4000"
						forId="answer1"
						name="answer"
						title="٤٠٠٠ دينار"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 5400"
						forId="answer2"
						name="answer"
						title="٥٤٠٠ دينار"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 4500"
						forId="answer3"
						name="answer"
						title="٤٥٠٠ دينار"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 45"
						forId="answer4"
						name="answer"
						title="٤٥ دينار"
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
		if (answer.value === 4500) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz3/q1", true);
			quiz.value.q8 = 1;
			if (userInfo.value) {
				quizes.value.quiz2 = $quizStore.getDegree();
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
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz3/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		if (userInfo.value) {
			quizes.value.quiz2 = $quizStore.getDegree();
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
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
