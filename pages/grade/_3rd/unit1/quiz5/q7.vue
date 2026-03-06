<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الخامس"
				question="السؤال السابع"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="في المباراة النهائية, كان عدد مشجعي برشلونة ٩١٦٠ شخصاً ونادي ريال مدريد ٩١٥٩, أيهما أكبر؟"
			>
				<QuizMultipleChoiseCard>
					<UiInputRadio
						@click="answer = 'برشلونة'"
						forId="answer1"
						name="answer"
						title="برشلونة"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'ريال مدريد'"
						forId="answer2"
						name="answer"
						title="ريال مدريد"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'الزوراء'"
						forId="answer3"
						name="answer"
						title="الزوراء"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'لا أحد'"
						forId="answer4"
						name="answer"
						title="لا أحد"
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

	const answer = ref("");

	function check(): void {
		if (answer.value === "برشلونة") {
			quiz.value.q7 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz5/q8");
		} else {
			quiz.value.q7 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz5/q8");
	}

	function skipQuestion(): void {
		quiz.value.q7 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
