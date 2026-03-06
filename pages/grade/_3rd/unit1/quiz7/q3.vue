<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس السابع"
				question="السؤال الثالث"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="أقرب الأعداد الى أقرب عشرة:">
				<div class="sm:w-lg mx-auto">
					<div class="flex gap-4 w-full justify-center items-center">
						<div class="text-2xl">٧٦٨٥</div>
						<div class="text-2xl">&approx;</div>
						<div>
							<UiDotedInput v-model="answer" class="w-20 text-2xl" />
						</div>
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

	const { $quizStore } = useNuxtApp();
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);
	const answer = ref("");

	function check(): void {
		if (answer.value === "7690" || answer.value === "٧٦٩٠") {
			quiz.value.q3 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz7/q4");
		} else {
			quiz.value.q3 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz7/q4");
	}

	function skipQuestion(): void {
		quiz.value.q3 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
