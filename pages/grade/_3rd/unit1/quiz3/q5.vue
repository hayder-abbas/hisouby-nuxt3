<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثالث"
				question="السؤال الخامس"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="اكتب العدد بالأرقام من الصورة التحليلية:">
				<div
					class="flex flex-col sm:flex-row gap-4 w-xs sm:w-md md:w-lg mx-auto"
				>
					<div class="flex items-center justify-center p-4 text-2xl">
						<p>٤ + ٨٠ + ٣٠٠ + ٧٠٠٠</p>
					</div>

					<div class="flex items-center justify-center gap-4 p-4">
						<span> = </span>
						<UiDotedInput v-model="answer" class="w-24" />
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

	const checkResults = (): boolean => {
		if (answer.value === "7384") {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (answer.value === "٧٣٨٤") {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q5 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz3/q6");
		} else {
			quiz.value.q5 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz3/q6");
	}

	function skipQuestion(): void {
		quiz.value.q5 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
