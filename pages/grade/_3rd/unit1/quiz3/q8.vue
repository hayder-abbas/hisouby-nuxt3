<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثالث"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="ما اسم مرتبة الرقم ٦ في العدد ١٦٠٠؟">
				<QuizMultipleChoiseCard>
					<UiInputRadio
						@click="answer = 'احاد'"
						forId="answer1"
						name="answer"
						title="احاد"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'عشرات'"
						forId="answer2"
						name="answer"
						title="عشرات"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'مئات'"
						forId="answer3"
						name="answer"
						title="مئات"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'الوف'"
						forId="answer4"
						name="answer"
						title="الوف"
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
	const answer = ref("");

	function check(): void {
		if (answer.value === "مئات") {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz4/q1", true);
			quiz.value.q8 = 1;
			if (userInfo.value) {
				quizes.value.quiz3 = $quizStore.getDegree();
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
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz4/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		if (userInfo.value) {
			quizes.value.quiz3 = $quizStore.getDegree();
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
