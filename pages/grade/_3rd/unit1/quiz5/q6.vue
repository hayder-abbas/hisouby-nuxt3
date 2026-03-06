<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الخامس"
				question="السؤال السادس"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="مع زينب ١٥٠٠ ديناراً, ومع الاء ١٢٥٠ ديناراً, أيهما معها أكثر؟"
			>
				<QuizMultipleChoiseCard>
					<UiInputRadio
						@click="answer = 'زينب'"
						forId="answer1"
						name="answer"
						title="زينب"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'الاء'"
						forId="answer2"
						name="answer"
						title="الاء"
						:hidden="true"
					/>
					<UiInputRadio
						@click="answer = 'حيدر'"
						forId="answer3"
						name="answer"
						title="حيدر"
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
		if (answer.value === "زينب") {
			quiz.value.q6 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz5/q7");
		} else {
			quiz.value.q6 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz5/q7");
	}

	function skipQuestion(): void {
		quiz.value.q6 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
