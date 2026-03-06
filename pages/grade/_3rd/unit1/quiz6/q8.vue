<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس السادس"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="أكتب ثلاثة أعداد من ثلاث مراتب باستعمال الأرقام ٢, ٤, ٧, بدون تكرار وأرتبها من الأكبر الى الأصغر."
			>
				<div class="md:w-xl mx-auto">
					<div class="w-full flex justify-center items-center gap-4 p-4">
						<UiDotedInput
							v-model="num1"
							class="w-16 sm:w-20 border-b-rose-500 text-rose-500"
						/>
						<div class="flex items-center text-xl">&lt;</div>
						<UiDotedInput
							v-model="num2"
							class="w-16 sm:w-20 border-b-lime-500 text-lime-500"
						/>
						<div class="flex items-center text-xl">&lt;</div>
						<UiDotedInput
							v-model="num3"
							class="w-16 sm:w-20 border-b-blue-500 text-sky-500"
						/>
					</div>
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

	const num1 = ref("");
	const num2 = ref("");
	const num3 = ref("");

	function check(): void {
		if (num1.value < num2.value && num2.value < num3.value) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz7/q1", true);
			quiz.value.q8 = 1;
			if (userInfo.value) {
				quizes.value.quiz6 = $quizStore.getDegree();
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
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz7/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		if (userInfo.value) {
			quizes.value.quiz6 = $quizStore.getDegree();
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
