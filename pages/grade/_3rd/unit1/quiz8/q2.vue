<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثامن"
				question="السؤال الثاني"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="يبلغ طول الحوت الرمادي ١٤٦٣	سنتمتراً يبلغ طول الحوت الأحدب ١٣٧٢ سنتمتراً, أيهما أطول؟"
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
							@click="answer = 'الحوت الرمادي'"
							forId="answer1"
							name="answer"
							title="الحوت الرمادي"
							:hidden="true"
						/>
						<UiInputRadio
							@click="answer = 'الحوت الأحدب'"
							forId="answer2"
							name="answer"
							title="الحوت الأحدب"
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
	definePageMeta({
		layout: false,
	});

	useHead({
		title: "الثالث الابتدائية - الفصل الأول",
	});

	const { $quizStore } = useNuxtApp();
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);
	let answer = ref("");

	function check(): void {
		if (answer.value === "الحوت الرمادي") {
			quiz.value.q2 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz8/q3");
		} else {
			quiz.value.q2 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz8/q3");
	}

	function skipQuestion(): void {
		quiz.value.q2 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
