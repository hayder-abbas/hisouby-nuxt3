<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثامن"
				question="السؤال الأول"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="اشترى حسام حذاءً رياضياً بمبلغ ٨٥٠٠ دينار وزياً رياضياً بمبلغ ٨٧٥٠ ديناراً, ما هو الأغلى ثمناً الحذاء أم الزي الرياضي؟"
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
							@click="answer = 'الحذاء'"
							forId="answer1"
							name="answer"
							title="الحذاء"
							:hidden="true"
						/>
						<UiInputRadio
							@click="answer = 'الزي الرياضي'"
							forId="answer2"
							name="answer"
							title="الزي الرياضي"
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
		if (answer.value === "الزي الرياضي") {
			quiz.value.q1 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz8/q2");
		} else {
			quiz.value.q1 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz8/q2");
	}

	function skipQuestion(): void {
		quiz.value.q1 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
