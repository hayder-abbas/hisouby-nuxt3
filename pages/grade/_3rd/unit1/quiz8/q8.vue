<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثامن"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="يبعد منزل جبار ٢٨٢٥ متراً عن المدرسة, ويبعد منزل ناصر ١٩٣٥ متراً عنها. أيهما منزله أقرب إلى المدرسة؟"
			>
				<div class="w-full grid sm:grid-cols-2 gap-4 md:p-4 lg:w-2xl mx-auto">
					<div class="w-full">
						<QuizTable :tHeads="['احاد', 'عشرات', 'مئات', 'الوف']">
							<tr>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
							</tr>
							<tr>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput class="w-full border-none focus:outline-0" />
								</td>
							</tr>
						</QuizTable>
					</div>
					<QuizMultipleChoiseCard>
						<UiInputRadio
							@click="answer = 'جبار'"
							forId="answer1"
							name="answer"
							title="جبار"
							:hidden="true"
						/>
						<UiInputRadio
							@click="answer = 'ناصر'"
							forId="answer2"
							name="answer"
							title="ناصر"
							:hidden="true"
						/>
					</QuizMultipleChoiseCard>
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
					<UiSecondaryButton @click="handelSkip">مرر</UiSecondaryButton>
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
	let answer = ref("");

	function check(): void {
		if (answer.value === "ناصر") {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd", true);
			quiz.value.q8 = 1;
			if (userInfo.value) {
				quizes.value.quiz8 = $quizStore.getDegree();
				$quizStore.setDegreesCounter(units.value);
				$quizStore.updateQuiz({
					g3: {
						...units.value,
						unit1: {
							...quizes.value,
							done: true,
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

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		if (userInfo.value) {
			quizes.value.quiz8 = $quizStore.getDegree();
			$quizStore.setDegreesCounter(units.value);
			$quizStore.updateQuiz({
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
						done: true,
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
